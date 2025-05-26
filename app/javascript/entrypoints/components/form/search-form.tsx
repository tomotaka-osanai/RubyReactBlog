import { useState } from "react";

/**
 * 検索フォーム
 * @param onSearch 検索実行時に呼ばれるコールバック
 */
export const SearchForm = ({
  onSearch,
}: {
  onSearch: (keyword: string) => void;
}) => {
  const [inputValue, setInputValue] = useState("");

  // 検索ボタン押下 or Enterで検索
  /**
   * フォーム送信時に検索処理を実行する
   * @param e フォームイベント
   */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(inputValue);
  };

  return (
    <form
      className="mb-4 flex justify-center gap-2"
      onSubmit={handleSubmit}
      role="search"
    >
      <input
        type="text"
        className="border rounded px-2 py-1 w-60"
        placeholder="キーワードで検索"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        aria-label="記事検索キーワード"
      />
      <button
        className="bg-pink-500 text-white px-4 py-1 rounded"
        type="submit"
      >
        検索
      </button>
    </form>
  );
};
