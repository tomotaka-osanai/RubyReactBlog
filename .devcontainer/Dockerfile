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

# 環境変数を設定
RUN echo '\[\]`export XIT=$? \ && [ ! -z "${GITHUB_USER:-}" ] && echo -n "\[\033[0;32m\]@${GITHUB_USER:-} " || echo -n "\[\033[0;32m\]\u " \ && [ "$XIT" -ne "0" ] && echo -n "\[\033[1;31m\]➜" || echo -n "\[\033[0m\]➜"` \[\033[1;34m\]\w `\ if [ "$(git config --get devcontainers-theme.hide-status 2>/dev/null)" != 1 ] && [ "$(git config --get codespaces-theme.hide-status 2>/dev/null)" != 1 ]; then \ export BRANCH="$(git --no-optional-locks symbolic-ref --short HEAD 2>/dev/null || git --no-optional-locks rev-parse --short HEAD 2>/dev/null)"; \ if [ "${BRANCH:-}" != "" ]; then \ echo -n "\[\033[0;36m\](\[\033[1;31m\]${BRANCH:-}" \ && if [ "$(git config --get devcontainers-theme.show-dirty 2>/dev/null)" = 1 ] && \ git --no-optional-locks ls-files --error-unmatch -m --directory --no-empty-directory -o --exclude-standard ":/*" > /dev/null 2>&1; then \ echo -n " \[\033[1;33m\]✗"; \ fi \ && echo -n "\[\033[0;36m\]) "; \ fi; \ fi`\[\033[0m\]\n$ \[\]' >> /home/vscode/.bashrc

# ここでGemfileやpackage.jsonをコピーしてもOK（キャッシュ効率化したい場合）
# デフォルトのユーザーはdevcontainer.jsonのremoteUser（vscode）
