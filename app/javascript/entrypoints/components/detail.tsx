import type { DetailProps } from "../types/props/detail-props";
import { Breadcrumb } from "./parts/breadcrumb/breadcrumb";

/**
 * 詳細ページコンポーネント
 * 記事データをstate経由で受け取り、詳細を表示する
 * @params {DetailProps} items - 記事データ
 * @returns JSX.Element
 */
export const Detail = ({ items }: DetailProps) => {
  const article = items.article;
  const contents = items.contents;
  // データがなければ早期リターン
  if (!article && !contents) return <div>データがありません</div>;
  if (!article) return <div>記事データがありません</div>;

  return (
    <main className="p-0 max-w-[780px] mx-auto text-center">
      {/* パンくずリスト */}
      <Breadcrumb
        items={[
          { label: "⌂HOME", href: "/" },
          { label: "記事一覧", href: "/list" },
          { label: article.title },
        ]}
      />

      <div className="w-full text-center flex items-center justify-center">
        <div className="w-full max-w-[580px] items-center justify-center">
          <h2 className="text-2xl font-bold mb-2">{article.title}</h2>
          <img
            src={`https://picsum.photos/600/400?random=${article.id}`}
            alt="記事トップ画像"
            className="mx-auto mb-4 rounded shadow max-h-[580px] object-cover"
          />
          <p className="mb-4">{article.body}</p>
          {/* ここでcontentsをループ表示 */}
          <section>
            <ul>
              {contents && contents.length > 0 ? (
                contents.map((content) => (
                  <li key={content.id} className="mb-4 p-4 border rounded">
                    <h4 className="font-bold">{content.title}</h4>
                    <img
                      src={`https://picsum.photos/600/400?random=${
                        article.id + content.id
                      }`}
                      alt="コンテンツ画像"
                      className="mx-auto mb-2 rounded max-h-[546px] object-cover"
                    />
                    <p>{content.body}</p>
                  </li>
                ))
              ) : (
                <li>コンテンツがありません</li>
              )}
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
};
