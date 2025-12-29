# 🌤️ 天気アプリ

React + TypeScript + Vite で作成した、モックデータを使用した天気検索アプリです。

## 機能

- 🔍 **都市検索**: 都市名を入力して天気情報を検索
- 🌡️ **天気表示**: 気温、天気状態、湿度、風速を表示
- 🎯 **クイック検索**: 候補都市をワンクリック検索
- ❌ **エラーハンドリング**: 見つからない都市の場合にメッセージ表示

## 対応都市

- 🗼 Tokyo（東京）
- 🏴󠁧󠁢󠁥󠁮󠁧󠁿 London（ロンドン）
- 🗽 New York（ニューヨーク）
- 🗼 Paris（パリ）
- 🦘 Sydney（シドニー）

## 技術スタック

- **React 19**: UI フレームワーク
- **TypeScript**: 型安全性を確保
- **Vite**: 高速な開発サーバーとビルド
- **モックデータ**: API キー不要で簡単テスト

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
weather-app/
├── src/
│   ├── App.tsx          # メインコンポーネント
│   ├── App.css          # スタイル
│   ├── index.css        # グローバルスタイル
│   ├── main.tsx         # エントリーポイント
│   └── mockData.ts      # モック天気データ
├── index.html           # HTML テンプレート
├── package.json         # 依存関係
└── vite.config.ts       # Vite 設定
```

## 使い方

### 1. 都市を検索

入力フィールドに都市名を入力して「検索」をクリック、または Enter キーを押します：

```
例：Tokyo, London, New York など
```

### 2. クイック検索

候補都市のボタンをクリックして素早く検索します。

### 3. 天気情報の確認

気温、天気状態、湿度、風速が表示されます。

## TypeScript 型定義

```typescript
interface Weather {
  city: string
  temperature: number
  condition: string
  humidity: number
  windSpeed: number
  icon: string
}
```

## 実装のポイント

### モックデータの構造

`src/mockData.ts` には、各都市の天気情報がオブジェクトとして定義されています。

```typescript
export const mockWeatherData: Record<string, Weather> = {
  tokyo: { ... },
  london: { ... },
  // ...
}
```

### 検索機能

`searchWeather` 関数は、入力された都市名をキーに変換してモックデータから検索します。

```typescript
export const searchWeather = (cityName: string): Weather | null => {
  const key = cityName.toLowerCase().replace(/\s+/g, '')
  return mockWeatherData[key] || null
}
```

## 今後の拡張

- 実際の API（OpenWeatherMap）との連携
- 複数日の天気予報表示
- お気に入り都市の保存
- 位置情報の自動取得
- 複数言語対応
