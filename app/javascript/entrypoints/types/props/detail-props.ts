import type { Article } from "../entities/article";

/**
 * Detailコンポーネントのprops型
 * @property {Article} item - 詳細表示する記事データ
 */
export type DetailProps = {
  item?: Article;
};
