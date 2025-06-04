"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import ResultCard from "@/components/ResultCard";
import Rank from "./Rank";

interface Result {
  title: string;
  description: string;
  recommendedPlaces: string[];
  image: string;
}

export default function ResultPage() {
  const { mbti } = useParams();
  const [result, setResult] = useState<Result | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const stored = localStorage.getItem("mbti_result");
    if (stored) {
      const parsed = JSON.parse(stored);
      setResult(parsed);
      setLoading(false);
    } else {
      fetch("http://localhost:8080/api/mbti/questions")
        .then((res) => res.json())
        .then((data) => {
          setResult(data);
          setLoading(false);
        })
        .catch(() => {
          setResult(null);
          setLoading(false);
        });
    }
  }, [mbti]);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-yellow-50 text-xl">
        결과를 불러오는 중입니다...
      </div>
    );

  if (!result)
    return (
      <div className="min-h-screen flex items-center justify-center bg-yellow-50 text-xl">
        결과가 없습니다. 다시 시도해 주세요.
      </div>
    );

  return (
    <div className="min-h-screen bg-yellow-50 flex flex-col items-center px-6 py-12 text-center">
      <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-500 drop-shadow mb-4 animate-slidein font-[Cafe24Ssurround]">
        {mbti?.toString().toUpperCase()} 여행자 타입
      </h1>
      <p className="text-gray-700 text-xl md:text-2xl mb-10 animate-slidein">
        {result.title}
      </p>

      <div className="w-full max-w-4xl animate-slidein">
        <ResultCard
          mbti={mbti as string}
          title={result.title}
          description={result.description}
          recommendedPlaces={result.recommendedPlaces}
          image={result.image}
        />
      </div>

      <div className="mt-16 w-full max-w-4xl">
        <Rank />
      </div>
    </div>
  );
}
