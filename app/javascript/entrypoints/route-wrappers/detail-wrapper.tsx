import { useParams } from "react-router-dom";
import { Detail } from "../pages/detail";
import { items } from "../tests/datas/articles";

/**
 * Detailページ用のラッパー
 * state経由でitemを受け取り、propsでDetailに渡す
 * @returns JSX.Element
 */
export const DetailWrapper = () => {
  const { id } = useParams<{ id: string }>();
  const item = items.find((i) => String(i.id) === id);
  return <Detail item={item} />;
};
