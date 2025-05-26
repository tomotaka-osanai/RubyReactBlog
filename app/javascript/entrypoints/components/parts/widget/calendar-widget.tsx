import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Value } from "react-calendar/dist/cjs/shared/types";
import { isHoliday } from "japanese-holidays";

/**
 * 指定した日付が祝日かどうかを判定するダミー関数
 * @param date Date
 * @returns string
 */
const getHoliday = (date: Date | null): string =>
  date ? isHoliday(date) || "" : "";

/**
 * カレンダーウィジェット
 * @returns JSX.Element カレンダーUI
 */
export const CalendarWidget = () => {
  // 選択された日付を管理
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  /**
   * 日付選択時の処理
   * @param value - 選択された日付
   */
  const handleChange = (value: Value) => setSelectedDate(value as Date);

  /**
   * 祝日判定し、祝日ならクラス名を返す
   * @param param0 オブジェクト（date: 日付, view: カレンダーのビュー種別）
   * @returns string | undefined
   */
  const getHolidayClass = ({ date, view }: { date: Date; view: string }) =>
    view === "month" && isHoliday(date) ? "!font-bold" : undefined;

  /**
   * 指定した日付の曜日を返す
   * @param date Date | null
   * @returns string
   */
  const getWeekday = (date: Date | null): string =>
    date ? date.toLocaleDateString("ja-JP", { weekday: "long" }) : "";

  return (
    <section className="mt-8">
      <h3 className="text-xl font-bold mb-4">カレンダー</h3>
      <div className="w-full max-w-[780px] mx-auto p-4 bg-white shadow-md rounded-lg">
        {/* レスポンシブflexレイアウト */}
        <div className="flex flex-col md:flex-row gap-4 items-stretch">
          {/* カレンダー本体 */}
          <div className="md:w-1/2 w-full flex justify-center">
            <Calendar
              onChange={handleChange}
              value={selectedDate}
              className="max-w-xs w-full"
              calendarType="gregory"
              aria-label="カレンダー"
              tileClassName={getHolidayClass}
            />
          </div>
          {/* 選択日情報エリア */}
          <div className="md:w-1/2 w-full flex flex-col justify-center items-center bg-gray-50 rounded-lg p-4 min-h-[320px]">
            {selectedDate ? (
              <>
                <div className="text-lg font-bold text-pink-600 mb-2">
                  {selectedDate.toLocaleDateString()} の情報
                </div>
                <div className="mb-1">
                  <span className="font-semibold">曜日：</span>
                  {getWeekday(selectedDate)}
                </div>
                <div className="mb-1">
                  <span className="font-semibold">祝日：</span>
                  {getHoliday(selectedDate) || "祝日ではありません"}
                </div>
              </>
            ) : (
              <div className="text-gray-400">
                日付を選択すると情報が表示されます
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
