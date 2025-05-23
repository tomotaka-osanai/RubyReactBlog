import { Link } from "react-router-dom";
import type { ListProps } from "../types/props/list-props";

/**
 * 一覧ページコンポーネント
 * @param {ListProps} items - 記事データの配列
 * @returns JSX.Element 一覧ページのJSX
 */
export const List = ({ items }: ListProps) => (
  <main className="p-0 max-w-[780px] mx-auto text-center">
    <h2 className="text-2xl font-bold mb-4">記事一覧</h2>
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item.id}>
          <Link
            to={`/detail/${item.id}`}
            className="flex bg-white p-4 rounded shadow items-center hover:bg-pink-50 cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-pink-400 text-left"
            aria-label={`${item.title} の詳細ページへ`}
            tabIndex={0}
          >
            {/* 左側：画像 */}
            <img
              src={`https://picsum.photos/300/300?random=${item.id}`}
              alt={`${item.title} のサムネイル`}
              className="w-16 h-16 object-cover rounded-lg mr-4 flex-shrink-0 bg-gray-100"
              loading="lazy"
            />
            {/* 右側：タイトル＋本文冒頭 */}
            <div className="flex-1">
              <div className="font-bold text-lg text-gray-800">
                {item.title}
              </div>
              <div className="text-gray-500 text-sm mt-1 line-clamp-2">
                {item.body?.slice(0, 40) || "本文がありません…"}
              </div>
            </div>
            {/* 右端の矢印 */}
            <span className="text-pink-500 text-sm font-bold ml-4">&gt;</span>
          </Link>
        </li>
      ))}
    </ul>
  </main>
);
