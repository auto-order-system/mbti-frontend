import type { MbtiInfo } from "./types";

export const istj: MbtiInfo = {
  title: "완벽주의 여행자",
  description: "체계적이고 계획적인 여행을 선호하는 당신에게 추천합니다.",
  destinations: [
    {
      name: "스위스",
      reason: "정확한 시간 관리와 깔끔한 환경",
      image: "/images/destinations/switzerland.jpg",
    },
    {
      name: "일본 교토",
      reason: "전통과 질서가 잘 보존된 도시",
      image: "/images/destinations/kyoto.jpg",
    },
    {
      name: "독일",
      reason: "체계적인 관광 인프라와 역사적 명소",
      image: "/images/destinations/germany.jpg",
    },
  ],
};
