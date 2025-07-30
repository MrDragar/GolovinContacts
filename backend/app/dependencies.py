from app.services import telegram
from app.config import settings

from fastapi import Depends
from aiogram import Bot

_bot_generator = None

async def get_telegram_service() -> telegram.TelegramService: 
    global  _bot_generator
    if _bot_generator is None:
        _bot_generator = telegram.get_bot_generator(settings.TELEGRAM_TOKEN)
  
    bot = await anext(_bot_generator)
    return telegram.TelegramService(bot, settings.ADMIN_ID)
