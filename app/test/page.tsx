"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import QuestionCard from "@/components/QuestionCard";

interface Option {
  text: string;
  value: string;
}

interface Question {
  id: number;
  question: string;
  options: Option[];
}

export default function TestPage() {
  const router = useRouter();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8080/api/mbti/questions")
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data);
        setIsLoading(false);
      })
      .catch((err) => console.error("에러 발생:", err));
  }, []);

  const handleSelect = (value: string) => {
    setScores((prev) => ({ ...prev, [value]: (prev[value] || 0) + 1 }));
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      const result = ["E", "S", "T", "J"]
        .map((type) => {
          const opposite = { E: "I", S: "N", T: "F", J: "P" }[type]!;
          return (scores[type] || 0) >= (scores[opposite] || 0)
            ? type
            : opposite;
        })
        .join("");

      fetch(`http://localhost:8080/api/mbti/result/${result}`)
        .then((res) => res.json())
        .then((data) => {
          localStorage.setItem("mbti_result", JSON.stringify(data));
          router.push(`/result/${result}`);
        })
        .catch((err) => {
          console.error("결과 요청 실패:", err);
        });
    }
  };

  if (isLoading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-yellow-50 text-xl">
        질문을 불러오는 중입니다...
      </div>
    );

  return (
    <main className="min-h-screen flex items-center justify-center bg-yellow-50 px-4 py-16">
      <div className="w-full max-w-3xl bg-white p-8 rounded-2xl shadow-2xl text-center animate-slidein">
        {questions.length > 0 && (
          <>
            <p className="text-lg text-gray-500 mb-2">
              {currentIndex + 1} / {questions.length}
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-yellow-600 mb-6 font-[Cafe24Ssurround]">
              {questions[currentIndex].question}
            </h2>

            <div className="flex flex-col gap-4">
              {questions[currentIndex].options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleSelect(option.value)}
                  className="bg-yellow-100 hover:bg-yellow-200 active:scale-95 transition-all text-yellow-800 font-semibold py-3 px-6 rounded-xl shadow-md"
                >
                  {option.text}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
}
