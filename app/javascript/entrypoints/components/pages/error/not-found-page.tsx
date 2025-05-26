import { Layout } from "../../layout/layout";

/**
 * 404 Not Foundページ
 * @returns JSX.Element
 */
export const NotFoundPage = () => (
  <Layout>
    <main className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-4xl font-bold text-pink-600 mb-4">404</h1>
      <p className="text-lg mb-4">こちらのページは準備中です…</p>
      <a href="/" className="text-blue-600 hover:underline">
        ホームに戻る
      </a>
    </main>
  </Layout>
);
