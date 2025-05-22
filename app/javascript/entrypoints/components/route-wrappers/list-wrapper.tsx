import { useSearchParams } from "react-router-dom";
import { useArticlesPage } from "../../hooks/data/use-articles/use-articles-page";
import { List } from "../list";

/**
 * ListWrapper
 * URLのクエリパラメータからページ番号を取得し、
 * useArticlesPageで記事リストを取得してListコンポーネントに渡すラッパーだよ！
 * @returns 記事一覧を表示するListコンポーネント
 */
export const ListWrapper = () => {
  // URLのクエリパラメータからpageを取得（なければ1ページ目）
  const [searchParams] = useSearchParams();
  const page =
    Number(searchParams.get("page")) > 0 ? Number(searchParams.get("page")) : 1;

  // 記事リストを取得
  const { articles, isLoading, isError, error } = useArticlesPage({ page });

  // ローディング・エラー表示
  if (isLoading) return <div>読み込み中</div>;
  if (isError) return <div>記事の取得に失敗しました…{error?.message}</div>;

  // 記事一覧を表示
  return <List items={articles} />;
};
