"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

interface PlaceDto {
  place: string;
  region: string;
  description: string;
}

export default function Rank() {
  const { mbti } = useParams();
  const [places, setPlaces] = useState<PlaceDto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!mbti) {
      setError("MBTI 정보가 없습니다.");
      setLoading(false);
      return;
    }

    fetch(`http://localhost:8080/api/mbti/rank/${mbti}`)
      .then((res) => {
        if (!res.ok) throw new Error("랭킹 정보를 불러오지 못했습니다.");
        return res.json();
      })
      .then((data) => {
        setPlaces(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [mbti]);

  if (loading)
    return <div className="text-yellow-600 text-center">랭킹 로딩 중...</div>;
  if (error)
    return <div className="text-red-500 text-center">에러: {error}</div>;

  return (
    <div>
      <h2 className="text-2xl font-bold text-yellow-600 mb-6 text-center font-[Cafe24Ssurround]">
        🏆 추천 여행지 랭킹
      </h2>
      <ul className="flex flex-col gap-4">
        {places.map((place, idx) => (
          <li key={idx}>
            <a
              href={`https://map.kakao.com/?q=${encodeURIComponent(
                place.place
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-yellow-100 p-4 rounded-xl shadow hover:bg-yellow-200 transition"
            >
              <div className="text-lg font-bold text-yellow-800 mb-1">
                {idx + 1}️⃣ {place.place} ({place.region})
              </div>
              <p className="text-sm text-gray-700">{place.description}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
