import { ResultProfile } from "@/data/quizData";

interface ResultsSectionProps {
  result: ResultProfile;
  onRetake: () => void;
}

const ResultsSection = ({ result, onRetake }: ResultsSectionProps) => {
  return (
    <section className="min-h-screen flex flex-col items-center px-6 py-20">
      <div className="w-full max-w-3xl space-y-10">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-block px-4 py-1.5 rounded-full bg-secondary text-sm font-medium text-secondary-foreground">
            Your PCOS Type
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-foreground">
            {result.type}
          </h1>
        </div>

        {/* Content Cards */}
        <div className="space-y-6">
          {/* What's Actually Happening */}
          <div className="glass rounded-lg p-8 space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
              What's Actually Happening
            </h3>
            <p className="text-foreground leading-relaxed">{result.whatsHappening}</p>
          </div>

          {/* Why This Matters */}
          <div className="glass rounded-lg p-8 space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
              Why This Matters
            </h3>
            <p className="text-foreground leading-relaxed">{result.whyItMatters}</p>
          </div>

          {/* Your Next Step */}
          <div className="glass rounded-lg p-8 space-y-3 bg-primary/5">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
              Your Next Step
            </h3>
            <p className="text-foreground leading-relaxed">{result.nextStep}</p>
          </div>
        </div>

        {/* Retake */}
        <div className="text-center pt-6">
          <button
            onClick={onRetake}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
          >
            Retake the quiz
          </button>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
