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
        console.log("받은 데이터:", data);
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
    return <div className="text-center py-10">질문 불러오는 중...</div>;

  return (
    <main className="max-w-2xl mx-auto p-6">
      {questions.length > 0 && (
        <QuestionCard
          id={questions[currentIndex].id}
          question={questions[currentIndex].question}
          options={questions[currentIndex].options}
          onSelect={handleSelect}
        />
      )}
    </main>
  );
}
