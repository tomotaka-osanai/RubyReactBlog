import { useEffect, useState } from "react";

/**
 * 一定の高さスクロールしたら表示される「ページトップへ戻る」ボタン
 * @returns JSX.Element | null
 */
export const ScrollToTopButton = () => {
  // ボタン表示状態を管理
  const [isVisible, setIsVisible] = useState(false);

  // スクロールイベントで表示/非表示を切り替え
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200); // 200px以上スクロールで表示
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ページトップへスムーススクロール
  const handleClick = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // ボタンが非表示なら何も描画しない
  if (!isVisible) return null;

  return (
    <button
      type="button"
      aria-label="ページトップへ戻る"
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-pink-500 text-white rounded-full shadow-lg p-3 hover:bg-pink-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
    >
      {/* 上矢印アイコン（SVG） */}
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
};
