import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

interface MessageItemProps {
  role: 'user' | 'assistant';
  content: string;
}

export function MessageItem({ role, content }: MessageItemProps) {
  const isUser = role === 'user';

  return (
    <div
      className={cn(
        'group w-full border-b border-black/10 text-gray-800 dark:border-gray-900/50 dark:text-gray-100',
        isUser ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-[#444654]'
      )}
    >
      <div className="m-auto flex gap-4 p-4 text-base md:max-w-2xl md:gap-6 md:py-6 lg:max-w-3xl lg:px-0 xl:max-w-4xl">
        <Avatar className="h-8 w-8 shrink-0 select-none">
          <AvatarFallback
            className={cn(
              'text-sm font-semibold',
              isUser
                ? 'bg-blue-500 text-white'
                : 'bg-green-600 text-white'
            )}
          >
            {isUser ? 'U' : 'AI'}
          </AvatarFallback>
        </Avatar>
        
        <div className="relative flex w-full flex-col">
          <div className="font-semibold select-none">
            {isUser ? 'You' : 'Assistant'}
          </div>
          <div className="prose mt-1 w-full break-words dark:prose-invert">
            <p className="whitespace-pre-wrap">{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}


