// src/Routes.tsx
import { Routes, Route } from "react-router-dom";
import { Index } from "./pages/index.jsx";
import { List } from "./pages/list.jsx";
import { Detail } from "./pages/detail.jsx";
import { items } from "./tests/datas/articles.jsx"; // 仮のデータをインポート

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/list" element={<List items={items} />} />
      <Route path="/detail" element={<Detail />} />
    </Routes>
  );
};
