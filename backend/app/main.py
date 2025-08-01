import os
import uuid
from typing import Annotated

from pydantic import BaseModel
from fastapi import FastAPI, Request, Depends
from fastapi.middleware.cors import CORSMiddleware

from app.dependencies import get_telegram_service, get_database_service
from app.services.telegram import TelegramService
from app.services.database import DatabaseService
from app.config import settings


app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Разрешить все источники временно
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    expose_headers=["*"]  
)


@app.get("/ping")
async def ping():
    return {"message": "Pong"}


@app.get("/")
async def send_hello(request: Request):
    return {"status": "Success", "message": f"Hello"}


@app.on_event("startup")
async def startup_event():
    DatabaseService(settings.DATABASE_PATH).init_db()
    


class NotificationRequest(BaseModel):
    name: str
    email: str
    message: str


@app.post("/notify")
async def notify(data: NotificationRequest, telegram_service: Annotated[TelegramService, Depends(get_telegram_service)]):
    await telegram_service.send_notification(data.name, data.email, data.message)
