import { useState } from "react";

/**
 * ai-chat-widget
 * HuggingChatの非公式APIを使ったAIチャットウィジェット
 * @returns JSX.Element チャットUI
 */
export const AiChatWidget = () => {
  // チャット履歴を管理
  const [messages, setMessages] = useState([
    { role: "system", content: "なんでも質問してね！" },
  ]);
  // 入力欄の値
  const [input, setInput] = useState("");
  // ローディング状態
  const [isLoading, setIsLoading] = useState(false);
  // エラーメッセージ
  const [errorMessage, setErrorMessage] = useState("");

  /**
   * ユーザーの入力を送信し、AIの返答を取得してチャット履歴に追加する
   * @returns void
   */
  const handleSend = async () => {
    if (!input.trim()) return;
    setIsLoading(true);
    setErrorMessage("");
    // ユーザーの発言を履歴に追加
    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    try {
      // HuggingChat APIにPOSTリクエスト
      const res = await fetch(
        "https://huggingchat-api.vercel.app/api/v1/chat/completions",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: newMessages }),
        }
      );
      if (!res.ok) throw new Error("AIからの返答取得に失敗しちゃった…");
      const data = await res.json();
      // AIの返答を履歴に追加
      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content:
            data.choices?.[0]?.message?.content || "返答が取得できなかったよ…",
        },
      ]);
    } catch (e) {
      setErrorMessage("AIチャットの取得に失敗しちゃった…");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="my-8 max-w-md mx-auto bg-white rounded-lg shadow p-4">
      <h3 className="text-xl font-bold mb-2">AIチャットで質問してみよう！</h3>
      <div className="h-64 overflow-y-auto bg-gray-50 rounded p-2 mb-2">
        {messages
          .filter((m) => m.role !== "system")
          .map((msg, i) => (
            <div
              key={i}
              className={
                msg.role === "user" ? "text-right mb-1" : "text-left mb-1"
              }
            >
              <span
                className={
                  msg.role === "user"
                    ? "bg-pink-100 px-2 py-1 rounded"
                    : "bg-blue-100 px-2 py-1 rounded"
                }
              >
                {msg.content}
              </span>
            </div>
          ))}
        {isLoading && <div className="text-gray-400">AIが考え中…</div>}
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          className="flex-1 border rounded px-2 py-1"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="AIに質問してみてね！"
          disabled={isLoading}
          aria-label="AIチャット入力"
        />
        <button
          className="bg-pink-500 text-white px-4 py-1 rounded disabled:opacity-50"
          onClick={handleSend}
          disabled={isLoading || !input.trim()}
          aria-label="送信"
        >
          送信
        </button>
      </div>
      {errorMessage && <div className="text-red-500 mt-2">{errorMessage}</div>}
    </section>
  );
};
