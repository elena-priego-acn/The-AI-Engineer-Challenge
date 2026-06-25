import { ChatArea } from "@/components/ChatArea";

export function AppShell() {
  return (
    <div className="min-h-screen bg-[var(--page-bg)] px-4 py-6 text-[var(--text-main)] sm:px-6">
      <div className="mx-auto flex min-h-[calc(100vh-3rem)] max-w-3xl flex-col">
        <ChatArea />
      </div>
    </div>
  );
}
