'use client';

import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport } from 'ai';
import { MessageList } from '@/components/chat/MessageList';
import { ChatInput } from '@/components/chat/ChatInput';

export default function Home() {
  // AI SDK v6의 useChat 훅 사용
  const { messages, sendMessage, status, stop } = useChat({
    transport: new DefaultChatTransport({
      api: '/api/chat',
    }),
  });

  const handleSend = (text: string) => {
    sendMessage({ text });
  };

  const isLoading = status === 'submitted' || status === 'streaming';
  const isReady = status === 'ready';

  return (
    <div className="flex h-screen flex-col bg-white dark:bg-gray-900">
      {/* 헤더 */}
      <header className="sticky top-0 z-10 border-b bg-white px-4 py-3 dark:border-gray-700 dark:bg-gray-800">
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
              ChatGPT Clone
            </h1>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Powered by AI SDK v6
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-xs text-gray-500 dark:text-gray-400">
              Status:{' '}
              <span
                className={
                  isReady
                    ? 'text-green-600 dark:text-green-400'
                    : 'text-yellow-600 dark:text-yellow-400'
                }
              >
                {status}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* 메시지 목록 */}
      <main className="flex-1 overflow-hidden">
        <MessageList messages={messages as any} isLoading={isLoading} />
      </main>

      {/* 입력 영역 */}
      <ChatInput
        onSend={handleSend}
        onStop={stop}
        disabled={!isReady}
        isStreaming={status === 'streaming'}
      />
    </div>
  );
}
