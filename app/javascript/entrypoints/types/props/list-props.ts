import type { Article } from "../entities/article";

/**
 * Listコンポーネントのprops型
 * @property {Article[]} items - 記事データ配列
 */
export type ListProps = {
  items: Article[];
};
