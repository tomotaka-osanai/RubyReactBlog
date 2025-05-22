// src/Routes.tsx
import { Routes, Route } from "react-router-dom";
import { Index } from "./pages/index";
import { List } from "./pages/list";
import { DetailWrapper } from "./route-wrappers/detail-wrapper";
import { items } from "./tests/datas/articles"; // 仮のデータをインポート

/**
 * アプリ全体のルーティングを定義するコンポーネント
 * @returns ルーティング設定のJSX
 */
export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/list" element={<List items={items} />} />
      <Route path="/detail/:id" element={<DetailWrapper />} />
    </Routes>
  );
};
