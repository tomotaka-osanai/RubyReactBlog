// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails";
import "./controllers";
import React from "react";
import ReactDOM from "react-dom/client";

// React コンポーネントを作成
const App = () => <h1>Hello, React with Rails!</h1>;

console.log("Hello, React with Rails!");

// React をマウント
document.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.getElementById("root"); // HTMLのマウントポイントを取得
  if (rootElement) {
    const root = ReactDOM.createRoot(rootElement); // createRoot を使用
    root.render(<App />); // コンポーネントをレンダリング
  }
});
