// src/Routes.tsx
import { Routes, Route } from "react-router-dom";
import { IndexWrapper } from "./pages/index-wrapper";
import { ListWrapper } from "./pages/list-wrapper";
import { DetailWrapper } from "./pages/detail-wrapper";
import { NotFoundPage } from "./components/pages/error/not-found-page";

/**
 * アプリ全体のルーティングを定義するコンポーネント
 * @returns ルーティング設定のJSX
 */
export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<IndexWrapper />} />
      <Route path="/list" element={<ListWrapper />} />
      <Route path="/detail/:id" element={<DetailWrapper />} />
      {/* 404 Not Found ページ */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
