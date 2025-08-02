from aiogram import Bot
from aiogram.client.default import DefaultBotProperties
from aiogram.enums import ParseMode
from datetime import datetime
from typing import List

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
    _MAX_MESSAGE_LENGTH = 4096  # Максимальная длина сообщения в Telegram
    
    def __init__(self, bot: Bot, chat_id: str, database_service: database.DatabaseService):
        self._bot = bot
        self._chat_id = chat_id
        self._database_service = database_service
    
    async def send_hello(self):
        await self._bot.send_message(chat_id=self._chat_id, text="Hello, comrade")
    
    def _split_message(self, text: str, max_length: int = None) -> List[str]:
        """Разбивает текст на части, не превышающие max_length символов"""
        if max_length is None:
            max_length = self._MAX_MESSAGE_LENGTH
        
        parts = []
        while len(text) > max_length:
            # Находим последний перенос строки перед max_length
            split_pos = text.rfind('\n', 0, max_length)
            if split_pos == -1:
                # Если нет переносов строки, просто разбиваем по max_length
                split_pos = max_length
            
            part = text[:split_pos].strip()
            if part:
                parts.append(part)
            text = text[split_pos:].strip()
        
        if text:
            parts.append(text)
        
        return parts
    
    async def send_notification(self, name, email, message):
        id_ = self._database_service.add_message(name, email, message)
        header = f"""
Обращение №{id_}
Дата: {datetime.now().strftime("%d-%m-%Y")}
Отправитель: {name}
Почта: {email}

Текст обращения:
"""
        footer = "\n\n"
        
        # Формируем полный текст без разбивки
        full_text = header + message + footer
        
        # Разбиваем текст на части
        text_parts = self._split_message(full_text, self._MAX_MESSAGE_LENGTH - 50)  # Оставляем место для нумерации
        
        # Отправляем части с нумерацией
        total_parts = len(text_parts)
        for i, part in enumerate(text_parts, 1):
            # Добавляем нумерацию страниц в конец каждой части
            part_with_pagination = f"{part}\n\n— Страница {i}/{total_parts}" if total_parts > 1 else part
            await self._bot.send_message(
                chat_id=self._chat_id,
                text=part_with_pagination,
                parse_mode=""
            )

