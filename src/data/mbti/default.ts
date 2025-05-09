import type { MbtiInfo } from "./types";

export const defaultMbtiInfo: MbtiInfo = {
  title: "여행 애호가",
  description: "당신의 성격에 맞는 여행지를 추천합니다.",
  destinations: [
    {
      name: "태국",
      reason: "다양한 경험과 문화를 즐길 수 있는 곳",
      image: "/images/destinations/thailand.jpg",
    },
    {
      name: "이탈리아",
      reason: "역사, 예술, 음식의 완벽한 조화",
      image: "/images/destinations/italy.jpg",
    },
    {
      name: "호주",
      reason: "자연과 도시가 공존하는 다양한 경험",
      image: "/images/destinations/australia.jpg",
    },
  ],
};

export default defaultMbtiInfo;
