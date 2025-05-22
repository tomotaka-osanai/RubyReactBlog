import { useNavigateTo } from "../hooks/library/use-navigate/use-navigate-to";

/**
 * TOPページコンポーネント
 * React×Railsサンプルサイトのトップ画面を表示する
 * @returns JSX.Element トップページのJSX
 */
export const Index = () => {
  // ページ遷移用のカスタムフックを呼び出し
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
