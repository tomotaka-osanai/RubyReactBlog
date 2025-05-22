/**
 * Content型
 * 記事や投稿などのコンテンツ情報を表す型だよ！
 * @property id - コンテンツの一意なID
 * @property article - 関連する記事のID
 * @property sort - コンテンツの表示順序を示す数値
 * @property title - コンテンツのタイトル
 * @property body - 本文や詳細内容
 * @property createdAt - 作成日時（ISO8601文字列）
 * @property updatedAt - 更新日時（ISO8601文字列）
 */
export type Content = {
  id: number;
  article: number;
  sort: number;
  title: string;
  body: string;
  createdAt: string;
  updatedAt: string;
};
