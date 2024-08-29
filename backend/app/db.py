from motor.motor_asyncio import AsyncIOMotorClient
from beanie import init_beanie
from app.models import ConversationFull

MONGO_DETAILS = "mongodb://localhost:27017"

client = AsyncIOMotorClient(MONGO_DETAILS)
database = client["llm_chat_manager"]


async def init_db():
    await init_beanie(database=database, document_models=[ConversationFull])
