"use client";

import { useRouter } from "next/navigation";
import { questions } from "@/data/questions";
import TravelImages from "@/components/travel-images";
import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function QuizPage() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const handleAnswer = (value: string) => {
    const newAnswers = { ...answers, [currentQuestion]: value };
    setAnswers(newAnswers);

    // 다음 질문으로 이동하거나 결과 페이지로 이동
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // 모든 질문에 답했으면 결과 페이지로 이동
      const mbtiResult = calculateMBTI(newAnswers);
      router.push(`/result?type=${mbtiResult}`);
    }
  };

  const calculateMBTI = (answers: Record<number, string>) => {
    const counts = {
      E: 0,
      I: 0,
      S: 0,
      N: 0,
      T: 0,
      F: 0,
      J: 0,
      P: 0,
    };

    // 각 답변 카운트
    Object.values(answers).forEach((answer) => {
      counts[answer as keyof typeof counts]++;
    });

    // MBTI 결정
    const mbti = [
      counts.E > counts.I ? "E" : "I",
      counts.S > counts.N ? "S" : "N",
      counts.T > counts.F ? "T" : "F",
      counts.J > counts.P ? "J" : "P",
    ].join("");

    return mbti;
  };

  const currentQ = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-[#fff8dc] relative overflow-hidden">
      {/* 여행 관련 이미지들 */}
      <TravelImages />

      {/* 메인 콘텐츠 */}
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 relative z-10">
        <Card className="w-full max-w-md mx-auto">
          <CardHeader className="text-center mb-8">
            <h2 className="text-4xl font-bold text-yellow-500 mb-4">
              Q {String(currentQuestion + 1).padStart(2, "0")}.
            </h2>
            <p className="text-xl font-medium">{currentQ.question}</p>
          </CardHeader>

          <CardContent className="space-y-4">
            {currentQ.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option.value)}
                className="w-full text-center p-4 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              >
                {option.text}
              </button>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
