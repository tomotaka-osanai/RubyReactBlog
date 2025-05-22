import { useQuery } from "@tanstack/react-query";
import { fetchArticleDetail } from "../../../data/articles/fetch";

/**
 * 記事詳細＋関連コンテンツを取得するカスタムフック
 * @param id 記事ID
 * @returns 記事・コンテンツ・ローディング・エラー
 */
export const useArticleDetail = (id: string | number) => {
  // TanStack QueryでAPIからデータ取得
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["articleDetail", id],
    queryFn: () => fetchArticleDetail(id),
    enabled: !!id, // idがあるときだけ実行
  });
  return {
    data,
    isLoading,
    isError,
    error,
  } as const;
};
