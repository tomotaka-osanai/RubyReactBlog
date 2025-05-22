import { useQuery } from "@tanstack/react-query";
import { dataArticles } from "../../../data/articles/fetch-all";
import type { Article } from "../../../types/entities/article";

/**
 * useArticlesPage
 * 指定したページ番号で記事一覧を取得するカスタムフックだよ！
 * @param params.page 1始まりのページ番号（未指定や不正値は1ページ目になる）
 * @param params.keyword タイトルに含めたいキーワード（省略可）
 * @returns 記事配列・ローディング状態・エラー状態・エラー内容
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
    data: articles = [],
    isLoading,
    isError,
    error,
  } = useQuery<Article[]>({
    queryKey: ["articles", { page: validPage, keyword }],
    queryFn: () => dataArticles({ page: validPage, keyword }),
  });

  // 結果をオブジェクトで返す（ROROパターン）
  return { articles, isLoading, isError, error };
};
