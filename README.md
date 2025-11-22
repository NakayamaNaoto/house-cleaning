# 55リフォーム名古屋店 | お掃除代行LP (React + Vite)

指定サイト（https://huaobst.jp/55reform/osoujidaikou/）の構成を React + TypeScript + Vite で再現したランディングページです。  
Shippori Mincho をベースに、ヒーロー・特徴紹介・料金プラン・CTA などのセクションをデータ駆動で描画しています。

## プロジェクト構成

- `src/components/layout` … ヘッダー／フッターなどのレイアウトコンポーネント
- `src/components/sections` … ヒーロー、強み、POINT、CTA、料金、カードグリッド等のセクション
- `src/data/content.ts` … 文言・画像パス・ナビゲーションなどの定義
- `public/images` … 元サイトから取得した写真素材（hero/feature/point/plan/grid）
- `docs/` … サイト解析メモとコンテンツプラン

## セットアップ

```bash
npm install
npm run dev    # http://localhost:5173 で開発サーバーを起動
npm run build  # 本番ビルド
npm run preview
```

## 実装メモ

- `App.tsx` で各セクションを組み合わせ、`src/index.css` に共通変数・タイポグラフィ・レスポンシブ指針を定義
- 画像は `public/images` 配下に配置し、`/images/...` 参照でバンドルから除外
- メタタグで `noindex,nofollow` を付与済み。ローカルで静的サーバー経由（`npm run preview` など）で表示するとビルド成果物を確認できます。
