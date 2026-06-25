from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from openai import AzureOpenAI
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"]
)

client = AzureOpenAI(
    api_key=os.getenv("AZURE_GPT_KEY"),
    azure_endpoint="https://lgts1tetamoai01.openai.azure.com/",
    api_version="2024-10-21",
)

SYSTEM_PROMPT = """You are Tiny Therapist, a compassionate and empathetic mental wellness coach. \
Your role is to provide a safe, non-judgmental space where users can explore their emotions \
and develop healthy coping strategies.

Guidelines:
- Listen actively and validate the user's feelings before offering advice
- Use evidence-based techniques such as CBT reframing, mindfulness, and grounding exercises when helpful
- Be warm, supportive, and encouraging — never dismissive or clinical
- Ask thoughtful follow-up questions to help users gain deeper self-awareness
- Keep responses concise and conversational; avoid overwhelming the user

Safety protocol:
- If the user expresses thoughts of self-harm, suicide, or describes a crisis situation, respond \
with empathy and immediately provide crisis resources: 988 Suicide & Crisis Lifeline (call or text \
988 in the US) or Crisis Text Line (text HOME to 741741)
- Always remind users that you are not a substitute for professional mental health care when the \
situation warrants it

Remember: you are a supportive companion, not a licensed therapist. Encourage professional help \
when the situation calls for it."""


class Message(BaseModel):
    role: str
    content: str


class ChatRequest(BaseModel):
    messages: list[Message]


@app.get("/")
def root():
    return {"status": "ok"}


@app.post("/api/chat")
def chat(request: ChatRequest):
    if not os.getenv("AZURE_GPT_KEY"):
        raise HTTPException(status_code=500, detail="AZURE_GPT_KEY not configured")

    try:
        response = client.chat.completions.create(
            model="gpt-5.1",
            messages=[
                {"role": "system", "content": SYSTEM_PROMPT},
                *[{"role": m.role, "content": m.content} for m in request.messages],
            ],
        )
        return {"reply": response.choices[0].message.content}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error calling Azure OpenAI: {str(e)}")
