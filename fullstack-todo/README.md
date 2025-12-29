# フルスタック Todo アプリ

React + TypeScript フロントエンドと FastAPI バックエンドで構築された、モダンな Todo アプリケーションです。

## プロジェクト概要

このプロジェクトは以下の技術スタックを使用した、フルスタック Web アプリケーションの実装例です。

- **フロントエンド**: React 19 + TypeScript + Vite
- **バックエンド**: FastAPI + Pydantic
- **開発環境**: Dev Container（Docker）
- **API通信**: Fetch API + CORS対応

## プロジェクト構成

```
fullstack-todo/
├── frontend/                    # React + TypeScript フロントエンド
│   ├── src/
│   │   ├── App.tsx             # メインコンポーネント
│   │   ├── App.css             # アプリケーション スタイル
│   │   ├── api.ts              # API クライアント
│   │   ├── types.ts            # TypeScript 型定義
│   │   ├── main.tsx            # エントリーポイント
│   │   ├── index.css           # グローバルスタイル
│   ├── public/                 # 静的ファイル
│   ├── package.json            # npm 依存関係
│   ├── vite.config.ts          # Vite 設定
│   ├── tsconfig.json           # TypeScript 設定
│   ├── tsconfig.node.json      # Vite 用 TypeScript 設定
│   ├── eslint.config.js        # ESLint 設定
│   └── index.html              # HTML テンプレート
│
├── backend/                     # FastAPI バックエンド
│   ├── app/
│   │   ├── main.py             # FastAPI アプリケーション
│   │   ├── models.py           # Pydantic モデル
│   │   ├── database.py         # データストア（インメモリ）
│   │   └── routers/
│   │       └── todos.py        # Todo CRUD エンドポイント
│   ├── requirements.txt        # Python 依存関係
│   └── README.md               # バックエンド ドキュメント
│
├── .devcontainer/              # Dev Container 設定
│   ├── Dockerfile              # コンテナイメージ定義
│   ├── docker-compose.yml      # コンテナ構成
│   ├── devcontainer.json       # VS Code 統合設定
│   └── postCreateCommand.sh    # セットアップスクリプト
│
└── README.md                   # このファイル
```

## API エンドポイント

バックエンドが提供する REST API:

| メソッド | パス | 説明 |
|---------|------|------|
| GET | `/api/todos` | 全 Todo を取得 |
| POST | `/api/todos` | 新しい Todo を作成 |
| PUT | `/api/todos/{id}` | Todo を更新 |
| DELETE | `/api/todos/{id}` | Todo を削除 |
| GET | `/docs` | Swagger UI（API ドキュメント） |

### データ構造

```typescript
// TypeScript 型
interface Todo {
  id: number
  text: string
  completed: boolean
}
```

```python
# Pydantic モデル
class Todo(BaseModel):
    id: int
    text: str
    completed: bool = False
```

## 開発環境セットアップ

### 前提条件

- Docker と Docker Compose のインストール
- VS Code（推奨）と Dev Containers 拡張機能

### セットアップ手順

#### 方法 1: Dev Container を使用（推奨）

1. **VS Code で開く**
   ```bash
   cd fullstack-todo
   code .
   ```

2. **Dev Container を起動**
   - VS Code のコマンドパレット（`Cmd+Shift+P`）で「Reopen in Container」を実行
   - または、右下の「Reopen in Container」をクリック

3. **依存関係が自動的にインストールされます**
   - `postCreateCommand.sh` により、バックエンド・フロントエンドの依存関係が自動インストールされます

#### 方法 2: ローカルで実行

**バックエンド:**
```bash
cd fullstack-todo/backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

**フロントエンド**（別のターミナル）:
```bash
cd fullstack-todo/frontend
npm install
npm run dev
```

## 開発サーバーの起動

Dev Container 内またはセットアップ後:

```bash
# ターミナル 1: バックエンド起動
cd backend
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000

# ターミナル 2: フロントエンド起動
cd frontend
npm run dev
```

### アクセスURL

- **フロントエンド**: http://localhost:5173
- **バックエンド API**: http://localhost:8000/api/todos
- **Swagger UI**: http://localhost:8000/docs

## 機能

### フロントエンド機能

- ✅ Todo リストの表示
- ✅ Todo の追加
- ✅ Todo の削除
- ✅ Todo の完了状態の切り替え
- ✅ リアルタイム統計表示（合計・完了・残数）
- ✅ エラーハンドリングとローディング状態
- ✅ レスポンシブ デザイン

### バックエンド機能

- ✅ CRUD 操作の完全実装
- ✅ Pydantic による自動バリデーション
- ✅ CORS ミドルウェア対応
- ✅ インメモリ データストア
- ✅ 自動 API ドキュメント（Swagger UI）

## 技術スタック詳細

### フロントエンド

| 技術 | バージョン | 用途 |
|------|----------|------|
| React | 19 | UI フレームワーク |
| TypeScript | Latest | 型安全性 |
| Vite | 7 | ビルドツール・開発サーバー |
| Fetch API | Native | HTTP クライアント |

### バックエンド

| 技術 | バージョン | 用途 |
|------|----------|------|
| FastAPI | 0.109.0 | Web フレームワーク |
| Uvicorn | 0.27.0 | ASGI サーバー |
| Pydantic | 2.6.4 | データバリデーション |
| Python | 3.12 | 言語 |

### 開発環境

- **Dev Container**: Python 3.12 + Node.js 20
- **エディタ**: VS Code
- **拡張機能**: Python, JavaScript/TypeScript, ESLint

## コード品質

### フロントエンド

- ESLint による静的解析
- TypeScript strict mode
- React 19 の strict mode

### バックエンド

- FastAPI 自動バリデーション
- 型ヒント（Python typing）

## 統合テスト結果

以下の機能が検証済みです:

```
✅ GET /api/todos - 全 Todo 取得
✅ POST /api/todos - Todo 作成
✅ PUT /api/todos/{id} - Todo 更新
✅ DELETE /api/todos/{id} - Todo 削除
✅ Frontend HTTP Response - 200 OK
✅ CORS オプション リクエスト
```

## トラブルシューティング

### ポートがすでに使用されている

```bash
# ポート 8000 を使用しているプロセスを確認
lsof -i :8000

# ポート 5173 を使用しているプロセスを確認
lsof -i :5173
```

### Docker コンテナが起動しない

```bash
# ログを確認
docker-compose -f .devcontainer/docker-compose.yml logs -f

# コンテナを再構築
docker-compose -f .devcontainer/docker-compose.yml down
docker-compose -f .devcontainer/docker-compose.yml up --build
```

### フロントエンドが API に接続できない

1. バックエンド サーバーが起動しているか確認
2. CORS 設定を確認（`backend/app/main.py`）
3. API ベース URL が正しいか確認（`frontend/src/api.ts`）

## 今後の拡張可能性

### データベース
- SQLite、PostgreSQL などの採用
- SQLAlchemy ORM の導入

### 認証・認可
- JWT ベースの認証
- ユーザー登録・ログイン機能

### テスト
- フロントエンド: Vitest + React Testing Library
- バックエンド: pytest

### デプロイ
- フロントエンド: Vercel、Netlify
- バックエンド: Railway、Render、Heroku

### UX 改善
- ダーク モード対応
- Todo のカテゴリ分類
- 優先度設定
- リマインダー機能

## ライセンス

このプロジェクトは教育目的で作成されました。

## 参考資料

- [React ドキュメント](https://react.dev)
- [FastAPI ドキュメント](https://fastapi.tiangolo.com)
- [TypeScript ドキュメント](https://www.typescriptlang.org)
- [Vite ドキュメント](https://vitejs.dev)
