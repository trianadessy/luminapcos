import { useState } from "react";
import { quizQuestions } from "@/data/quizData";

interface QuizSectionProps {
  answers: Record<number, number>;
  onAnswer: (questionIndex: number, optionIndex: number) => void;
  onComplete: () => void;
}

const QuizSection = ({ answers, onAnswer, onComplete }: QuizSectionProps) => {
  const [currentQ, setCurrentQ] = useState(0);
  const [animating, setAnimating] = useState(false);
  const total = quizQuestions.length;
  const question = quizQuestions[currentQ];
  const progress = ((currentQ + (answers[currentQ] !== undefined ? 1 : 0)) / total) * 100;

  const handleSelect = (optionIdx: number) => {
    onAnswer(currentQ, optionIdx);

    if (currentQ < total - 1) {
      setAnimating(true);
      setTimeout(() => {
        setCurrentQ((prev) => prev + 1);
        setAnimating(false);
      }, 300);
    }
  };

  const handleBack = () => {
    if (currentQ > 0) {
      setAnimating(true);
      setTimeout(() => {
        setCurrentQ((prev) => prev - 1);
        setAnimating(false);
      }, 300);
    }
  };

  const isLast = currentQ === total - 1;
  const allAnswered = Object.keys(answers).length === total;

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
      <div className="w-full max-w-xl space-y-10">
        {/* Progress */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Question {currentQ + 1} of {total}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full h-1.5 rounded-full bg-muted overflow-hidden">
            <div
              className="h-full rounded-full bg-primary transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <div className={`transition-all duration-300 ${animating ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"}`}>
          <h2 className="text-2xl md:text-3xl font-serif font-medium leading-snug text-foreground">
            {question.question}
          </h2>

          <div className="mt-8 space-y-3">
            {question.options.map((option, idx) => {
              const isSelected = answers[currentQ] === idx;
              return (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  className={`w-full text-left px-6 py-4 rounded-lg border transition-all duration-200 text-sm md:text-base ${
                    isSelected
                      ? "bg-primary text-primary-foreground border-primary shadow-md"
                      : "glass border-border hover:border-primary/40 hover:shadow-sm text-foreground"
                  }`}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-4">
          <button
            onClick={handleBack}
            disabled={currentQ === 0}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            ← Back
          </button>

          {isLast && allAnswered && (
            <button
              onClick={onComplete}
              className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] shadow-md"
            >
              See My Results
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default QuizSection;
