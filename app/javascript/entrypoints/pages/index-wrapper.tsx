import { useArticlesPage } from "../hooks/data/use-articles/use-articles-page";
import { Index } from "../components/index";

/**
 * index-wrapper
 * 最新記事をAPIから取得し、Indexコンポーネントに渡すラッパーだよ！
 * @returns Indexコンポーネント（最新記事をpropsで渡す）
 */
export const IndexWrapper = () => {
  // 1ページ目の記事リストを取得（最新記事が先頭に来る想定！）
  const {
    articles = [],
    isLoading,
    isError,
    error,
  } = useArticlesPage({ page: 1 });

  // 最新記事（配列の先頭）を取得
  const latestArticle = {
    article: articles[0],
    isLoading,
    isError,
    error,
  };

  // 人気記事をランダムで10件
  const shuffled = [...articles].sort(() => Math.random() - 0.5);
  const popularArticles = shuffled.slice(0, 10);

  // ローディング・エラー表示はコンポーネント内で行うのでここでは何もしない

  // 最新記事をIndexコンポーネントに渡す
  return (
    <Index
      items={{ latestArticle: latestArticle, popularArticles: popularArticles }}
    />
  );
};
