import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useArticlesPage } from "../hooks/data/use-articles/use-articles-page";
import { List } from "../components/list";

/**
 * ListWrapper
 * URLのクエリパラメータからページ番号を取得し、
 * useArticlesPageで記事リストを取得してListコンポーネントに渡すラッパーだよ！
 * @returns 記事一覧を表示するListコンポーネント
 */
export const ListWrapper = () => {
  // 現在のページ番号を管理
  const [currentPage, setCurrentPage] = useState(1);
  const [keyword, setKeyword] = useState("");

  // URLのクエリパラメータからpageを取得（なければ1ページ目）
  const [searchParams] = useSearchParams();
  const page =
    Number(searchParams.get("page")) > 0 ? Number(searchParams.get("page")) : 1;

  // 記事データを取得（useArticlesPageを利用）
  const { articles, totalCount, isLoading, isError, error } = useArticlesPage({
    page: currentPage,
    keyword: keyword,
  });

  // ローディング・エラー表示
  if (isLoading) return <div>読み込み中</div>;
  if (isError) return <div>記事の取得に失敗しました…{error?.message}</div>;

  // 総ページ数を計算（1ページ10件想定）
  const itemsPerPage = 10;
  const totalPages = Math.ceil(totalCount / itemsPerPage);

  // 検索実行時の処理
  const handleSearch = (newKeyword: string) => {
    setKeyword(newKeyword);
    setCurrentPage(1); // 検索時は1ページ目に戻す
  };

  const pagerItems = {
    currentPage: currentPage,
    totalPages: totalPages,
    onPageChange: setCurrentPage,
  };
  // 記事一覧を表示
  return (
    <List
      items={{
        articles: articles,
        pagerItems: pagerItems,
        handleSearch: handleSearch,
      }}
    />
  );
};
