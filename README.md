# HUA OBST ハウスクリーニング（静的版）

React/Vite 版から純粋な HTML + CSS + 最小限の JS に置き換えた静的ランディングページです。`index.html` を含む各ページをブラウザで開くだけで閲覧できます。

## 構成

-   `index.html` … トップページ
-   `air-conditioner.html` … エアコンクリーニング
-   `kitchen.html` … キッチンクリーニング
-   `washing-machine.html` … 洗濯機クリーニング
-   `other-plans.html` … その他単品メニュー
-   `set-plans.html` … まとめてプラン
-   `assets/styles.css` … 共通スタイル
-   `assets/main.js` … ハンバーガーメニューの開閉スクリプト
-   `images/` … 画像アセット

## 使い方

1. 任意の静的サーバー（例: `npx serve .`）またはファイルを直接ブラウザで開いて表示してください。
2. ナビゲーションのリンクは各 HTML ファイルに直接張り替え済みです。

## 開発メモ

-   追加の依存はありません。整形が必要なときは `npx prettier@3.7.3 --config .prettierrc.json --ignore-path .prettierignore --write "**/*.{html,css,js,json,md}"` を実行してください（`printWidth: 8000`, `tabWidth: 4`）。
-   JavaScript はモバイル用メニューの開閉のみを担当し、その他はすべて HTML/CSS で完結しています。
