import { Link } from "react-router-dom";

/**
 * サイト全体のヘッダー
 * @returns JSX.Element
 */
export const SiteHeader = () => (
  <header className="w-full bg-white shadow flex items-center justify-between px-6 py-3 mb-8">
    {/* 中央寄せ＆幅制限ラッパー */}
    <div className="sm:max-w-full md:max-w-[780px] mx-auto w-full flex items-center justify-between px-6">
      {/* サイト名ロゴ */}
      <Link
        to="/"
        className="text-2xl font-bold text-pink-600 hover:opacity-80"
        aria-label="RubyReactBlogトップへ"
      >
        RubyReactBlog
      </Link>
      {/* ナビゲーションメニュー */}
      <nav>
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
          {/* 必要に応じてメニュー追加OK */}
        </ul>
      </nav>
    </div>
  </header>
);
