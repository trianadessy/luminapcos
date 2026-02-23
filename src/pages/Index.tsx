import { useSectionFlow } from "@/hooks/useSectionFlow";
import { computeResult } from "@/data/quizData";
import LandingSection from "@/components/LandingSection";
import QuizSection from "@/components/QuizSection";
import ResultsSection from "@/components/ResultsSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  const { currentSection, isTransitioning, answers, goTo, recordAnswer, reset } =
    useSectionFlow();

  const result = currentSection === "results" ? computeResult(answers) : null;

  return (
    <div className="min-h-screen bg-background">
      <div
        className={`transition-all duration-300 ease-out ${
          isTransitioning ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"
        }`}
      >
        {currentSection === "landing" && (
          <LandingSection onStart={() => goTo("quiz")} />
        )}

        {currentSection === "quiz" && (
          <QuizSection
            answers={answers}
            onAnswer={recordAnswer}
            onComplete={() => goTo("results")}
          />
        )}

        {currentSection === "results" && result && (
          <ResultsSection result={result} onRetake={reset} />
        )}
      </div>

      <FooterSection />
    </div>
  );
};

export default Index;
