module Api
  class ArticlesController < ApplicationController
    # GET /api/articles
    # ページ番号とキーワードで記事一覧を返すAPI
    def index
      page = params[:page].to_i > 0 ? params[:page].to_i : 1
      per_page = 10

      # キーワードがあればタイトルで部分一致検索
      articles_scope = if params[:keyword].present?
        Article.where('title LIKE ?', "%#{params[:keyword]}%")
      else
        Article.all
      end

      # 記事総数を取得
      total_count = articles_scope.count

      # ページネーション
      articles = articles_scope.offset((page - 1) * per_page).limit(per_page)

      render json: { articles: articles, totalCount: total_count }
    end

    # GET /api/articles/:id
    # 指定IDの記事1件だけ返すAPI
    def show
      article = Article.includes(:contents).find(params[:id])
      render json: {
        article: article,
        contents: article.contents
      }
    rescue ActiveRecord::RecordNotFound
      render json: { error: "記事が見つかりませんでした" }, status: :not_found
    end
  end
end
