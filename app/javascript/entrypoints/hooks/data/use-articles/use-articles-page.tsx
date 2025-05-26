import { useQuery } from "@tanstack/react-query";
import { dataArticles } from "../../../data/articles/fetch-all";

/**
 * useArticlesPage
 * 指定したページ番号で記事一覧と総件数を取得するカスタムフックだよ！
 * @param number page=1 - 1始まりのページ番号（未指定や不正値は1ページ目になる）
 * @param string keyword="" - タイトルに含めたいキーワード（省略可）
 * @returns  articles: Article[], totalCount: number, isLoading: boolean, isError: boolean, error: unknown
 */
export const useArticlesPage = ({
  page = 1,
  keyword = "",
}: {
  page?: number;
  keyword?: string;
} = {}) => {
  // ページ番号が未指定や不正なら1ページ目にする
  const validPage = page > 0 ? page : 1;

  // TanStack QueryでAPIからデータ取得
  const {
    data = { articles: [], totalCount: 0 },
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["articles", { page: validPage, keyword }],
    queryFn: () => dataArticles({ page: validPage, keyword }),
  });

  // 結果をオブジェクトで返す（ROROパターン）
  return {
    articles: data.articles,
    totalCount: data.totalCount,
    isLoading,
    isError,
    error,
  };
};
