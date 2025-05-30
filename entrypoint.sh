#!/bin/bash
set -e

# Remove a potentially pre-existing server.pid for Rails.
rm -f /RubyReactBlog/tmp/pids/server.pid

# DBが使えるまでリトライ（30秒まで待つ）
max_try=30
try_count=0
until pg_isready -h db -p 5432 -U "$POSTGRES_USER"; do
  try_count=$((try_count+1))
  if [ $try_count -ge $max_try ]; then
    echo "Postgresが起動しないので終了するよ！"
    exit 1
  fi
  echo "Postgresの起動待ち... ($try_count/$max_try)"
  sleep 1
done

# production環境の場合のみ
if [ "$RAILS_ENV" = "production" ]; then
  bundle exec rails assets:precompile
  # --------------------------------------
  # 本番環境（AWS ECS）への初回デプロイ時に利用
  # 初回デプロイ後にコメントアウトして下さい
  # マイグレーション処理
  bundle exec rails db:migrate
  # --------------------------------------
  # シードデータの投入
  bundle exec rails db:seed
  # --------------------------------------
fi

# Then exec the container's main process (what's set as CMD in the Dockerfile).
exec "$@"
