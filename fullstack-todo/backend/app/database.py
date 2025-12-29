from .models import Todo

# インメモリデータストア
todos_db: list[dict] = []
next_id: int = 1


def get_all_todos() -> list[Todo]:
    """全ての Todo を取得"""
    return [Todo(**todo) for todo in todos_db]


def get_todo_by_id(todo_id: int) -> Todo | None:
    """ID で Todo を取得"""
    for todo in todos_db:
        if todo["id"] == todo_id:
            return Todo(**todo)
    return None


def create_todo(text: str) -> Todo:
    """新しい Todo を作成"""
    global next_id
    todo = {
        "id": next_id,
        "text": text,
        "completed": False
    }
    todos_db.append(todo)
    next_id += 1
    return Todo(**todo)


def update_todo(todo_id: int, text: str | None = None, completed: bool | None = None) -> Todo | None:
    """Todo を更新"""
    for todo in todos_db:
        if todo["id"] == todo_id:
            if text is not None:
                todo["text"] = text
            if completed is not None:
                todo["completed"] = completed
            return Todo(**todo)
    return None


def delete_todo(todo_id: int) -> bool:
    """Todo を削除"""
    global todos_db
    original_length = len(todos_db)
    todos_db = [todo for todo in todos_db if todo["id"] != todo_id]
    return len(todos_db) < original_length
