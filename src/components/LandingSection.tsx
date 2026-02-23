interface LandingSectionProps {
  onStart: () => void;
}

const LandingSection = ({ onStart }: LandingSectionProps) => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
      <div className="max-w-2xl text-center space-y-8">
        <div className="inline-block px-4 py-1.5 rounded-full bg-secondary text-sm font-medium text-secondary-foreground mb-4">
          PCOS Type Discovery Quiz
        </div>

        <h1 className="text-5xl md:text-7xl font-serif font-semibold leading-tight tracking-tight text-foreground">
          Lumina
        </h1>

        <p className="text-base text-muted-foreground">
          Built by Triana Dessy — Your Registered Nutritionist
        </p>

        <button
          onClick={onStart}
          className="inline-flex items-center justify-center px-10 py-4 rounded-lg bg-primary text-primary-foreground font-medium text-base transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] shadow-md"
        >
          Begin Your Discovery
        </button>

        <p className="text-xs text-muted-foreground pt-4">
          Takes approximately 3 minutes · Completely private
        </p>
      </div>
    </section>
  );
};

export default LandingSection;
