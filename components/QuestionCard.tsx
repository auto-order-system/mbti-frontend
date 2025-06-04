type Option = {
  text: string;
  value: string;
};

type QuestionCardProps = {
  id: number;
  question: string;
  options: Option[];
  onSelect: (value: string) => void;
};

export default function QuestionCard({
  id,
  question,
  options,
  onSelect,
}: QuestionCardProps) {
  return (
    <div className="w-full bg-white p-8 rounded-2xl shadow-lg text-center">
      <p className="text-xl md:text-2xl font-bold mb-6 text-yellow-600 font-[Cafe24Ssurround]">
        {id}. {question}
      </p>
      <div className="flex flex-col gap-4">
        {options.map((opt, index) => (
          <button
            key={index}
            onClick={() => onSelect(opt.value)}
            className="bg-blue-100 hover:bg-blue-200 active:scale-95 px-6 py-3 rounded-lg text-blue-800 font-semibold transition"
          >
            {opt.text}
          </button>
        ))}
      </div>
    </div>
  );
}
