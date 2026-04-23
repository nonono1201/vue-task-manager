# vue-task-manager
Vue 3 + TypeScriptで作成したタスク管理CRUDアプリです。  
(本プロジェクトは、フロントエンドのデータ処理（State管理）とUIの実装にフォーカスして制作しました。現在はモックデータを使用して動作させています。)

## 📖 概要
タスクを管理するアプリケーションです

## ✨ 主要機能
- **タスクの作成 (Create):** タイトル、ステータス、期限を入力してタスクを作成。
- **タスクの一覧 (Read):** 登録したタスクを一覧表示。期限が近いものはハイライト表示。
- **タスクの編集 (Update):** 登録済みのタスクの内容やステータス（未着手・進行中・完了）を変更。
- **タスクの削除 (Delete):** 不要になったタスクの削除。

## 🛠 使用技術
- Framework: Vue.js (v3)
- UI Library: Vuetify
- Validation: VeeValidate
- State Management: Pinia

## 💡 工夫した点・苦労した点
- **工夫した点:** N+1問題を意識して、データベースへのクエリが最適になるように設計しました。
- **苦労した点:** 初めての〇〇の導入でCORSエラーに悩まされましたが、公式ドキュメントを読み込んでミドルウェアの設定を見直すことで解決しました。

## 💻 ローカルでの開発環境構築手順
（採用担当者が自分のPCで動かせるように、クローンから立ち上げまでのコマンドを書きます。これがあると「他の開発者への配慮ができる人」と高評価です。）

```bash
# リポジトリのクローン
git clone [https://github.com/yourusername/your-repo-name.git](https://github.com/yourusername/your-repo-name.git)

# ディレクトリの移動
cd vue-task-manager

# パッケージのインストール
npm install

# アプリケーションの起動
npm run dev
