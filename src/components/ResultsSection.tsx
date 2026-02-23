import { ResultProfile } from "@/data/quizData";

interface ResultsSectionProps {
  result: ResultProfile;
  onRetake: () => void;
}

const ResultsSection = ({ result, onRetake }: ResultsSectionProps) => {
  return (
    <section className="min-h-screen flex flex-col items-center px-6 py-20">
      <div className="w-full max-w-4xl space-y-10">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-block px-4 py-1.5 rounded-full bg-secondary text-sm font-medium text-secondary-foreground">
            Your Result
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-foreground">
            {result.title}
          </h1>
          <p className="text-lg text-muted-foreground italic">{result.subtitle}</p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Description — spans 2 cols */}
          <div className="md:col-span-2 glass rounded-lg p-8 space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              About You
            </h3>
            <p className="text-foreground leading-relaxed">{result.description}</p>
          </div>

          {/* Affirmation */}
          <div className="glass rounded-lg p-8 flex flex-col justify-center bg-primary/5">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
              Daily Affirmation
            </h3>
            <p className="text-foreground font-serif text-lg italic leading-relaxed">
              "{result.affirmation}"
            </p>
          </div>

          {/* Strengths */}
          <div className="glass rounded-lg p-8 space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Your Strengths
            </h3>
            <ul className="space-y-2">
              {result.strengths.map((s, i) => (
                <li key={i} className="flex items-center gap-2 text-foreground text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Growth Areas */}
          <div className="glass rounded-lg p-8 space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Growth Areas
            </h3>
            <ul className="space-y-2">
              {result.growthAreas.map((g, i) => (
                <li key={i} className="flex items-center gap-2 text-foreground text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                  {g}
                </li>
              ))}
            </ul>
          </div>

          {/* Daily Practice */}
          <div className="glass rounded-lg p-8 space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Try This Today
            </h3>
            <p className="text-foreground text-sm leading-relaxed">{result.dailyPractice}</p>
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
