#!/bin/bash

echo "🔧 Setting up development environment..."

# Backend setup
echo "📦 Installing backend dependencies..."
cd /workspace/backend
pip install -q -r requirements.txt
echo "✅ Backend dependencies installed"

# Frontend setup
echo "📦 Installing frontend dependencies..."
cd /workspace/frontend
npm install -q
echo "✅ Frontend dependencies installed"

echo ""
echo "🎉 Dev Container setup complete!"
echo ""
echo "📝 Next steps:"
echo "1. Backend:  cd /workspace/backend && source venv/bin/activate && uvicorn app.main:app --reload --host 0.0.0.0"
echo "2. Frontend: cd /workspace/frontend && npm run dev"
echo ""
echo "📚 Docs:"
echo "   API Docs:  http://localhost:8000/docs"
echo "   Frontend:  http://localhost:5173"
