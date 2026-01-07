#


## 프로젝트 목표
Chat-GPT와 유사한 채팅 AI Application 구현하는 것입니다.


## 사용하는 기술 스택

- UI라이브러리
    -TailwindCSS : https://tailwindcss.com/
    -shadcn/ui : https://ui.shadcn.com/
- AI SDK
    -AI SDK : https://vercel.com/docs/ai-sdk

## 구현 단계

### Step1. 프로젝트 초기 설치 및 필요한 라이브러리 셋팅
**목표:** Next.js 프로젝트 환경을 구축하고 필요한 UI 라이브러리와 AI SDK를 설치한다.

**작업:**
- Next.js 프로젝트 생성 (App Router 사용)
- TailwindCSS 설치 및 설정
- shadcn/ui 컴포넌트 라이브러리 설치
- Vercel AI SDK 설치
- 환경 변수 설정 (.env.local 파일 생성)

### Step2. App Router의 API Route 핸들러 구현
**목표:** AI 모델과 통신하는 백엔드 API 엔드포인트를 생성한다.

**작업:**
- `/app/api/chat/route.ts` 파일 생성
- AI SDK를 사용하여 POST 요청 핸들러 구현
- OpenAI API 연동 설정
- 스트리밍 응답 처리 로직 구현
- 에러 핸들링 추가

### Step3. 프론트엔드와 API 연동
**목표:** 사용자 입력을 받아 API와 통신하고 AI 응답을 화면에 표시한다.

**작업:**
- AI SDK 최신 버전 : https://ai-sdk.dev/docs/ai-sdk-ui/chatbot
- `useChat` 훅을 사용하여 채팅 기능 구현
- 메시지 상태 관리 (messages, input, handleSubmit)
- API 엔드포인트와 연결
- 실시간 스트리밍 응답 처리
- 로딩 상태 표시

### Step4. UI 컴포넌트 구현 ✅
**목표:** Chat-GPT와 유사한 사용자 인터페이스를 구현한다.

**작업:**
- ✅ shadcn/ui 초기화 및 컴포넌트 설치 (button, input, card, scroll-area, avatar)
- ✅ MessageItem 컴포넌트 생성 - 개별 메시지 표시
- ✅ MessageList 컴포넌트 생성 - 메시지 목록 및 자동 스크롤
- ✅ ChatInput 컴포넌트 생성 - 입력 폼 및 전송/중단 버튼
- ✅ 사용자/AI 메시지 구분하여 스타일링 (아바타, 배경색)
- ✅ 반응형 레이아웃 적용
- ✅ ChatGPT 스타일의 UI 디자인 적용

### Step5. Vercel 배포
**목표:** 완성된 애플리케이션을 Vercel 플랫폼에 배포한다.

**작업:**
- GitHub 저장소에 프로젝트 푸시
- Vercel 계정 연결
- 환경 변수 설정 (OPENAI_API_KEY 등)
- 배포 실행 및 확인
- 프로덕션 URL 테스트
