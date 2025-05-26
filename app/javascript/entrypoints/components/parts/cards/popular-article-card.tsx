import type { Article } from "../../../types/entities/article";

/**
 * 人気記事カード
 * @param article - 記事データ
 * @returns JSX.Element
 */
export const PopularArticleCard = ({ article }: { article: Article }) => (
  <div className="flex flex-col h-64 w-full bg-white rounded-lg shadow-md overflow-hidden">
    {/* 上半分：画像（ダミー画像 or article.imageUrl） */}
    <div className="h-1/2 w-full bg-gray-200 flex items-center justify-center">
      <img
        src={`https://picsum.photos/300/200?random=${article.id}`}
        alt={article.title}
        className="object-cover w-full h-full"
        style={{ maxHeight: "100%" }}
      />
    </div>
    {/* 下半分：タイトルと本文 */}
    <div className="h-1/2 p-4 flex flex-col justify-between">
      <h4 className="font-bold text-base mb-1 break-words">{article.title}</h4>
      <p className="text-sm text-gray-700 line-clamp-2">
        {article.body.slice(0, 50)}…
      </p>
    </div>
  </div>
);
