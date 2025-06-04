"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

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
        description: description,
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
      className={`w-full ${backgroundClass} p-8 rounded-2xl shadow-xl transition-all duration-300 max-w-2xl mx-auto border border-gray-300`}
    >
      <h2 className="text-3xl font-black text-gray-800 mb-3">
        {mbti} - {title}
      </h2>
      <img
        src={image}
        alt={`${mbti} 이미지`}
        className="mx-auto w-48 h-48 rounded-full object-cover mb-5 shadow-lg hover:scale-105 transition-transform"
      />
      <p className="text-gray-700 mb-6 text-base leading-relaxed">
        {description}
      </p>

      <h3 className="text-xl font-semibold mb-3 text-slate-800">
        🗺️ 추천 여행지
      </h3>
      <div className="grid grid-cols-2 gap-4 mb-8">
        {recommendedPlaces.map((place, idx) => (
          <a
            key={idx}
            href={`https://map.kakao.com/?q=${encodeURIComponent(place)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/70 p-3 rounded-lg shadow hover:shadow-md hover:scale-[1.03] transition text-blue-800 text-sm font-medium text-center"
          >
            🧭 {place}
          </a>
        ))}
      </div>

      {/* ✅ 공유 + 다시 테스트 버튼 */}
      <div className="flex justify-center gap-4">
        <button
          onClick={copyLink}
          className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-full flex items-center gap-2 text-sm shadow"
        >
          🔗 링크 복사
        </button>
        <button
          onClick={shareKakao}
          className="bg-yellow-300 hover:bg-yellow-400 px-4 py-2 rounded-full flex items-center gap-2 text-sm shadow"
        >
          🟡 카카오 공유
        </button>
      </div>

      {/* ✅ 다시 테스트하기 버튼 - 아래 줄로 분리 */}
      <div className="mt-4 flex justify-center">
        <a
          href="/"
          className="bg-blue-100 hover:bg-blue-200 px-4 py-2 rounded-full text-sm text-blue-800 font-medium shadow"
        >
          🔄 다시 테스트하기
        </a>
      </div>
    </div>
  );
}
