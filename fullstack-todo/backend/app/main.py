from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routers import todos

app = FastAPI(
    title="Todo API",
    description="React + FastAPI の Todo アプリ用 API",
    version="1.0.0"
)

# CORS ミドルウェア設定
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ルーター登録
app.include_router(todos.router)


@app.get("/")
async def root():
    """ルートエンドポイント"""
    return {
        "message": "Welcome to Todo API",
        "docs": "http://localhost:8000/docs",
        "redoc": "http://localhost:8000/redoc"
    }


@app.get("/health")
async def health_check():
    """ヘルスチェック"""
    return {"status": "ok"}
