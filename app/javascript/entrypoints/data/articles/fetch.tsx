/**
 * 記事詳細＋関連コンテンツをAPIから取得する関数
 * @param id 記事ID
 * @returns 記事とコンテンツのデータ
 */
export const fetchArticleDetail = async (id: string | number) => {
  const res = await fetch(`/api/articles/${id}`);
  if (!res.ok) throw new Error("記事詳細の取得に失敗しました");
  return res.json();
};
