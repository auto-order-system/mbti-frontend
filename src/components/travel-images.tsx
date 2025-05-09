import Image from "next/image";

export default function TravelImages() {
  return (
    <>
      <div className="absolute top-10 left-10">
        <Image src="/images/airplane.png" width={80} height={50} alt="비행기" />
      </div>
      <div className="absolute bottom-20 left-10">
        <Image
          src="/images/luggage.png"
          width={60}
          height={90}
          alt="여행 가방"
        />
      </div>
      <div className="absolute top-20 right-10">
        <Image src="/images/map.png" width={80} height={80} alt="지도" />
      </div>
      <div className="absolute bottom-20 right-10">
        <Image src="/images/camera.png" width={80} height={60} alt="카메라" />
      </div>
      <div className="absolute bottom-10 left-40">
        <Image
          src="/images/palm-leaf.png"
          width={100}
          height={100}
          alt="야자수 잎"
        />
      </div>
      <div className="absolute bottom-40 right-20">
        <Image
          src="/images/starfish.png"
          width={50}
          height={50}
          alt="불가사리"
        />
      </div>
    </>
  );
}
