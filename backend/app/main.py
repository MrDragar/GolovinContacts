import os
import uuid

from fastapi import FastAPI, Request
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware  # Add this import

from app.pdf_creater import generate_pdf_report
from app.model import LDPRReport


app = FastAPI()
app.mount("/media", StaticFiles(directory="media"), name="media")


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


@app.post("/")
async def create_pdf(report: LDPRReport, request: Request):
    return {"status": "Success", "message": f"Hello"}
