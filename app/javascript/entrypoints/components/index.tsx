import { useNavigateTo } from "../hooks/ui/use-navigate/use-navigate-to";
import { IndexProps } from "../types/props/index-props";
import { LatestArticleCard } from "./parts/cards/latest-article-card";
import { PopularArticlesSwiper } from "./parts/swiper/popular-article-swiper";
import { CalendarWidget } from "./parts/widget/calendar-widget";
import { AiChatWidget } from "./parts/widget/ai-chat-widget";

/**
 * Indexコンポーネント
 * @param param0.items - 記事データ
 * @returns Indexコンポーネント
 */
export const Index = ({ items }: IndexProps) => {
  const latestArticle = items.latestArticle;
  const popularArticles = items.popularArticles;
  const navigateTo = useNavigateTo();

  return (
    <main className="p-0 max-w-[780px] mx-auto text-center">
      {/* AIチャットウィジェット */}
      {/* <AiChatWidget /> */}

      {/* 新着記事 */}
      {!latestArticle && <div>新着記事がありません</div>}
      {latestArticle.isLoading && <div>新着記事を読み込み中…</div>}
      {latestArticle.isError && <div>新着記事の取得に失敗しました</div>}
      {latestArticle.article && (
        <LatestArticleCard
          article={latestArticle.article}
          onClick={() => navigateTo(`detail/${latestArticle.article.id}`)}
        />
      )}

      {/* 人気記事Swiper */}
      {popularArticles && popularArticles.length > 0 && (
        <PopularArticlesSwiper articles={popularArticles} />
      )}

      {/* カレンダーウィジェット */}
      <CalendarWidget />
    </main>
  );
};
