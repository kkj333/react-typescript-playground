# 📝 Todo アプリ

React + TypeScript + Vite で作成したシンプルで使いやすい Todo アプリです。

## 機能

- ✅ **タスク追加**: 新しいタスクを入力して追加
- ✅ **タスク完了**: チェックボックスで完了状態を管理（完了すると打ち消し線表示）
- ✅ **タスク削除**: 不要なタスクを削除
- 📊 **統計情報**: 全タスク数、完了数、残りタスク数を表示

## 技術スタック

- **React 19**: UI フレームワーク
- **TypeScript**: 型安全性を確保
- **Vite**: 高速な開発サーバーとビルド
- **CSS**: モダンで使いやすい UI

## セットアップ

### インストール

```bash
npm install
```

### 開発サーバーの起動

```bash
npm run dev
```

ブラウザで `http://localhost:5174` を開くと、アプリが表示されます。

ファイルを編集すると自動的にホットリロードされます。

### ビルド

```bash
npm run build
```

最適化されたビルド成果物は `dist/` に出力されます。

### ビルド成果物のプレビュー

```bash
npm run preview
```

## プロジェクト構成

```
todo-app/
├── src/
│   ├── App.tsx          # メインコンポーネント
│   ├── App.css          # スタイル
│   ├── index.css        # グローバルスタイル
│   ├── main.tsx         # エントリーポイント
│   └── assets/          # 画像など
├── index.html           # HTML テンプレート
├── package.json         # 依存関係
└── vite.config.ts       # Vite 設定
```

## 使い方

1. **タスク追加**:
   - 入力フィールドにテキストを入力
   - 「追加」ボタンをクリック、または Enter キーを押す

2. **タスク完了**:
   - チェックボックスをクリックして完了状態を切り替え

3. **タスク削除**:
   - 「削除」ボタンをクリック

## コード例

```typescript
interface Todo {
  id: number
  text: string
  completed: boolean
}
```

TypeScript インターフェースで型安全性を確保し、バグを早期に発見できます。
