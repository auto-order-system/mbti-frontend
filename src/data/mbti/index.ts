import type { MbtiDestinations } from "./types";
import { istj } from "./istj";
import { isfj } from "./isfj";
import { infj } from "./infj";
import { intj } from "./intj";
import { istp } from "./istp";
import { isfp } from "./isfp";
import { infp } from "./infp";
import { intp } from "./intp";
import { estp } from "./estp";
import { esfp } from "./esfp";
import { enfp } from "./enfp";
import { entp } from "./entp";
import { estj } from "./estj";
import { esfj } from "./esfj";
import { enfj } from "./enfj";
import { entj } from "./entj";
import { defaultMbtiInfo } from "./default";

// 모든 MBTI 유형 데이터를 하나의 객체로 통합
export const mbtiDestinations: MbtiDestinations = {
  ISTJ: istj,
  ISFJ: isfj,
  INFJ: infj,
  INTJ: intj,
  ISTP: istp,
  ISFP: isfp,
  INFP: infp,
  INTP: intp,
  ESTP: estp,
  ESFP: esfp,
  ENFP: enfp,
  ENTP: entp,
  ESTJ: estj,
  ESFJ: esfj,
  ENFJ: enfj,
  ENTJ: entj,
};

// 기본 MBTI 정보 내보내기
export { defaultMbtiInfo };
