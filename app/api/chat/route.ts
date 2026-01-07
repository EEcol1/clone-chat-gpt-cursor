import { openai } from '@ai-sdk/openai';
import { convertToModelMessages, streamText, UIMessage } from 'ai';

// 스트리밍 응답의 최대 지속 시간 (30초)
export const maxDuration = 30;

// POST 요청을 처리하는 핸들러
export async function POST(req: Request) {
  try {
    // 요청 본문에서 UIMessage 배열 추출
    const { messages }: { messages: UIMessage[] } = await req.json();

    // AI SDK의 streamText 함수를 사용하여 OpenAI와 통신
    const result = streamText({
      model: openai('gpt-4o-mini'), // 모델 선택
      system: 'You are a helpful assistant.', // 시스템 프롬프트
      messages: await convertToModelMessages(messages), // UIMessage를 모델 메시지로 변환
      temperature: 0.7,
    });

    // UI 메시지 스트림 응답 반환 (AI SDK v6)
    return result.toUIMessageStreamResponse();
  } catch (error) {
    // 에러 핸들링
    console.error('Chat API Error:', error);
    
    return new Response(
      JSON.stringify({ 
        error: 'Internal Server Error',
        message: error instanceof Error ? error.message : 'Unknown error'
      }), 
      { 
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}

