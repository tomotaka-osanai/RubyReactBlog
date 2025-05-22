// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./Routes"; // ルーティング用コンポーネントをインポート

/**
 * アプリケーションのエントリーポイント
 * DOMContentLoaded時にReactアプリをマウントする
 */
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
