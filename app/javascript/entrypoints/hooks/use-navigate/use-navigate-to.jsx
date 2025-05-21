import { useNavigate } from "react-router-dom";

/**
 * ページ遷移用の共通フック
 * @returns {function} ページ名を受け取って遷移する関数
 */
export const useNavigateTo = () => {
  const navigate = useNavigate();
  /**
   * 指定したページ名に遷移する
   * @param {string} page ページ名（例: "list"）
   */
  const navigateTo = (page, state) =>
    navigate(`/${page}`, state ? { state } : undefined);
  return navigateTo;
};
// 使い方の例
// const navigateTo = useNavigateTo();
// <button onClick={() => navigateTo("list")}>一覧へ</button>
// <button onClick={() => navigateTo("detail")}>詳細へ</button>
// <button onClick={() => navigateTo("index")}>TOPへ</button>
// <button onClick={() => navigateTo("list", { item })}>詳細へ</button>
