import { FC } from "react";

/**
 * パンくずリスト用の型
 * @param label 表示名
 * @param href リンク先
 */
type BreadcrumbItem = {
  label: string;
  href?: string;
};

/**
 * パンくずリストコンポーネント
 * @param items パンくずの配列
 */
export const Breadcrumb: FC<{ items: BreadcrumbItem[] }> = ({ items }) => (
  <nav aria-label="パンくずリスト" className="p-2 text-sm">
    <ol className="flex flex-wrap gap-1 items-center">
      {items.map((item, i) => (
        <li key={item.label} className="flex items-center">
          {item.href && i !== items.length - 1 ? (
            <a
              href={item.href}
              className="text-blue-600 hover:text-pink-500 hover:underline transition-colors duration-150"
            >
              {item.label}
            </a>
          ) : (
            <span
              className={`${
                i === items.length - 1
                  ? "text-pink-600 font-bold"
                  : "text-gray-500"
              }`}
              aria-current={i === items.length - 1 ? "page" : undefined}
            >
              {item.label}
            </span>
          )}
          {i < items.length - 1 && (
            // SVGの矢印アイコンで区切りをオシャレに！
            <svg
              className="mx-1 w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          )}
        </li>
      ))}
    </ol>
  </nav>
);
