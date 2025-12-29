from pydantic import BaseModel


class TodoCreate(BaseModel):
    """新規 Todo 作成時のリクエストモデル"""
    text: str


class TodoUpdate(BaseModel):
    """Todo 更新時のリクエストモデル"""
    text: str | None = None
    completed: bool | None = None


class Todo(BaseModel):
    """Todo のレスポンスモデル"""
    id: int
    text: str
    completed: bool = False
