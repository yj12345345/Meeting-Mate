<<<<<<< HEAD
# MeetingMate

모임을 더 쉽게, 더 똑똑하게 조율하는 AI 기반 일정/장소 추천 서비스입니다.

## 🧩 핵심 기능

- 모임 생성 (이름, 주제, 날짜/시간 후보 입력)
- 참여자 설문 링크 공유 (시간, 활동 선호, 거리 범위 입력)
- 공통 가능 시간 자동 정리
- 모임 성격 기반 AI 장소 추천 (GPT + 지도 API)
- 추천 장소 지도 기반 시각화
- 최종 일정/장소 공유 링크 생성

## 🛠 기술 스택

| 영역 | 기술 |
|------|------|
| Frontend | Next.js, TailwindCSS |
| Backend | Next.js API Routes or Express.js |
| DB | MongoDB Atlas |
| AI | OpenAI GPT API |
| Map API | Kakao Map SDK or Google Maps JS |
| Auth | Google/Kakao OAuth |
| DevOps | Vercel, GitHub Actions, Jira |

## 📂 폴더 구조 (예정)

```
meetingmate/
├── frontend/
│   └── ...
├── backend/
│   └── ...
├── shared/
│   └── ...
└── README.md
```

## 🚀 실행 방법 (로컬)

```bash
# frontend
cd frontend
npm install
npm run dev

# backend
cd backend
npm install
npm run dev
```

## 🔐 환경 변수 (.env 예시)

```env
MONGODB_URI=your_mongodb_atlas_uri
NEXT_PUBLIC_OPENAI_API_KEY=your_openai_key
NEXT_PUBLIC_KAKAO_MAP_API_KEY=your_kakao_key
```

## 🔗 프로젝트 관리

- Jira: (추후 링크 삽입)
- GitHub Issues: 기능별 이슈/버그 관리
- GitHub Projects or Jira Sprint 보드: 일정 관리

## ✅ 기획된 기능 로드맵 (MVP 기준)

- [ ] 모임 생성 페이지 구현
- [ ] 참여자 설문 입력 UI
- [ ] 공통 가능 시간 계산 알고리즘
- [ ] 활동/선호 입력 → GPT 기반 장소 추천
- [ ] 추천 장소 지도 시각화
- [ ] 소셜 로그인 연동 (카카오/네이버)
- [ ] 최종 결과 공유 링크

## ✨ 향후 확장 기능 (예정)

- 사용자 취향 기반 추천 정교화 (학습 기반)
- 친구 목록 / 모임 히스토리 저장
- 추천 장소 북마크 및 리뷰 기능
- 커플/소개팅/스터디 등 목적별 추천 시나리오 분기
- 실시간 채팅 및 약속 리마인더 기능

## 📝 라이선스

본 프로젝트는 비상업적 개인 프로젝트로 시작되며, 추후 라이선스 정책이 추가될 수 있습니다.
=======
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
>>>>>>> bb06efd (Initial commit from Create Next App)
