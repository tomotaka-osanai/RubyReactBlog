import { useNavigateTo } from "../hooks/library/use-navigate/use-navigate-to";
import type { DetailProps } from "../types/props/detail-props";

/**
 * 詳細ページコンポーネント
 * 記事データをstate経由で受け取り、詳細を表示する
 * @params {DetailProps} item - 記事データ
 * @returns JSX.Element
 */
export const Detail = ({ item }: DetailProps) => {
  // データがなければ早期リターン
  if (!item) return <div>記事データがありません</div>;

  const navigateTo = useNavigateTo();
  return (
    <main className="p-8">
      <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
      <p className="mb-4">{item.body}</p>
      <button
        className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
        onClick={() => navigateTo("list")}
      >
        一覧へ戻る
      </button>
    </main>
  );
};
