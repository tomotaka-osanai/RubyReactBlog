import { useState } from "react";
import { Link } from "react-router-dom";

/**
 * サイト全体のヘッダー
 * @returns JSX.Element
 */
export const SiteHeader = () => {
  // メニュー開閉状態
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // メニューを開閉する関数
  const toggleMenu = () => setIsMenuOpen((open) => !open);

  return (
    <header className="w-full bg-white shadow px-0 py-3 mb-8 relative">
      <div className="max-w-[780px] mx-auto w-full flex items-center justify-between px-6">
        {/* サイト名ロゴ */}
        <Link
          to="/"
          className="text-2xl font-bold text-pink-600 hover:opacity-80"
          aria-label="RubyReactBlogトップへ"
        >
          RubyReactBlog
        </Link>
        {/* ハンバーガー/バツアイコン（スマホのみ表示） */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 relative z-50"
          aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
          onClick={toggleMenu}
        >
          {/* 1本目 */}
          <span
            className={`block w-6 h-0.5 bg-pink-600 rounded transition-all duration-300
              ${isMenuOpen ? "rotate-45 translate-y-0.5" : "mb-1"}
            `}
          />
          {/* 2本目 */}
          <span
            className={`block w-6 h-0.5 bg-pink-600 rounded transition-all duration-300
              ${isMenuOpen ? "opacity-0" : "mb-1"}
            `}
          />
          {/* 3本目 */}
          <span
            className={`block w-6 h-0.5 bg-pink-600 rounded transition-all duration-300
              ${isMenuOpen ? "-rotate-45 -translate-y-0.5" : ""}
            `}
          />
        </button>
        {/* ナビゲーションメニュー（PC表示） */}
        <nav className="hidden md:block">
          <ul className="flex gap-6">
            <li>
              <Link
                to="/"
                className="text-gray-700 hover:text-pink-600 transition-colors"
                aria-label="トップページ"
              >
                トップ
              </Link>
            </li>
            <li>
              <Link
                to="/list"
                className="text-gray-700 hover:text-pink-600 transition-colors"
                aria-label="記事一覧ページ"
              >
                一覧ページ
              </Link>
            </li>
            <li>
              <Link
                to="/popular"
                className="text-gray-700 hover:text-pink-600 transition-colors"
                aria-label="人気記事ページ"
              >
                人気記事
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* スマホ用メニュー（ハンバーガーで開閉） */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white shadow-lg absolute top-16 left-0 w-full z-40">
          <ul className="flex flex-col gap-4 p-6">
            <li>
              <Link
                to="/"
                className="text-gray-700 hover:text-pink-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                トップ
              </Link>
            </li>
            <li>
              <Link
                to="/list"
                className="text-gray-700 hover:text-pink-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                一覧ページ
              </Link>
            </li>
            <li>
              <Link
                to="/popular"
                className="text-gray-700 hover:text-pink-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                人気記事
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};
