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
    fetch(`http://localhost:8080/api/result/${mbti}`)
      .then((res) => res.json())
      .then((data) => setResult(data))
      .catch(() => setResult(null));
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
