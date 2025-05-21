import { useNavigateTo } from "../hooks/use-navigate/use-navigate-to";

/**
 * TOPページコンポーネント
 * @param {Object} props
 * @param {Function} props.onNavigate - ページ遷移用コールバック
 */
export const Index = () => {
  const navigateTo = useNavigateTo();
  return (
    <main className="p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">React×Rails サンプルサイト</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={() => navigateTo("list")}
      >
        一覧ページへ
      </button>
    </main>
  );
};
