// MBTI 질문 데이터
export type Option = {
  value: string;
  text: string;
};

export type Question = {
  id: number;
  question: string;
  options: Option[];
};

export const questions: Question[] = [
  {
    id: 1,
    question: "여행을 떠날 때 계획은",
    options: [
      { value: "J", text: "내가 짜는 것이 곧 여행코스" },
      { value: "P", text: "계획은 필수" },
    ],
  },
  {
    id: 2,
    question: "여행지에서 나는",
    options: [
      { value: "E", text: "새로운 친구를 사귀는 편이다" },
      { value: "I", text: "혼자 조용히 다니는 편이다" },
    ],
  },
  {
    id: 3,
    question: "여행 중 갑자기 일정이 바뀐다면",
    options: [
      { value: "J", text: "계획대로 진행하지 못해 아쉽다" },
      { value: "P", text: "새로운 일정도 재밌을 것 같다" },
    ],
  },
  {
    id: 4,
    question: "여행지에서 식당을 고를 때",
    options: [
      { value: "S", text: "유명하고 리뷰가 좋은 식당을 찾는다" },
      { value: "N", text: "분위기가 좋아 보이는 식당에 들어간다" },
    ],
  },
  {
    id: 5,
    question: "여행 중 사진을",
    options: [
      { value: "S", text: "순간을 기록하기 위해 많이 찍는다" },
      { value: "N", text: "기억에 담기 위해 적게 찍는다" },
    ],
  },
  {
    id: 6,
    question: "여행 경비를",
    options: [
      { value: "T", text: "미리 계산해서 예산을 정해둔다" },
      { value: "F", text: "쓰고 싶을 때 쓰고 나중에 정산한다" },
    ],
  },
  {
    id: 7,
    question: "여행지에서 길을 잃었을 때",
    options: [
      { value: "T", text: "지도를 보고 논리적으로 찾아본다" },
      { value: "F", text: "주변 사람들에게 도움을 요청한다" },
    ],
  },
  {
    id: 8,
    question: "여행 후 기념품을",
    options: [
      { value: "T", text: "실용적인 물건으로 구매한다" },
      { value: "F", text: "추억이 담긴 물건으로 구매한다" },
    ],
  },
  {
    id: 9,
    question: "여행 숙소는",
    options: [
      { value: "E", text: "사람들과 교류할 수 있는 게스트하우스" },
      { value: "I", text: "편안하게 쉴 수 있는 호텔이나 에어비앤비" },
    ],
  },
  {
    id: 10,
    question: "여행 중 가장 중요한 것은",
    options: [
      { value: "S", text: "계획한 명소를 모두 방문하는 것" },
      { value: "N", text: "현지의 분위기를 느끼는 것" },
    ],
  },
  {
    id: 11,
    question: "여행 일정을 짤 때",
    options: [
      { value: "J", text: "시간 단위로 세세하게 계획한다" },
      { value: "P", text: "대략적인 방문지만 정해둔다" },
    ],
  },
  {
    id: 12,
    question: "여행지에서 문제가 생겼을 때",
    options: [
      { value: "T", text: "객관적으로 상황을 분석하고 해결책을 찾는다" },
      { value: "F", text: "동행자의 감정을 먼저 살핀다" },
    ],
  },
];
