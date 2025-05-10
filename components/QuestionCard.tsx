// src/components/QuestionCard.tsx

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
    <div className="w-full bg-white p-6 rounded-xl shadow-md">
      <p className="text-lg font-semibold mb-4">
        {id}. {question}
      </p>
      <div className="space-y-2">
        {options.map((opt, index) => (
          <button
            key={index}
            onClick={() => onSelect(opt.value)}
            className="w-full text-left bg-blue-100 hover:bg-blue-200 px-4 py-2 rounded-md transition"
          >
            {opt.text}
          </button>
        ))}
      </div>
    </div>
  );
}
