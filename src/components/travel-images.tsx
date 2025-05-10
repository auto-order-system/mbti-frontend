import { Camera, Leaf, Luggage, Map, Plane, Star } from "lucide-react";

export default function TravelImages() {
  return (
    <>
      <div className="absolute top-10 left-10">
        <Plane width={80} height={50} aria-label="비행기" />
      </div>
      <div className="absolute bottom-20 left-10">
        <Luggage width={60} height={90} aria-label="여행 가방" />
      </div>
      <div className="absolute top-20 right-10">
        <Map width={80} height={80} aria-label="지도" />
      </div>
      <div className="absolute bottom-20 right-10">
        <Camera width={80} height={60} aria-label="카메라" />
      </div>
      <div className="absolute bottom-10 left-40">
        <Leaf width={100} height={100} aria-label="잎" />
      </div>
      <div className="absolute bottom-40 right-20">
        <Star width={50} height={50} aria-label="불가사리" />
      </div>
    </>
  );
}
