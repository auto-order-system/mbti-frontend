"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen bg-yellow-50 text-center px-6 py-16 overflow-hidden">
      {/* ☁️ 움직이는 구름 */}
      {/* <img
        src="/cloud1.png"
        alt="cloud1"
        className="absolute top-12 left-[-200px] w-70 opacity-20 animate-cloud1 z-0"
      />
      <img
        src="/cloud2.png"
        alt="cloud2"
        className="absolute top-1/3 right-[-150px] w-78 opacity-30 animate-cloud2 z-0"
      /> */}

      {/* ✈️ 비행기 */}
      <img
        src="/plane.png"
        className="absolute top-8 left-6 w-40 md:w-72 opacity-90 animate-plane-loop"
        alt="비행기"
      />
      {/* 여권 */}
      <img
        src="/passport.png"
        className="absolute bottom-8 left-6 w-20 md:w-78 opacity-90 animate-passport-loop z-10"
        alt="여권"
      />

      {/* 지도 */}
      <img
        src="/map.png"
        className="absolute top-10 right-6 w-20 md:w-78 opacity-90 animate-map-loop z-10"
        alt="지도"
      />

      {/* 카메라 */}
      <img
        src="/camera.png"
        className="absolute bottom-8 right-6 w-20 md:w-78 opacity-90 animate-camera-loop z-10"
        alt="카메라"
      />


   

      {/* 🎀 메인 타이틀 */}
      <h1 className="text-6xl md:text-7xl font-extrabold text-yellow-500 drop-shadow-sm mb-4 tracking-tight leading-tight animate-slidein z-20">
        MBTI별
        <br className="md:hidden" /> 여행지 추천
      </h1>

      {/* ✨ 서브 타이틀 */}
      <p className="text-gray-700 text-xl md:text-2xl mt-2 mb-12 font-medium animate-slidein z-20">
        나와 가장 잘 어울리는 여행지는?
      </p>

      {/* 🎯 CTA 버튼 */}
      <button
        onClick={() => router.push("/test")}
        className="relative overflow-hidden bg-white text-yellow-600 border border-yellow-400 font-bold px-10 py-5 text-lg rounded-2xl shadow-xl hover:bg-yellow-100 active:scale-95 transition-all duration-200 animate-slidein z-20"
      >
        ✨ 여행지 찾기 테스트 시작 ✨
        <span className="animate-shine absolute inset-0 pointer-events-none" />
      </button>
    </main>
  );
}
