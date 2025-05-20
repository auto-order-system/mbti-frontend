# 🧭 MBTI 여행 성향 테스트

MBTI 성격유형 기반으로 간단한 질문을 통해 사용자의 여행 스타일을 분석하고, 맞춤형 여행지를 추천해주는 웹 애플리케이션입니다.  
이 프로젝트는 중간 발표용 프론트엔드 UI(`/dohee`)와 서버 연동 기능(`/hongeunjin`)을 모두 포함하여 개발되었습니다.

## 🛠️ 기술 스택

- **Frontend**: Next.js (App Router), TypeScript, Tailwind CSS
- **Backend**: Spring Boot, REST API
- **통신 방식**: fetch (CORS 허용 필요)

## 📁 프로젝트 구조 (상세 설명)

```
MBTI-TRABLE/
├── public/
│   └── images/                # 정적 이미지 파일 (결과 이미지, 아이콘 등)
│       ├── file.svg
│       ├── globe.svg
│       ├── next.svg
│       ├── travel.ico
│       ├── vercel.svg
│       └── window.svg

├── src/
│   ├── app/                   # Next.js App Router 디렉토리
│   │   ├── dohee/             # 도희 작업 전용 라우트 (중간 발표용 UI)
│   │   │   ├── quiz/          # MBTI 퀴즈 시작 페이지 (/dohee/quiz)
│   │   │   │   └── page.tsx
│   │   │   ├── result/        # 결과 페이지 (/dohee/result)
│   │   │   │   ├── page.tsx
│   │   │   │   └── loading.tsx
│   │   │   ├── globals.css    # dohee 전용 스타일
│   │   │   ├── layout.tsx     # dohee 레이아웃 구성
│   │   │   └── page.tsx       # /dohee 메인 진입점

│   │   ├── hongeunjin/        # 은진 작업용 - 서버 연동 프론트
│   │   │   └── [mbti]/        # MBTI 결과 라우팅 (/hongeunjin/INTP 등)
│   │   │       └── page.tsx

│   │   └── test/              # 백엔드 연동 테스트 페이지
│   │       ├── page.tsx
│   │       ├── layout.tsx
│   │       ├── globals.css
│   │       └── favicon.ico

│   ├── components/            # 공통 UI 컴포넌트
│   │   └── ui/
│   │       ├── QuestionCard.tsx
│   │       ├── ResultCard.tsx
│   │       └── travel-images.tsx

│   ├── data/                  # (예정) 정적 데이터 폴더
│   └── lib/                   # (예정) 유틸 함수, API 등
│
├── hongeunjin-app/           # 은진이의 원본 프론트 코드 모듈

├── README.md                 # 프로젝트 소개 문서
├── package.json              # 프로젝트 의존성 및 실행 스크립트
├── tsconfig.json             # TypeScript 설정
├── postcss.config.mjs        # PostCSS 설정 (Tailwind용)
└── next.config.ts            # Next.js 설정
```

## 🚀 실행 방법

### 1. 백엔드(Spring Boot) 실행

```bash
cd mbti-backend
./gradlew bootRun
```

- 기본 포트: `http://localhost:8080`
- API:
  - `GET /api/questions` → 질문 목록
  - `GET /api/result/{mbti}` → MBTI 결과 정보
- DB 연결이 필요 없다면 `application.properties`에서 DB 설정 주석 처리

### 2. 프론트엔드 실행 (Next.js)

```bash
npm install
npm run dev
```

- 실행 주소: `http://localhost:3000`
- `/dohee` → 중간 발표용 프론트
- `/dohee/quiz` → 퀴즈 시작
- `/dohee/result` → 결과 페이지
- `/hongeunjin` → 서버 연동 버전 프론트

## ✨ 기능 설명

| 페이지 경로         | 설명                                                   |
|----------------------|--------------------------------------------------------|
| `/dohee`             | 중간 발표용 메인 페이지                                 |
| `/dohee/quiz`        | 프론트 단독 퀴즈 페이지                                 |
| `/dohee/result`      | 결과 정보 프론트 표시                                   |
| `/hongeunjin`        | API 연동을 통한 결과 추천 페이지                        |

## 📌 주의사항

- 백엔드와 프론트는 로컬에서 각각 `localhost:8080`, `localhost:3000`에서 실행됩니다.
- CORS 허용 필요:

```java
@CrossOrigin(origins = "http://localhost:3000")
```

- 이미지 경로는 `/public/images/` 기준으로 구성되어야 정상 작동합니다.

## 👨‍💻 개발

| 역할             | 이름           |
|------------------|----------------|
| 프론트 리드      | 김도희         |
| 프론트 기능 연동 | 홍은진         |
| 백엔드 API       | (팀원 이름)    |
| DB/관리           | (팀원 이름)    |

## ✅ 향후 추가 예정

- 사용자 이름 저장 기능
- 결과 공유 링크 생성
- 관리자 페이지 (문항 추가/수정)

## 📄 라이선스

MIT License
