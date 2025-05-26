/**
 * Pager
 * ページ送りUIコンポーネント
 * @param number currentPage - 現在のページ番号
 * @param number totalPages - 総ページ数
 * @param (page: number) => void onPageChange - ページ変更時のコールバック
 */
export const Pager = ({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) => (
  <nav
    className="flex justify-center items-center gap-2 my-4"
    aria-label="ページネーション"
  >
    <button
      className="px-3 py-1 rounded bg-gray-100 text-gray-600 hover:bg-pink-100 transition disabled:opacity-50"
      onClick={() => onPageChange(currentPage - 1)}
      disabled={currentPage === 1}
      aria-label="前のページへ"
      type="button"
    >
      前へ
    </button>
    {[...Array(totalPages)].map((_, i) => (
      <button
        key={i}
        className={`px-2 py-1 rounded ${
          currentPage === i + 1
            ? "bg-pink-500 text-white"
            : "bg-gray-100 text-gray-600 hover:bg-pink-100"
        } transition`}
        onClick={() => onPageChange(i + 1)}
        aria-label={`ページ${i + 1}`}
        type="button"
      >
        {i + 1}
      </button>
    ))}
    <button
      className="px-3 py-1 rounded bg-gray-100 text-gray-600 hover:bg-pink-100 transition disabled:opacity-50"
      onClick={() => onPageChange(currentPage + 1)}
      disabled={currentPage === totalPages}
      aria-label="次のページへ"
      type="button"
    >
      次へ
    </button>
  </nav>
);
