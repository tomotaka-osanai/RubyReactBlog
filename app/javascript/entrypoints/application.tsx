import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ErrorBoundary } from "./components/layout/error-boudary";
import { AppRoutes } from "./Routes";
import "./styles/global.css";

/**
 * アプリケーションのエントリーポイント
 * DOMContentLoaded時にReactアプリをマウントする
 */
document.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.getElementById("root");
  if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    // QueryClientインスタンスを作成
    const queryClient = new QueryClient();
    root.render(
      <React.StrictMode>
        <BrowserRouter>
          <ErrorBoundary>
            {/* QueryClientProviderでアプリ全体をラップ */}
            <QueryClientProvider client={queryClient}>
              <AppRoutes />
            </QueryClientProvider>
          </ErrorBoundary>
        </BrowserRouter>
      </React.StrictMode>
    );
  }
});
