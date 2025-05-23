import { Link } from "react-router-dom";

/**
 * サイト全体のフッター
 * @returns JSX.Element
 */
export const SiteFooter = () => (
  <footer className="w-full bg-gray-50 border-t border-gray-200 py-6 mt-12">
    <div className="max-w-[780px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-2">
      {/* コピーライト */}
      <span className="text-sm text-gray-500">
        &copy; {new Date().getFullYear()} RubyReactBlog. All rights reserved.
      </span>
      {/* フッターリンク */}
      <nav>
        <ul className="flex gap-4 text-sm">
          <li>
            <Link
              to="/"
              className="text-gray-500 hover:text-pink-600 transition-colors"
            >
              トップ
            </Link>
          </li>
          <li>
            <Link
              to="/privacy"
              className="text-gray-500 hover:text-pink-600 transition-colors"
            >
              プライバシー
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-gray-500 hover:text-pink-600 transition-colors"
            >
              お問い合わせ
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
);
