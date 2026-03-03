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
        <div className="text-center space-y-3">
          <div className="inline-block px-4 py-1.5 rounded-full bg-secondary text-sm font-medium text-secondary-foreground">
            Your PCOS Type
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-foreground">
            {result.type}
          </h1>
          <p className="text-muted-foreground text-base md:text-lg italic">
            {result.subtitle}
          </p>
        </div>

        {/* Content Cards */}
        <div className="space-y-6">
          {/* What's Actually Happening */}
          <div className="rounded-[24px] p-8 space-y-3" style={{ backgroundColor: '#FAF3F0', boxShadow: '0 0 25px 5px #D6C1B8' }}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
              What's Actually Happening
            </h3>
            <p className="text-foreground leading-relaxed">{result.whatsHappening}</p>
          </div>

          {/* Why This Matters */}
          <div className="rounded-[24px] p-8 space-y-3" style={{ backgroundColor: '#FAF3F0', boxShadow: '0 0 25px 5px #D6C1B8' }}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
              Why This Matters
            </h3>
            <p className="text-foreground leading-relaxed">{result.whyItMatters}</p>
          </div>

          {/* Your Next Step */}
          <div className="rounded-[24px] p-8 space-y-4" style={{ backgroundColor: '#B68D8D', boxShadow: '0 0 30px 8px rgba(140, 100, 100, 0.7)' }}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
              Your Next Step
            </h3>
            <ul className="space-y-4">
              {result.nextSteps.map((step, idx) => {
                const colonIdx = step.indexOf(":");
                const hasLabel = colonIdx > 0 && colonIdx < 40;
                return (
                  <li key={idx} className="text-foreground leading-relaxed flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                    <span>
                      {step}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-center text-xs text-muted-foreground italic">
          *Your results are not a diagnosis. Please consult your healthcare provider for medical advice.
        </p>

        {/* Retake */}
        <div className="text-center">
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
