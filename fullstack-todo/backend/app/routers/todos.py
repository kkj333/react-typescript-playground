from fastapi import APIRouter, HTTPException
from ..models import Todo, TodoCreate, TodoUpdate
from .. import database

router = APIRouter(prefix="/api/todos", tags=["todos"])


@router.get("", response_model=list[Todo])
async def get_todos():
    """全ての Todo を取得"""
    return database.get_all_todos()


@router.post("", response_model=Todo)
async def create_todo(todo: TodoCreate):
    """新しい Todo を作成"""
    return database.create_todo(todo.text)


@router.put("/{todo_id}", response_model=Todo)
async def update_todo(todo_id: int, todo: TodoUpdate):
    """Todo を更新"""
    updated_todo = database.update_todo(
        todo_id,
        text=todo.text,
        completed=todo.completed
    )
    if updated_todo is None:
        raise HTTPException(status_code=404, detail="Todo not found")
    return updated_todo


@router.delete("/{todo_id}")
async def delete_todo(todo_id: int):
    """Todo を削除"""
    if not database.delete_todo(todo_id):
        raise HTTPException(status_code=404, detail="Todo not found")
    return {"detail": "Todo deleted"}
