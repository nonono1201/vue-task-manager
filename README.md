# vue-task-manager

本アプリは、シンプルなCRUDベースのタスク管理アプリとして約5日で開発した後、
UI/UXおよびデータ構造を再設計し、カンバン形式のワークフロー管理アプリへと拡張したものです。
Vue3 + TypeScriptで作成しています。  
(現在は固定値で動いています)

## 課題（Before）

従来のCRUDベースのタスク管理では、以下の課題がありました。

- 登録・更新のたびに画面遷移が発生し、操作ステップが多く素早い編集ができない
- 一覧形式のため、タスクの進行状況や作業フローが直感的に把握しづらい
- ステータスが「完了 / 未完了」のみで、未完了タスクの状態差（未着手・着手中）が分からない
- 期限切れタスクが埋もれやすく、優先順位の判断がしづらい

その結果、「タスクは管理できるが、意思決定には使いづらい」状態になっていました。

## 改善アプローチ（After）

上記課題を解決するため、UIだけでなくデータ構造と情報設計を再設計しました。

### UIの改善
- 一覧形式 → カンバンボード形式へ変更
- 画面遷移 → インライン操作中心へ変更
- ドラッグ＆ドロップによるステータス変更を導入

### データ設計の改善
- ステータスを「未着手 / 着手中 / 完了」に細分化

## Demo

- URL: TODO
- [GitHub](https://github.com/nonono1201/vue-task-manager) 
- [Figma](https://www.figma.com/design/I3jr1QHI9FalekcyROgB2x/%E3%82%BF%E3%82%B9%E3%82%AF%E7%AE%A1%E7%90%86?node-id=1-641&m=dev&t=SsmLwg3stEDwPAFL-1)

## 主な機能
- 未着手 / 着手 / 完了 のステータス管理
- ドラッグ＆ドロップによるタスク移動
- ステータス単位でのタスク可視化
- 状態に応じた直感的なUI

## Tech Stack
### Frontend

- Vue3
- TypeScript
- Pinia
- Tailwind CSS

### Libraries
- vee-validate
- vue-draggable-plus

## Architecture

Feature-based Pattern を採用し、
機能単位で分離しています。

- features: 機能ごとの実装
- components: 再利用可能なUI
- store: Piniaによる状態管理
- services: API層の抽象化
- pages: NotFoundなど全体共通の画面

```text
src/
├─assets               # css
├─components           # 共通UIコンポーネント
│  ├─button
│  ├─feedback
│  ├─form
│  ├─layout
│  └─overlay
├─constants            # 共通の定数
├─errors               # エラー処理
├─features             # 機能単位の実装
│  └─tasks
│      ├─components
│      ├─constants
│      ├─store         # 機能内で管理するstore (Pinia)
│      ├─types
│      └─views         # 各機能の画面
├─layouts
├─router
├─services   
│  └─api               # api呼び出し
├─stores               # global store (Pinia)
└─pages                # 共通画面（Error / NotFound など）
```

## Future Improvements
- LocalStorageでの管理
- フィルタ、検索機能の追加
- レスポンシブ化
- orderの保持

## setup
```
npm ci
npm run dev
```
