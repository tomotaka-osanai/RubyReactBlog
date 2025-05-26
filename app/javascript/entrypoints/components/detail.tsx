import { useNavigateTo } from "../hooks/ui/use-navigate/use-navigate-to";
import type { DetailProps } from "../types/props/detail-props";

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
  const navigateTo = useNavigateTo();

  return (
    <main className="p-0 max-w-[780px] mx-auto text-center">
      <h2 className="text-2xl font-bold mb-2">{article.title}</h2>
      <p className="mb-4">{article.body}</p>
      {/* ここでcontentsをループ表示 */}
      <section>
        <ul>
          {contents && contents.length > 0 ? (
            contents.map((content) => (
              <li key={content.id} className="mb-4 p-4 border rounded">
                <h4 className="font-bold">{content.title}</h4>
                <p>{content.body}</p>
              </li>
            ))
          ) : (
            <li>コンテンツがありません</li>
          )}
        </ul>
      </section>
    </main>
  );
};
