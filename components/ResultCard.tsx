// components/ResultCard.tsx

type ResultCardProps = {
  mbti: string;
  title: string;
  description: string;
  recommendedPlaces: string[];
  image: string;
};

export default function ResultCard({
  mbti,
  title,
  description,
  recommendedPlaces,
  image,
}: ResultCardProps) {
  return (
    <div className="w-full bg-white p-6 rounded-xl shadow-md text-center">
      <h2 className="text-2xl font-bold mb-2">
        {mbti} - {title}
      </h2>
      <img
        src={image}
        alt={`${mbti} 이미지`}
        className="mx-auto w-48 h-48 object-contain mb-4"
      />
      <p className="text-gray-700 mb-4">{description}</p>
      <h3 className="font-semibold">추천 여행지</h3>
      <ul className="mt-2 space-y-1">
        {recommendedPlaces.map((place, idx) => (
          <li key={idx}>• {place}</li>
        ))}
      </ul>
    </div>
  );
}
