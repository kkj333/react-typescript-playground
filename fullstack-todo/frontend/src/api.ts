import type { Todo } from './types'

const API_BASE_URL = 'http://localhost:8000/api'

class ApiClient {
  async getTodos(): Promise<Todo[]> {
    const response = await fetch(`${API_BASE_URL}/todos`)
    if (!response.ok) throw new Error('Failed to fetch todos')
    return response.json()
  }

  async createTodo(text: string): Promise<Todo> {
    const response = await fetch(`${API_BASE_URL}/todos`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
    })
    if (!response.ok) throw new Error('Failed to create todo')
    return response.json()
  }

  async updateTodo(id: number, text?: string, completed?: boolean): Promise<Todo> {
    const response = await fetch(`${API_BASE_URL}/todos/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, completed }),
    })
    if (!response.ok) throw new Error('Failed to update todo')
    return response.json()
  }

  async deleteTodo(id: number): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/todos/${id}`, {
      method: 'DELETE',
    })
    if (!response.ok) throw new Error('Failed to delete todo')
  }
}

export const api = new ApiClient()
