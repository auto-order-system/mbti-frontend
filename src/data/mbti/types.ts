// MBTI 데이터 타입 정의
export type Destination = {
  name: string;
  reason: string;
  image: string;
};

export type MbtiInfo = {
  title: string;
  description: string;
  destinations: Destination[];
};

export type MbtiDestinations = {
  [key: string]: MbtiInfo;
};
