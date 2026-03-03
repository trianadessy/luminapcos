import { ResultProfile } from "@/data/quizData";
import { useMemo } from "react";

interface ResultsSectionProps {
  result: ResultProfile;
  onRetake: () => void;
}

const Sparkle = ({ style }: { style: React.CSSProperties }) => (
  <div
    className="absolute pointer-events-none"
    style={style}
  >
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path
        d="M6 0L7.2 4.8L12 6L7.2 7.2L6 12L4.8 7.2L0 6L4.8 4.8L6 0Z"
        fill="currentColor"
      />
    </svg>
  </div>
);

const ResultsSection = ({ result, onRetake }: ResultsSectionProps) => {
  const sparkles = useMemo(() =>
    Array.from({ length: 14 }, (_, i) => ({
      left: `${8 + Math.random() * 84}%`,
      top: `${5 + Math.random() * 90}%`,
      animationDelay: `${i * 0.7 + Math.random() * 2}s`,
      animationDuration: `${3 + Math.random() * 3}s`,
      fontSize: `${6 + Math.random() * 8}px`,
      animation: i % 2 === 0
        ? `sparkle-float ${3 + Math.random() * 3}s ease-in-out ${i * 0.7 + Math.random() * 2}s infinite`
        : `sparkle-drift ${4 + Math.random() * 3}s ease-in-out ${i * 0.5 + Math.random() * 2}s infinite`,
    })), []
  );

  return (
    <section className="relative min-h-screen flex flex-col items-center px-6 py-20 overflow-hidden">
      {/* Floating sparkles */}
      <div className="absolute inset-0 pointer-events-none text-primary/25" aria-hidden="true">
        {sparkles.map((s, i) => (
          <Sparkle key={i} style={s} />
        ))}
      </div>
      <div className="relative w-full max-w-3xl space-y-10">
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
          <div className="rounded-[24px] bg-card p-8 space-y-3 shadow-[0_4px_20px_-4px_hsl(var(--secondary)/0.5)]">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
              What's Actually Happening
            </h3>
            <p className="text-foreground leading-relaxed">{result.whatsHappening}</p>
          </div>

          {/* Why This Matters */}
          <div className="rounded-[24px] bg-card p-8 space-y-3 shadow-[0_4px_20px_-4px_hsl(var(--secondary)/0.5)]">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
              Why This Matters
            </h3>
            <p className="text-foreground leading-relaxed">{result.whyItMatters}</p>
          </div>

          {/* Your Next Step */}
          <div className="relative rounded-[24px] overflow-hidden p-[2px]"
            style={{
              boxShadow: `0 0 25px hsl(var(--primary) / 0.25), 0 0 60px hsl(var(--secondary) / 0.15)`,
            }}
          >
            {/* Rotating gradient border */}
            <div
              className="absolute -inset-[50%] animate-[halo-spin_8s_linear_infinite]"
              style={{
                background: `conic-gradient(from 0deg, hsl(var(--primary)), hsl(var(--secondary)), hsl(var(--primary) / 0.4), hsl(var(--secondary)), hsl(var(--primary)))`,
              }}
            />
            <div className="relative rounded-[23px] bg-card p-8 space-y-4">
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
