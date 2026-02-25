const FooterSection = () => {
  return (
    <footer className="w-full border-t border-border bg-card/50 px-6 py-12">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="glass rounded-lg p-6 space-y-4">
          <div className="space-y-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Clinical Disclaimer
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Lumina is an educational tool designed by Registered Nutritionist Triana Dessy, S.Gz,
              for self-reflection and personal insight into PCOS drivers. It is{" "}
              <strong>not a diagnostic tool</strong> and does not constitute medical, nutritional, or
              clinical advice. If you experience PCOS-related symptoms, please consult an{" "}
              <strong>Obstetrician/Gynecologist</strong> and a{" "}
              <strong>Registered Dietitian Nutritionist (RDN)</strong>.
            </p>
          </div>

          <div className="border-t border-border pt-3 space-y-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Data Privacy
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              No personal health data is collected, stored, or transmitted. All responses remain in
              your local browser and are discarded when you close the page.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <span>© 2026 Lumina by Triana Dessy, S.Gz. For educational purposes only.</span>
          <span>Not a substitute for professional clinical care.</span>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
