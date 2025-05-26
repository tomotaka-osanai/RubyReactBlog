import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { PopularArticleCard } from "../cards/popular-article-card";
import type { Article } from "../../../types/entities/article";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

/**
 * 人気記事をSwiperで横スクロール表示するコンポーネント
 * @param articles - 表示する記事配列
 * @returns JSX.Element
 */
export const PopularArticlesSwiper = ({
  articles,
}: {
  articles: Article[];
}) => (
  <section className="mt-8 max-w-[780px] mx-auto overflow-x-auto">
    <h3 className="text-lg font-semibold text-pink-600 mb-4">人気の記事</h3>
    {/* Swiperコンポーネント */}
    <Swiper
      modules={[Pagination, Navigation]}
      slidesPerView="auto"
      spaceBetween={16}
      pagination={{
        clickable: true,
        el: ".custom-swiper-pagination", // ←ここで外部のDOMを指定
      }}
      className="max-w-[760px] !w-auto min-w-0 overflow-visible"
    >
      {articles.map((article) => (
        <SwiperSlide
          key={article.id}
          className="!w-[242.6px] min-w-[242.6px] h-63 !flex-shrink-0"
        >
          {/* カード全体を詳細ページへのリンクにする */}
          <Link
            to={`/detail/${article.id}`}
            className="block h-full w-full focus:outline-none focus:ring-2 focus:ring-pink-400 rounded"
            aria-label={`${article.title} の詳細ページへ`}
            tabIndex={0}
          >
            <PopularArticleCard article={article} />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
    {/* Swiperの外にページネーションを表示 */}
    <div className="custom-swiper-pagination flex justify-center mt-4" />
  </section>
);
