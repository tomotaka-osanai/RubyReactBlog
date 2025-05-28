# RubyReactBlog 開発環境ガイド

## 📖 目次

- [RubyReactBlog 開発環境ガイド](#rubyreactblog-開発環境ガイド)
  - [📖 目次](#-目次)
  - [📦 プロジェクト構成](#-プロジェクト構成)
  - [🐳 DevContainer（VS Code 用コンテナ開発環境）](#-devcontainervs-code-用コンテナ開発環境)
    - [目的](#目的)
    - [設定ファイル](#設定ファイル)
      - [主なポイント](#主なポイント)
      - [DevContainer の起動方法](#devcontainer-の起動方法)
  - [🛠️ Makefile の使い方](#️-makefile-の使い方)
    - [目的](#目的-1)
    - [主なターゲット](#主なターゲット)
      - [使い方例](#使い方例)

## 📦 プロジェクト構成

```
RubyReactBlog/
├── .devcontainer/                # VS Code用の開発コンテナ設定
│   ├── devcontainer.json         # DevContainerのメイン設定ファイル
│   └── Dockerfile                # DevContainer用のDockerレシピ
├── Dockerfile                    # Railsアプリ本体のDockerレシピ（本番/開発用）
├── docker-compose.yml            # サービス全体の構成（DBやWebサーバーなど）
├── docker-compose.override.yml   # ローカル開発専用の追加・上書き設定ファイル
├── Makefile                      # よく使うコマンドをまとめたファイル
├── Gemfile                       # Rubyの依存パッケージ定義
├── Gemfile.lock                  # Gemfileのバージョンロック
├── package.json                  # Node.jsの依存パッケージ定義
├── package-lock.json             # package.jsonのバージョンロック
├── app/                          # Railsのメインアプリケーション（MVC構成）
│   ├── controllers/              # コントローラー
│   ├── models/                   # モデル
│   ├── views/                    # ビュー
│   ├── javascript/entrypoints/   # Reactフロントエンド構成ディレクトリ
│   │   ├── application.tsx       # アプリ全体のエントリーポイント（Reactのrootなどを初期化）
│   │   ├── Routes.tsx            # React Routerなどルーティングの定義
│   │   ├── components/           # 再利用できるUI部品（ボタンやフォームなど）
│   │   ├── data/                 # ダミーデータや定数、APIレスポンスの型など
│   │   ├── hooks/                # カスタムフック（useFetchなどReactのロジック部品）
│   │   ├── pages/                # 画面単位のコンポーネント（トップページや詳細ページなど）
│   │   ├── styles/               # CSSやTailwindのカスタムスタイル
│   │   └── types/                # 型定義（TypeScriptの型やインターフェース）
│   └── ...                       # その他Rails標準ディレクトリ
├── config/                       # Railsの各種設定
│   ├── database.yml              # DB接続設定
│   └── routes.rb                 # ルーティング設定
├── db/
│   ├── migrate/                  # マイグレーションファイル
│   ├── seeds/
│   │   ├── articles.rb           # 記事データのシード
│   │   └── contents.rb           # その他データのシード
│   └── schema.rb                 # DBスキーマ
├── README.md                     # このガイド
└── ...（その他Rails/Reactの標準ファイルやディレクトリ）
```

---

## 🐳 DevContainer（VS Code 用コンテナ開発環境）

### 目的

- 誰でも同じ開発環境を一発で再現できる！
- Docker ベースで依存関係やツールのバージョン管理もバッチリ！

### 設定ファイル

- `.devcontainer/devcontainer.json`
  開発環境の基本設定（Node/Ruby/Docker などの Feature 指定、ポートフォワード、初期コマンドなど）

- `.devcontainer/Dockerfile`
  必要なパッケージやカスタム設定を追加する Docker レシピ

#### 主なポイント

- Node.js, Ruby, Docker CLI などを Feature で自動インストール
- `postCreateCommand`で`make setup`を自動実行

#### DevContainer の起動方法

1. VS Code でこのリポジトリを開く
2. コマンドパレット（`Ctrl+Shift+P`）で「Dev Containers: Reopen in Container」を選択
3. 自動で依存パッケージのインストールや初期化が走るよ！

---

## 🛠️ Makefile の使い方

### 目的

- よく使うコマンドを短く・分かりやすくまとめて、開発効率 UP！

### 主なターゲット

```makefile
up:
    docker compose up -d --build

down:
    docker compose down

migrate:
    docker compose exec web rails db:migrate

seed:
    docker compose exec web rails db:seed

setup:
    npm install
    bundle install
    make up
    make migrate
    make seed
```

#### 使い方例

- `make setup`
  → 依存パッケージのインストール＆コンテナ起動まで一発！
- `make up`
  → サーバーをバックグラウンドで起動
- `make down`
  → サーバーを停止
- `make migrate`
  → DB マイグレーション実行
- `make seed`
  → シードデータ投入
