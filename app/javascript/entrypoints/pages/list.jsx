import { useNavigateTo } from "../hooks/use-navigate/use-navigate-to";

/**
 * 一覧ページコンポーネント
 * @param {Object} props
 * @param {Array} props.items - 記事データ
 * @param {Function} props.onNavigate - ページ遷移用コールバック
 */
export const List = ({ items }) => {
  const navigateTo = useNavigateTo();
  return (
    <main className="p-8">
      <h2 className="text-2xl font-bold mb-4">記事一覧</h2>
      <ul className="space-y-2">
        {items.map((item) => (
          <li
            key={item.id}
            className="bg-white p-4 rounded shadow flex justify-between items-center"
          >
            <span>{item.title}</span>
            <button
              className="text-blue-500 underline"
              onClick={() => navigateTo("detail", item)}
            >
              詳細
            </button>
          </li>
        ))}
      </ul>
      <button
        className="mt-6 bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
        onClick={() => navigateTo("")}
      >
        TOPへ戻る
      </button>
    </main>
  );
};
