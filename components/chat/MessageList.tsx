import { useEffect, useRef } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MessageItem } from './MessageItem';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  parts: Array<{ type: string; text?: string }>;
}

interface MessageListProps {
  messages: Message[];
  isLoading?: boolean;
}

export function MessageList({ messages, isLoading }: MessageListProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  // 새 메시지가 추가되면 자동으로 스크롤
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  if (messages.length === 0) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="text-center">
          <div className="mb-4 text-4xl">💬</div>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
            ChatGPT Clone
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            무엇이든 물어보세요!
          </p>
        </div>
      </div>
    );
  }

  return (
    <ScrollArea className="h-full">
      <div ref={scrollRef} className="flex flex-col">
        {messages.map((message) => {
          const content = message.parts
            .filter((part) => part.type === 'text' && part.text)
            .map((part) => part.text)
            .join('');

          return (
            <MessageItem
              key={message.id}
              role={message.role}
              content={content}
            />
          );
        })}
        
        {isLoading && (
          <div className="w-full border-b border-black/10 bg-gray-50 dark:border-gray-900/50 dark:bg-[#444654]">
            <div className="m-auto flex gap-4 p-4 text-base md:max-w-2xl md:gap-6 md:py-6 lg:max-w-3xl lg:px-0 xl:max-w-4xl">
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 animate-bounce rounded-full bg-gray-500 [animation-delay:-0.3s]"></div>
                <div className="h-2 w-2 animate-bounce rounded-full bg-gray-500 [animation-delay:-0.15s]"></div>
                <div className="h-2 w-2 animate-bounce rounded-full bg-gray-500"></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </ScrollArea>
  );
}


