from datetime import datetime

from aiogram import Bot
from aiogram.client.default import DefaultBotProperties
from aiogram.enums import ParseMode
from aiogram.utils.markdown import escape_md

from . import database

async def get_bot_generator(token) -> Bot:
    async with Bot(
        token=token,
        default=DefaultBotProperties(
            parse_mode=ParseMode.MARKDOWN, 
        )
    ) as bot:
        while True:
            yield bot


class TelegramService:
    _bot: Bot
    _chat_id: str
    _database_service: database.DatabaseService
    
    def __init__(self, bot: Bot, chat_id: str, database_service: database.DatabaseService):
        self._bot = bot
        self._chat_id = chat_id
        self._database_service = database_service
    
    async def send_hello(self):
        await self._bot.send_message(chat_id=self._chat_id, text="Hello, comrade")
    
    async def send_notification(self, name, email, message):
        id_ = self._database_service.add_message(name, email, message)
        text = f"""
Обращение №{id_}
Дата: {datetime.now().strftime("%d-%m-%Y")}
Отправитель: {name}
Почта: {email}
        
Текст обращения:
{message} 
        """
        await self._bot.send_message(chat_id=self._chat_id, text=escape_md(text))
