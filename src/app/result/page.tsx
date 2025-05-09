"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { mbtiDestinations, defaultMbtiInfo } from "@/data/mbti";
import TravelImages from "@/components/travel-images";

export default function ResultPage() {
  const searchParams = useSearchParams();
  const mbti = searchParams.get("type") || "ENFP";

  const mbtiInfo = mbtiDestinations[mbti] || defaultMbtiInfo;

  return (
    <div className="min-h-screen bg-[#fff8dc] relative overflow-hidden">
      {/* 여행 관련 이미지들 */}
      <TravelImages />

      {/* 메인 콘텐츠 */}
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 relative z-10">
        <div className="w-full max-w-md mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2">당신의 MBTI는</h2>
              <h1 className="text-4xl font-bold text-yellow-500 mb-2">
                {mbti}
              </h1>
              <p className="text-xl font-medium">{mbtiInfo.title}</p>
              <p className="text-gray-600 mt-2">{mbtiInfo.description}</p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4 text-center">
                추천 여행지
              </h3>
              <div className="space-y-6">
                {mbtiInfo.destinations.map((destination, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-lg overflow-hidden"
                  >
                    <div className="h-48 relative">
                      <Image
                        src={
                          destination.image ||
                          `/placeholder.svg?height=200&width=400`
                        }
                        alt={destination.name}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold text-lg">{destination.name}</h4>
                      <p className="text-gray-600">{destination.reason}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center mb-6">
              <Link href="/quiz">
                <button className="bg-white border border-gray-300 rounded-full py-2 px-6 text-sm hover:bg-gray-50 transition-colors">
                  테스트 다시하기 &gt;
                </button>
              </Link>
            </div>

            <div className="flex justify-center mb-10">
              <button className="bg-white border border-gray-300 rounded-full py-2 px-6 text-sm hover:bg-gray-50 transition-colors">
                ▶ 친구에게 테스트 공유하기 ◀
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
