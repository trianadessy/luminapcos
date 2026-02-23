const FooterSection = () => {
  return (
    <footer className="w-full border-t border-border bg-card/50 px-6 py-12">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="glass rounded-lg p-6 space-y-3">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Clinical Disclaimer
          </h4>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Lumina is designed for self-reflection and personal insight purposes only. It is{" "}
            <strong>not a diagnostic tool</strong> and does not constitute medical, psychological,
            or psychiatric advice. The results provided are based on generalized patterns and should
            not be used as a substitute for professional evaluation, diagnosis, or treatment.
          </p>
          <p className="text-xs text-muted-foreground leading-relaxed">
            If you are experiencing a mental health crisis or need immediate support, please contact
            your local emergency services, the{" "}
            <strong>988 Suicide & Crisis Lifeline</strong> (call or text 988 in the US), or reach
            out to a licensed mental health professional.
          </p>
          <p className="text-xs text-muted-foreground leading-relaxed">
            No personal data is collected, stored, or transmitted. All quiz responses remain entirely
            in your browser and are discarded when you close the page.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Lumina. For educational purposes only.</span>
          <span>Not a substitute for professional care.</span>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
