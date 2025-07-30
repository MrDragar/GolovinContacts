import os
import uuid
from typing import Annotated

from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware  # Add this import
from fastapi import Depends, FastAPI

from app.dependencies import get_telegram_service
from app.services.telegram import TelegramService


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
async def create_pdf(request: Request):
    return {"status": "Success", "message": f"Hello"}

@app.get("/notify")
async def notify(telegram_service: Annotated[TelegramService, Depends(get_telegram_service)]):
    await telegram_service.send_hello()
