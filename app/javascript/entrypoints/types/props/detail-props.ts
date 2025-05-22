import type { Article } from "../entities/article";
import type { Content } from "../entities/content";

/**
 * Detailコンポーネントのprops型
 * @property {Article} item - 詳細表示する記事データ
 */
export type DetailProps = {
  items: {
    article?: Article;
    contents?: Content[];
  };
};
