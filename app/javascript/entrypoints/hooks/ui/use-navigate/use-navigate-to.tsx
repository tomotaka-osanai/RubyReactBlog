import { useNavigate } from "react-router-dom";

/**
 * ページ遷移用の共通フック
 * @returns ページ名とstateを受け取って遷移する関数
 */
export const useNavigateTo = (): ((page: string, state?: unknown) => void) => {
  const navigate = useNavigate();
  /**
   * 指定したページ名に遷移し、任意のstateを渡す
   * @param page 遷移先ページ名（例: "list"）
   * @param state 遷移先に渡す任意のデータ（省略可）
   * @returns なし
   */
  const navigateTo = (page: string, state?: unknown) =>
    navigate(`/${page}`, state ? { state } : undefined);
  return navigateTo;
};

// 使い方例
// const navigateTo = useNavigateTo()
// <button onClick={() => navigateTo("list")}>一覧へ</button>
// <button onClick={() => navigateTo("detail", { item })}>詳細へ</button>
