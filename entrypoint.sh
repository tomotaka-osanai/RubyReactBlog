#!/bin/bash
set -e

# Remove a potentially pre-existing server.pid for Rails.
rm -f /RubyReactBlog/tmp/pids/server.pid

# production環境の場合のみ
if [ "$RAILS_ENV" = "production" ]; then
  bundle exec rails assets:precompile
  # --------------------------------------
  # 本番環境（AWS ECS）への初回デプロイ時に利用
  # 初回デプロイ後にコメントアウトして下さい
  # マイグレーション処理
  rails db:migrate
  # --------------------------------------
  # シードデータの投入
  rails db:seed
  # --------------------------------------
fi

# Then exec the container's main process (what's set as CMD in the Dockerfile).
exec "$@"
