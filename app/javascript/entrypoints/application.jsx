// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, useNavigate } from "react-router-dom";
import { AppRoutes } from "./Routes"; // ルーティング用コンポーネントをインポート

// React をマウント
document.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.getElementById("root"); // HTMLのマウントポイントを取得
  if (rootElement) {
    const root = ReactDOM.createRoot(rootElement); // createRoot を使用
    root.render(
      <React.StrictMode>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </React.StrictMode>
    );
  }
});

// --- HMR対応ここから ---
if (import.meta.hot) {
  import.meta.hot.accept();
}
// --- HMR対応ここまで ---
