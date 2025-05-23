import type { Article } from "../entities/article";

/**
 * IndexProps
 * トップページに渡すpropsの型だよ！
 * @property latestArticle - 最新記事の情報を持つオブジェクト
 * @property latestArticle.article - 記事データ
 * @property latestArticle.isLoading - ローディング中かどうか
 * @property latestArticle.isError - エラーが発生したかどうか
 * @property latestArticle.error - エラー情報
 */
export type IndexProps = {
  items: {
    latestArticle: {
      article: Article;
      isLoading: boolean;
      isError: boolean;
      error: unknown;
    };
    popularArticles?: Article[];
  };
};
