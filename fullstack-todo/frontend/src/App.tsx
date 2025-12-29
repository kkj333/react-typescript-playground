import { useEffect, useState } from 'react'
import type { Todo } from './types'
import { api } from './api'
import './App.css'

function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [input, setInput] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  // ページロード時に Todo を取得
  useEffect(() => {
    loadTodos()
  }, [])

  const loadTodos = async () => {
    try {
      setLoading(true)
      const data = await api.getTodos()
      setTodos(data)
      setError('')
    } catch {
      setError('サーバーに接続できません。バックエンドが起動していることを確認してください。')
      setLoading(false)
    } finally {
      setLoading(false)
    }
  }

  const addTodo = async () => {
    if (input.trim() === '') {
      setError('タスクを入力してください')
      return
    }

    try {
      const newTodo = await api.createTodo(input)
      setTodos([...todos, newTodo])
      setInput('')
      setError('')
    } catch {
      setError('タスク追加に失敗しました')
    }
  }

  const toggleTodo = async (id: number) => {
    const todo = todos.find(t => t.id === id)
    if (!todo) return

    try {
      const updated = await api.updateTodo(id, undefined, !todo.completed)
      setTodos(todos.map(t => (t.id === id ? updated : t)))
      setError('')
    } catch {
      setError('タスク更新に失敗しました')
    }
  }

  const deleteTodo = async (id: number) => {
    try {
      await api.deleteTodo(id)
      setTodos(todos.filter(t => t.id !== id))
      setError('')
    } catch {
      setError('タスク削除に失敗しました')
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addTodo()
    }
  }

  const completedCount = todos.filter(t => t.completed).length

  return (
    <div className="app">
      <h1>📝 フルスタック Todo アプリ</h1>

      {error && <p className="error-message">{error}</p>}

      <div className="search-section">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="新しいタスクを入力..."
          className="search-input"
          disabled={loading}
        />
        <button onClick={addTodo} className="search-button" disabled={loading}>
          追加
        </button>
      </div>

      {loading ? (
        <p className="loading">読み込み中...</p>
      ) : todos.length === 0 ? (
        <p className="empty-message">タスクがありません</p>
      ) : (
        <>
          <div className="stats">
            <span>全タスク: {todos.length}</span>
            <span>完了: {completedCount}</span>
            <span>残り: {todos.length - completedCount}</span>
          </div>

          <ul className="todo-list">
            {todos.map(todo => (
              <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                  className="todo-checkbox"
                />
                <span className="todo-text">{todo.text}</span>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="delete-button"
                >
                  削除
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}

export default App
