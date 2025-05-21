import { useLocation } from "react-router-dom";
import { useNavigateTo } from "../hooks/use-navigate/use-navigate-to.jsx";

/**
 * 詳細ページコンポーネント
 * @param {Object} props
 * @param {Object} props.item - 記事データ
 * @param {Function} props.onNavigate - ページ遷移用コールバック
 */
export const Detail = () => {
  const { state: item } = useLocation();
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
