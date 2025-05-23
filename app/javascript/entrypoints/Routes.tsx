// src/Routes.tsx
import { Routes, Route } from "react-router-dom";
import { IndexWrapper } from "./components/route-wrappers/index-wrapper";
import { ListWrapper } from "./components/route-wrappers/list-wrapper";
import { DetailWrapper } from "./components/route-wrappers/detail-wrapper";

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
    </Routes>
  );
};
