# 🧭 MBTI 여행 성향 테스트

MBTI 성격유형 기반으로 간단한 질문을 통해 사용자의 여행 스타일을 분석하고, 맞춤형 여행지를 추천해주는 웹 애플리케이션입니다.

---

## 🛠️ 기술 스택

- **Frontend**: Next.js (App Router), TypeScript, Tailwind CSS
- **Backend**: Spring Boot, REST API
- **통신 방식**: fetch (CORS 허용 필요)

---

## 📁 프로젝트 구조

```
MBTI/
├── app/
│   ├── page.tsx                # 홈 페이지 (/)
│   ├── layout.tsx              # 전체 레이아웃
│   ├── test/page.tsx           # 질문 페이지 (/test)
│   └── result/[mbti]/page.tsx  # 결과 페이지 (/result/INTP 등)
├── components/
│   ├── QuestionCard.tsx        # 질문 카드 UI
│   └── ResultCard.tsx          # 결과 카드 UI
├── public/
│   └── images/MBTI.png         # MBTI 결과 이미지들
├── styles/
│   └── globals.css             # 전역 스타일
```

---

## 🚀 실행 방법

### 1. 백엔드(Spring Boot) 실행

```bash
cd mbti-backend
./gradlew bootRun
```

✅ 기본 포트: `localhost:8080`
✅ API:

- `GET /api/questions` → 질문 목록
- `GET /api/result/{mbti}` → 결과 정보

> ❗ DB 연결이 필요 없다면 `application.properties`에서 DB 설정 주석 처리

### 2. 프론트엔드 실행 (Next.js)

```bash
cd MBTI
npm install
npm run dev
```

✅ 실행 주소: `http://localhost:3000`

---

## ✨ 기능 설명

| 페이지           | 설명                                                   |
| ---------------- | ------------------------------------------------------ |
| `/`              | 소개 및 "테스트 시작하기" 버튼                         |
| `/test`          | 12개 문항 기반 질문 진행, 선택값에 따라 MBTI 자동 계산 |
| `/result/[mbti]` | 백엔드에서 해당 MBTI 결과 받아와 출력                  |

---

## 📌 주의사항

- 백엔드와 프론트는 로컬에서 각각 `localhost:8080`, `localhost:3000`에서 동작함
- CORS 정책 허용 필요:

```java
@CrossOrigin(origins = "http://localhost:3000")
```

- 이미지 경로는 `/public/images/` 기준으로 설정되어 있어야 함

---

## 📷 미리보기

![screenshot](./public/images/estj.png)

---

## 👨‍💻 개발

| 역할             | 이름           |
| ---------------- | -------------- |
| 프론트 리드      | (예: 홍길동)   |
| 프론트 UI/콘텐츠 | (너 이름)      |
| 백엔드 API       | (백엔드 팀원1) |
| 백엔드 JSON 관리 | (백엔드 팀원2) |

---

## ✅ 향후 추가 예정

- 사용자 이름 저장 기능
- 결과 공유 링크 생성
- 관리자 페이지 (문항 추가/수정)

---

## 📄 라이선스

MIT License
