import { Layout } from "../../layout/layout";

/**
 * 500 Internal Server Errorページ
 * @returns JSX.Element
 */
export const ErrorPage = () => {
  /**
   * ページをリロードする関数
   * @returns void
   */
  const handleReload = () => window.location.reload();

  return (
    <Layout>
      <main className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <h1 className="text-4xl font-bold text-pink-600 mb-4">500</h1>
        <p className="text-lg mb-4">
          ただいま大変込み合っております…
          <br />
          もうしばらくお待ちください
        </p>
        <button
          type="button"
          onClick={handleReload}
          className="mt-2 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          ページを再読み込み
        </button>
      </main>
    </Layout>
  );
};
