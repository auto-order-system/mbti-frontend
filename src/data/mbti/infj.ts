import type { MbtiInfo } from "./types";

export const infj: MbtiInfo = {
  title: "이상적인 여행자",
  description: "깊이 있는 경험과 의미를 찾는 당신에게 추천합니다.",
  destinations: [
    {
      name: "그리스",
      reason: "깊은 역사와 철학적 의미가 있는 장소",
      image: "/images/destinations/greece.jpg",
    },
    {
      name: "아이슬란드",
      reason: "고요한 자연과 내면의 성찰을 할 수 있는 곳",
      image: "/images/destinations/iceland.jpg",
    },
    {
      name: "부탄",
      reason: "행복을 중시하는 문화와 평화로운 분위기",
      image: "/images/destinations/bhutan.jpg",
    },
  ],
};
