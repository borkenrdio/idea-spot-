# idea-spot-
株式会社idea spotの法人ホームページ。

静的HTMLサイト。CSSは Tailwind CSS v3 をビルドして `css/tailwind.css` に出力する。

## CSSのビルド

HTMLのクラスを変更したら、必ずCSSを再ビルドしてからデプロイすること。
未使用クラスは出力されないため、**ビルドしないと新しいクラスが効かない**。

```bash
npm install        # 初回のみ
npm run build:css  # 本番用（minify）
npm run watch:css  # 開発中（変更を監視して自動ビルド）
```

## 構成

| パス | 役割 |
|---|---|
| `tailwind.config.js` | カラー・フォント定義、走査対象ファイルの指定 |
| `src/input.css` | ビルドの入力。`@tailwind` ディレクティブと互換レイヤー |
| `css/tailwind.css` | ビルド成果物。**リポジトリにコミットする**（デプロイ対象） |

## 注意点

- `tailwind.config.js` の `content` は `./*.html` `./*/*.html` `./parts/*.html` `./*.js` を走査する。
  新しいディレクトリやJSファイルからクラスを出力する場合は `content` に追加すること。
- 各ページの `<link rel="stylesheet" href="css/tailwind.css">` は `</head>` の直前に置く。
  ページ内の `<style>` より後ろに来る必要がある（旧CDNと同じカスケード順を保つため）。
- `text-green-DEFAULT` のような `-DEFAULT` 付きクラスはTailwindが生成しない。
  既存HTMLがそのまま動くよう `src/input.css` の互換レイヤーで定義している。
