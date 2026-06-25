"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { ChatIcon, MoodIcon, SendIcon } from "@/components/icons";
import {
  CONVERSATION_STARTERS,
  MOOD_OPTIONS,
  SAMPLE_MESSAGES,
  type MoodId,
} from "@/lib/constants";
import { ChatMessage, createMessageId, sendChatMessage } from "@/lib/api";

export function ChatArea() {
  const [messages, setMessages] = useState<ChatMessage[]>(() =>
    SAMPLE_MESSAGES.map((message) => ({
      id: createMessageId(),
      ...message,
    })),
  );
  const [history, setHistory] = useState<Pick<ChatMessage, "role" | "content">[]>([]);
  const [selectedMood, setSelectedMood] = useState<MoodId | null>(null);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasSentMessage, setHasSentMessage] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (!textarea) {
      return;
    }

    textarea.style.height = "auto";
    textarea.style.height = `${Math.min(textarea.scrollHeight, 140)}px`;
  }, [input]);

  async function submitMessage(messageText: string) {
    const trimmed = messageText.trim();
    if (!trimmed || isLoading) {
      return;
    }

    const userMessage: ChatMessage = {
      id: createMessageId(),
      role: "user",
      content: trimmed,
    };

    const updatedHistory: Pick<ChatMessage, "role" | "content">[] = [
      ...history,
      { role: "user", content: trimmed },
    ];

    setMessages((current) => [...current, userMessage]);
    setInput("");
    setError(null);
    setIsLoading(true);
    setHasSentMessage(true);

    try {
      const reply = await sendChatMessage(updatedHistory);
      setHistory([...updatedHistory, { role: "assistant", content: reply }]);
      setMessages((current) => [
        ...current,
        {
          id: createMessageId(),
          role: "assistant",
          content: reply,
        },
      ]);
    } catch (submitError) {
      const message =
        submitError instanceof Error
          ? submitError.message
          : "Your coach is unavailable right now. Please try again.";
      setError(message);
    } finally {
      setIsLoading(false);
      textareaRef.current?.focus();
    }
  }

  function handleMoodSelect(moodId: MoodId) {
    const mood = MOOD_OPTIONS.find((option) => option.id === moodId);
    if (!mood || isLoading) {
      return;
    }

    setSelectedMood(moodId);
    void submitMessage(mood.prompt);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void submitMessage(input);
  }

  return (
    <div className="flex min-h-0 flex-1 flex-col gap-4">
      <header className="rounded-[28px] border border-[var(--border)] bg-[var(--card)] px-5 py-4 shadow-[var(--shadow-soft)] sm:px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-[20px] bg-[var(--secondary-card)] text-[var(--primary)]">
            <ChatIcon className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-[var(--text-main)] sm:text-xl">
              Tiny Therapist
            </h1>
            <p className="text-sm font-medium text-[var(--primary)]">Big Boundaries</p>
          </div>
        </div>
        <p className="mt-3 text-xs leading-5 text-[var(--text-muted)]">
          Not a replacement for therapy.
        </p>
      </header>

      <section className="flex min-h-[520px] flex-1 flex-col overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--card)] shadow-[var(--shadow-soft)]">
        <div className="border-b border-[var(--border)] bg-[var(--secondary-card)] px-4 py-4 sm:px-6">
          <div className="mb-3 flex items-center gap-2 text-[var(--text-main)]">
            <MoodIcon className="h-5 w-5 text-[var(--primary)]" />
            <h2 className="text-sm font-semibold sm:text-base">Mood check-in</h2>
          </div>
          <p className="mb-3 text-xs text-[var(--text-muted)] sm:text-sm">
            How are you arriving today?
          </p>
          <div className="flex flex-wrap gap-2">
            {MOOD_OPTIONS.map((mood) => {
              const Icon = mood.icon;
              const isSelected = selectedMood === mood.id;

              return (
                <button
                  key={mood.id}
                  type="button"
                  aria-pressed={isSelected}
                  disabled={isLoading}
                  onClick={() => handleMoodSelect(mood.id)}
                  className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)] disabled:cursor-not-allowed disabled:opacity-60 ${
                    isSelected
                      ? "border-[var(--primary)] bg-[var(--primary)] text-white"
                      : "border-[var(--border)] bg-white text-[var(--text-main)] hover:border-[var(--primary)]"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {mood.label}
                </button>
              );
            })}
          </div>
        </div>

        <div
          aria-label="Chat messages"
          className="flex flex-1 flex-col gap-4 overflow-y-auto px-4 py-5 sm:px-6"
        >
          {messages.map((message) => (
            <article
              key={message.id}
              className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[88%] rounded-[24px] px-4 py-3 text-sm leading-7 whitespace-pre-wrap sm:max-w-[80%] sm:text-[15px] ${
                  message.role === "user"
                    ? "bg-[var(--primary)] text-white shadow-[var(--shadow-soft)]"
                    : "border border-[var(--border)] bg-white text-[var(--text-main)] shadow-[var(--shadow-soft)]"
                }`}
              >
                {message.content}
              </div>
            </article>
          ))}

          {isLoading && (
            <div className="flex justify-start" aria-live="polite" aria-label="Coach is responding">
              <div className="flex items-center gap-2 rounded-[24px] border border-[var(--border)] bg-white px-4 py-3 shadow-[var(--shadow-soft)]">
                <span className="typing-dot h-2 w-2 rounded-full bg-[var(--primary)]" />
                <span className="typing-dot h-2 w-2 rounded-full bg-[var(--primary)]" />
                <span className="typing-dot h-2 w-2 rounded-full bg-[var(--primary)]" />
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {!hasSentMessage && !isLoading && (
          <div className="border-t border-[var(--border)] bg-[var(--secondary-card)] px-4 py-4 sm:px-6">
            <p className="mb-3 text-xs font-medium text-[var(--text-muted)] sm:text-sm">
              Conversation starters
            </p>
            <div className="flex flex-wrap gap-2">
              {CONVERSATION_STARTERS.map((starter) => {
                const Icon = starter.icon;

                return (
                  <button
                    key={starter.label}
                    type="button"
                    onClick={() => void submitMessage(starter.prompt)}
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white px-3 py-2 text-left text-sm text-[var(--text-main)] transition hover:border-[var(--primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
                  >
                    <Icon className="h-4 w-4 text-[var(--primary)]" />
                    {starter.label}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {error && (
          <p
            role="alert"
            className="mx-4 mb-2 rounded-[20px] border border-[#F3C7C7] bg-[#FFF5F5] px-4 py-3 text-sm text-[#9B4444] sm:mx-6"
          >
            {error}
          </p>
        )}

        <form
          onSubmit={handleSubmit}
          className="border-t border-[var(--border)] bg-[var(--secondary-card)] px-4 py-4 sm:px-6"
        >
          <label htmlFor="chat-input" className="sr-only">
            Share what is on your mind
          </label>
          <div className="flex items-end gap-3">
            <textarea
              id="chat-input"
              ref={textareaRef}
              rows={1}
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter" && !event.shiftKey) {
                  event.preventDefault();
                  void submitMessage(input);
                }
              }}
              placeholder="Share what's on your mind…"
              disabled={isLoading}
              className="min-h-[52px] flex-1 resize-none rounded-[24px] border border-[var(--border)] bg-white px-4 py-3 text-sm text-[var(--text-main)] outline-none transition placeholder:text-[var(--text-muted)] focus:border-[var(--primary)] focus:shadow-[0_0_0_3px_rgba(58,159,217,0.15)] disabled:cursor-not-allowed disabled:opacity-70 sm:text-[15px]"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              aria-label="Send message"
              className="inline-flex h-[52px] min-w-[52px] items-center justify-center rounded-[24px] bg-[var(--primary)] px-4 text-white transition hover:bg-[#2F8FC8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)] disabled:cursor-not-allowed disabled:opacity-60"
            >
              <SendIcon className="h-5 w-5" />
              <span className="sr-only sm:not-sr-only sm:ml-2 sm:inline sm:text-sm sm:font-medium">
                Send
              </span>
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
