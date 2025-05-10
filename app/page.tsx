"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white text-center p-6">
      <h1 className="text-4xl font-bold mb-4">🧭 MBTI 여행 성향 테스트</h1>
      <p className="mb-8 text-gray-600">
        몇 가지 질문으로 나에게 딱 맞는 여행 스타일을 추천해드릴게요!
      </p>
      <button
        onClick={() => router.push("/test")}
        className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
      >
        테스트 시작하기
      </button>
    </main>
  );
}
