import { useParams } from "react-router-dom";
import { useArticleDetail } from "../../hooks/data/use-articles/use-article-detail";
import { Detail } from "../detail";

/**
 * Detailページ用のラッパー
 * APIから記事詳細＋contentsを取得してDetailに渡す
 * @returns JSX.Element
 */
export const DetailWrapper = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, isError, error } = useArticleDetail(id ?? "");

  if (isLoading) return <div>読み込み中…</div>;
  if (isError) return <div>記事詳細の取得に失敗しました…{error?.message}</div>;
  if (!data) return <div>データがありません</div>;

  // data.article, data.contents をDetailに渡す
  return <Detail items={{ article: data.article, contents: data.contents }} />;
};
