# syntax=docker/dockerfile:1
# check=error=true

# This Dockerfile is designed for production, not development. Use with Kamal or build'n'run by hand:
# docker build -t ruby_react_blog .
# docker run -d -p 80:80 -e RAILS_MASTER_KEY=<value from config/master.key> --name ruby_react_blog ruby_react_blog

# For a containerized dev environment, see Dev Containers: https://guides.rubyonrails.org/getting_started_with_devcontainer.html

# Make sure RUBY_VERSION matches the Ruby version in .ruby-version
ARG RUBY_VERSION=3.4.3
FROM docker.io/library/ruby:$RUBY_VERSION-slim AS base

# Rails app lives here
WORKDIR /rails

# Install base packages
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y curl libjemalloc2 libvips postgresql-client && \
    rm -rf /var/lib/apt/lists /var/cache/apt/archives

# Set production environment
ENV BUNDLE_DEPLOYMENT="1" \
    BUNDLE_PATH="/usr/local/bundle" \
    BUNDLE_WITHOUT="development" \
    PATH="/usr/local/bundle/bin:${PATH}" \
    PATH="/rails/bin:${PATH}"

# Throw-away build stage to reduce size of final image
FROM base AS build

# Install packages needed to build gems
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y build-essential git libpq-dev libyaml-dev pkg-config && \
    rm -rf /var/lib/apt/lists /var/cache/apt/archives

# Install application gems
COPY Gemfile Gemfile.lock ./
RUN bundle install && \
    rm -rf ~/.bundle/ "${BUNDLE_PATH}"/ruby/*/cache "${BUNDLE_PATH}"/ruby/*/bundler/gems/*/.git && \
    bundle exec bootsnap precompile --gemfile

# 先にpackage.jsonとpackage-lock.jsonをコピー
COPY package.json package-lock.json ./

# Install Node.js and npm
RUN apt-get update && apt-get install -y nodejs npm && npm install

# Copy application code
COPY . ./

# Precompile bootsnap code for faster boot times
RUN bundle exec bootsnap precompile app/ lib/

# Precompiling assets for production without requiring secret RAILS_MASTER_KEY
RUN SECRET_KEY_BASE_DUMMY=1 ./bin/rails assets:precompile

# フロントエンドの本番ビルド
RUN bin/vite build

# ENTRYPOINTは絶対パスで指定
# COPY entrypoint.sh /rails/entrypoint.sh
# RUN chmod +x /rails/entrypoint.sh
# ENTRYPOINT ["/rails/entrypoint.sh"]

# Start server via Thruster by default, this can be overwritten at runtime
EXPOSE 3000

# docker
CMD ["./bin/thrust", "./bin/rails", "server", "-b", "0.0.0.0"]
