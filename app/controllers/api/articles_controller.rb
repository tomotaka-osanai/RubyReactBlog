module Api
  class ArticlesController < ApplicationController
    # GET /api/articles
    # ページ番号とキーワードで記事一覧を返すAPI
    def index
      page = params[:page].to_i > 0 ? params[:page].to_i : 1
      per_page = 10

      # キーワードがあればタイトルで部分一致検索
      articles = if params[:keyword].present?
        Article.where('title LIKE ?', "%#{params[:keyword]}%")
      else
        Article.all
      end

      # ページネーション
      articles = articles.offset((page - 1) * per_page).limit(per_page)

      render json: articles
    end
  end
end
