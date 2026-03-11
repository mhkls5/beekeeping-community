# 养蜂コミュニティサイト

このサイトは、日本全国の養蜂家をつなぐためのプラットフォームです。

## 機能

- 養蜂記録の記録・共有
- 地域ごとの情報・マップ
- はちみつ販売機能
- フォーラム（Discord連携）
- 季節ごとの養蜂情報配信

## 技術スタック

- Frontend: Next.js
- CMS: Strapi（Headless）
- DB: SQLite（開発用）/ PostgreSQL（本番用）
- Host: Vercel

## 開発状況

現在、以下の機能を実装中です：
- ✅ Next.jsフロントエンド（基本ページ作成完了）
- ⏳ Strapi CMS（Node.js v22と互換性の問題あり、対応中）
- ✅ API設計（beekeeper, hive-record, honey-product のContent Type定義完了）

## 開発

このプロジェクトはNode.js、Next.js、Strapiを使用しています。

フロントエンドは `frontend/` に、
バックエンドは `backend/` に配置されています。