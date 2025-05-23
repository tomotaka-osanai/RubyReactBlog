import type { Article } from "../../types/entities/article";

/**
 * 最新記事カード
 * @param article - 記事データ
 * @param onClick - 詳細ページへ遷移するコールバック
 * @returns JSX.Element
 */
export const LatestArticleCard = ({
  article,
  onClick,
}: {
  article: Article;
  onClick: () => void;
}) => (
  <section className="w-full">
    {/* 新着記事ヘッダー */}
    <h3
      className="text-lg font-semibold text-blue-600 mb-2"
      aria-label="新着記事"
    >
      新着記事
    </h3>
    <article className="bg-white shadow-md rounded-lg p-6 w-full text-left flex items-center gap-4">
      {/* 左側：画像 */}
      <img
        src={`https://picsum.photos/120/120?random=${article.id}`}
        alt={article.title}
        className="w-24 h-24 object-cover rounded-md flex-shrink-0"
        loading="lazy"
      />
      {/* 右側：テキスト */}
      <div className="flex-1 min-w-0">
        <h2 className="text-xl font-bold mb-2 break-words">{article.title}</h2>
        <p className="text-gray-700 mb-2">{article.body.slice(0, 120)}…</p>
        <button
          className="text-blue-500 underline"
          onClick={onClick}
          aria-label="続きを読む"
        >
          続きを読む
        </button>
      </div>
    </article>
  </section>
);
