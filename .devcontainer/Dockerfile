# ベースイメージはdevcontainers公式Ruby
FROM mcr.microsoft.com/devcontainers/ruby:3.2

# 必要なパッケージをインストール
RUN apt-get update \
  && apt-get install -y --no-install-recommends \
    build-essential \
    libpq-dev \
    libvips \
    git \
    curl \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/*

# 作業ディレクトリを設定
WORKDIR /workspace

# RVMディレクトリの権限を修正
RUN chown -R vscode:vscode /usr/local/rvm

# ここでGemfileやpackage.jsonをコピーしてもOK（キャッシュ効率化したい場合）
# デフォルトのユーザーはdevcontainer.jsonのremoteUser（vscode）
