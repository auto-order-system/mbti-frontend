import Link from "next/link";
import TravelImages from "@/components/travel-images";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fff8dc] relative overflow-hidden">
      {/* 여행 관련 이미지들 */}
      <TravelImages />

      {/* 메인 콘텐츠 */}
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-yellow-500 mb-4 tracking-wider">
            MBTI<span className="text-4xl">별</span>
          </h1>
          <h2 className="text-4xl font-bold text-yellow-500 tracking-wider">
            여행지 추천
          </h2>
        </div>

        <p className="text-xl mb-16 text-center">
          나와 가장 잘 어울리는 여행지는?
        </p>

        <Link href="/quiz">
          <button className="bg-white border-2 border-gray-300 rounded-full py-3 px-8 text-lg hover:bg-gray-50 transition-colors">
            여행지 찾기 테스트 시작
          </button>
        </Link>
      </div>
    </div>
  );
}
