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

export default function ResultCard({
  mbti,
  title,
  description,
  recommendedPlaces,
  image,
}: ResultCardProps) {
  // ✅ 카카오 SDK 초기화
  useEffect(() => {
    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init("1765353c68ee9c4bbb64573013907e09"); // <-- 본인 키로 바꿔야 함!
    }
  }, []);

  // ✅ 카카오톡 공유
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

  // ✅ 링크 복사
  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("🔗 링크가 복사되었습니다!");
  };

  return (
    <div className="w-full bg-white p-6 rounded-xl shadow-md text-center">
      <h2 className="text-2xl font-bold mb-2">
        {mbti} - {title}
      </h2>
      <img
        src={image}
        alt={`${mbti} 이미지`}
        className="mx-auto w-48 h-48 object-contain mb-4"
      />
      <p className="text-gray-700 mb-4">{description}</p>

      <h3 className="font-semibold mb-2">추천 여행지</h3>
      <ul className="space-y-2 mb-6">
        {Array.isArray(recommendedPlaces) &&
          recommendedPlaces.map((place, idx) => (
            <li
              key={idx}
              className="flex items-center justify-center space-x-3"
            >
              <a
                href={`https://map.kakao.com/?q=${encodeURIComponent(place)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                • {place}
              </a>
              <img
                src={`/images/places/${place}.jpg`} // 예: public/images/places/전주 한옥마을.jpg
                alt={`${place} 이미지`}
                className="w-10 h-10 object-cover rounded-md"
              />
            </li>
          ))}
      </ul>

      {/* ✅ 공유 버튼 */}
      <div className="flex justify-center gap-4">
        <button
          onClick={copyLink}
          className="bg-gray-200 hover:bg-gray-300 text-sm px-4 py-2 rounded"
        >
          🔗 링크 복사
        </button>
        <button
          onClick={shareKakao}
          className="bg-yellow-300 hover:bg-yellow-400 text-sm px-4 py-2 rounded"
        >
          🟡 카카오 공유
        </button>
      </div>
    </div>
  );
}
