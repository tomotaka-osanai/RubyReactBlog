/**
 * 記事一覧をAPIから取得する関数
 * @param params ページ番号やキーワードなどの検索条件
 * @returns 記事データの配列Promise
 */
export const dataArticles = async ({
  page,
  keyword,
}: {
  page?: number;
  keyword?: string;
} = {}) => {
  // クエリパラメータを組み立てる
  const params = new URLSearchParams();
  if (page) params.append("page", String(page));
  if (keyword) params.append("keyword", keyword);

  // APIリクエストを送信
  const response = await fetch(`/api/articles?${params.toString()}`);
  if (!response.ok) throw new Error("記事の取得に失敗しました");
  return response.json();
};
