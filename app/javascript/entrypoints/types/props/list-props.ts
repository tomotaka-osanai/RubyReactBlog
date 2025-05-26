import type { Article } from "../entities/article";

/**
 * Listコンポーネントのprops型
 * @property {Object} items - 記事データとページネーション情報
 * @property {Article[]} items.articles - 記事の配列
 * @property {Object} items.pagerItems - ページネーション情報
 * @property {number} items.pagerItems.currentPage - 現在のページ番号
 * @property {number} items.pagerItems.totalPages - 総ページ数
 * @property {function} items.pagerItems.onPageChange - ページ変更時のコールバック関数
 * @property {function} [handleSearch] - 検索機能のコールバック関数
 */
export type ListProps = {
  items: {
    articles: Article[];
    pagerItems: {
      currentPage: number;
      totalPages: number;
      onPageChange: (page: number) => void;
    };
    handleSearch: (keyword: string) => void;
  };
};
