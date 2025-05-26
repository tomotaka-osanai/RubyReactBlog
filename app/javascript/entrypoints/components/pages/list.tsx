import { Link } from "react-router-dom";
import type { ListProps } from "../../types/props/list-props";
import { Pager } from "../parts/pager/pager";
import { SearchForm } from "../form/search-form";
import { Breadcrumb } from "../parts/breadcrumb/breadcrumb";
import { Layout } from "../layout/layout";
/**
 * 一覧ページコンポーネント
 * @param {ListProps} items - 記事データの配列
 * @returns JSX.Element 一覧ページのJSX
 */
export const List = ({ items }: ListProps) => {
  const articles = items.articles;
  const {
    currentPage,
    totalPages,
    onPageChange: setCurrentPage,
  } = items.pagerItems;
  const handleSearch = items.handleSearch;

  return (
    <Layout>
      <main className="pt-16 md:pt-0 p-0 max-w-[780px] mx-auto text-center">
        {/* パンくずリスト */}
        <Breadcrumb
          items={[{ label: "⌂HOME", href: "/" }, { label: "記事一覧" }]}
        />

        <h2 className="text-2xl font-bold mb-4">記事一覧</h2>
        {/* 検索フォーム */}
        <SearchForm onSearch={handleSearch} />
        <ul className="space-y-2">
          {articles.map((article) => (
            <li key={article.id}>
              <Link
                to={`/detail/${article.id}`}
                className="flex bg-white p-4 rounded shadow items-center hover:bg-pink-50 cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-pink-400 text-left"
                aria-label={`${article.title} の詳細ページへ`}
                tabIndex={0}
              >
                {/* 左側：画像 */}
                <img
                  src={`https://picsum.photos/300/300?random=${article.id}`}
                  alt={`${article.title} のサムネイル`}
                  className="w-16 h-16 object-cover rounded-lg mr-4 flex-shrink-0 bg-gray-100"
                  loading="lazy"
                />
                {/* 右側：タイトル＋本文冒頭 */}
                <div className="flex-1">
                  <div className="font-bold text-lg text-gray-800">
                    {article.title}
                  </div>
                  <div className="text-gray-500 text-sm mt-1 line-clamp-2">
                    {article.body?.slice(0, 40) || "本文がありません…"}
                  </div>
                </div>
                {/* 右端の矢印 */}
                <span className="text-pink-500 text-sm font-bold ml-4">
                  &gt;
                </span>
              </Link>
            </li>
          ))}
        </ul>
        {/* 下部ページャー */}
        <Pager
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </main>
    </Layout>
  );
};
