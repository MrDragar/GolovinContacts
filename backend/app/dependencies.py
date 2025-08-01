from typing import Annotated

from app.config import settings
from app.services import database
from app.services import telegram

from fastapi import Depends
from aiogram import Bot

_bot_generator = None


async def get_database_service() -> database.DatabaseService: 
    return database.DatabaseService(settings.DATABASE_PATH)


async def get_telegram_service(database_service: Annotated[database.DatabaseService, Depends(get_database_service)]) -> telegram.TelegramService: 
    global  _bot_generator
    if _bot_generator is None:
        _bot_generator = telegram.get_bot_generator(settings.TELEGRAM_TOKEN)
  
    bot = await anext(_bot_generator)
    return telegram.TelegramService(bot, settings.CHAT_ID, database_service)


