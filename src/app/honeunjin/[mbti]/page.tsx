"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import ResultCard from "@/components/ResultCard";

interface Result {
  title: string;
  description: string;
  recommendedPlaces: string[];
  image: string;
}

export default function ResultPage() {
  const { mbti } = useParams();
  const [result, setResult] = useState<Result | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("mbti_result");
    if (stored) {
      const parsed = JSON.parse(stored);
      setResult(parsed);
    } else {
      fetch("http://localhost:8080/api/mbti/questions") // 리디렉션 방지용
        .then(() => setResult(null))
        .catch(() => setResult(null));
    }
  }, [mbti]);

  if (!result)
    return <div className="text-center py-10">결과를 불러오는 중...</div>;

  return (
    <div className="max-w-xl mx-auto p-6">
      <ResultCard
        mbti={mbti as string}
        title={result.title}
        description={result.description}
        recommendedPlaces={result.recommendedPlaces}
        image={result.image}
      />
    </div>
  );
}
