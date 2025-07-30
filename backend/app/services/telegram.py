from aiogram import Bot
from aiogram.client.default import DefaultBotProperties
from aiogram.enums import ParseMode


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
    _admin_id: str
    
    def __init__(self, bot: Bot, admin_id: str):
        self._bot = bot
        self._admin_id = admin_id
    
    async def send_hello(self):
        await self._bot.send_message(chat_id=self._admin_id, text="Hello, comrade")
