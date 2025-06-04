"use client";

import { useEffect } from "react";

type ResultCardProps = {
  mbti: string;
  title: string;
  description: string;
  recommendedPlaces: string[];
  image: string;
};

declare global {
  interface Window {
    Kakao: any;
  }
}

const mbtiColorMap: Record<string, string> = {
  ENFP: "bg-orange-100",
  INTJ: "bg-purple-100",
  INFP: "bg-pink-100",
  ESTJ: "bg-green-100",
  ENTJ: "bg-red-100",
  ENFJ: "bg-yellow-100",
  ISTJ: "bg-blue-100",
  ISFJ: "bg-emerald-100",
  INFJ: "bg-indigo-100",
  INTP: "bg-teal-100",
  ISTP: "bg-cyan-100",
  ISFP: "bg-rose-100",
  ESTP: "bg-lime-100",
  ESFP: "bg-fuchsia-100",
  ESFJ: "bg-violet-100",
  ENTP: "bg-amber-100",
};

export default function ResultCard({
  mbti,
  title,
  description,
  recommendedPlaces,
  image,
}: ResultCardProps) {
  useEffect(() => {
    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init("1765353c68ee9c4bbb64573013907e09");
    }
  }, []);

  const shareKakao = () => {
    window.Kakao.Link.sendDefault({
      objectType: "feed",
      content: {
        title: `${mbti} - ${title}`,
        description,
        imageUrl: `${window.location.origin}${image}`,
        link: {
          webUrl: window.location.href,
          mobileWebUrl: window.location.href,
        },
      },
      buttons: [
        {
          title: "테스트 하러 가기",
          link: {
            webUrl: window.location.origin,
            mobileWebUrl: window.location.origin,
          },
        },
      ],
    });
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("🔗 링크가 복사되었습니다!");
  };

  const backgroundClass = mbtiColorMap[mbti] || "bg-white";

  return (
    <div
      className={`w-full ${backgroundClass} p-10 rounded-3xl shadow-xl transition-all duration-300 max-w-3xl mx-auto border border-gray-200 space-y-6`}
    >
      {/* MBTI 라벨 */}
      <div className="text-center">
        <p className="text-yellow-600 text-sm font-semibold mb-1">여행자 유형</p>
        <h2 className="text-4xl font-bold text-yellow-700 font-[Cafe24Ssurround]">
          ✈️ {mbti} 유형의 여행자
        </h2>
      </div>

      {/* 이미지 영역 */}
      <div className="relative w-full flex justify-center items-center my-6">
        <div className="absolute w-52 h-52 rounded-full bg-white/60 blur-2xl animate-pulse"></div>
        <img
          src={image}
          alt={`${mbti} 이미지`}
          className="relative z-10 w-48 h-48 object-cover rounded-2xl shadow-lg hover:rotate-1 transition-transform"
        />
      </div>

      {/* 설명 */}
      <p className="text-gray-800 text-base leading-relaxed text-center px-4">
        {description}
      </p>

      {/* 추천지 */}
      <div>
        <h3 className="text-lg font-bold text-slate-800 mb-3 text-center">📍 추천 여행지</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {recommendedPlaces.map((place, idx) => (
            <a
              key={idx}
              href={`https://map.kakao.com/?q=${encodeURIComponent(place)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white px-4 py-2 rounded-full shadow text-sm text-blue-700 hover:bg-blue-100 transition"
            >
              🧭 {place}
            </a>
          ))}
        </div>
      </div>

      {/* 공유 버튼 */}
      <div className="flex flex-col md:flex-row justify-center gap-4 pt-4">
        <button
          onClick={copyLink}
          className="bg-gray-100 hover:bg-gray-200 px-5 py-2 rounded-full text-sm shadow text-gray-700"
        >
          🔗 링크 복사
        </button>
        <button
          onClick={shareKakao}
          className="bg-yellow-400 hover:bg-yellow-500 px-5 py-2 rounded-full text-sm shadow text-yellow-900 font-semibold"
        >
          🟡 카카오 공유
        </button>
        <a
          href="/"
          className="border border-blue-200 text-blue-700 hover:bg-blue-50 px-5 py-2 rounded-full text-sm font-medium shadow"
        >
          🔄 다시 테스트하기
        </a>
      </div>
    </div>
  );
}
