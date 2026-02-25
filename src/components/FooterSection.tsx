import { ShieldCheck, Lock } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="w-full border-t border-border bg-background px-6 py-16">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="mt-0.5 p-2 rounded-full bg-primary/10 text-primary shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div className="space-y-1.5">
              <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-foreground/70">
                Clinical Disclaimer
              </h4>
              <p className="text-xs text-muted-foreground leading-[1.8]">
                Lumina is an educational tool designed by Registered Nutritionist{" "}
                <strong className="text-foreground/70">Triana Dessy, S.Gz</strong>, for self-reflection and personal insight into
                PCOS drivers. It is <strong className="text-foreground/70">not a diagnostic tool</strong> and
                does not constitute medical, nutritional, or clinical advice. If you
                experience PCOS-related symptoms, please consult an
                Obstetrician/Gynecologist and a Registered Dietitian Nutritionist (RDN).
              </p>
            
            </div>
          </div>

          <div className="w-16 h-px bg-border mx-auto" />

          <div className="flex items-start gap-4">
            <div className="mt-0.5 p-2 rounded-full bg-primary/10 text-primary shrink-0">
              <Lock className="w-4 h-4" />
            </div>
            <div className="space-y-1.5">
              <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-foreground/70">
                Data Privacy
              </h4>
              <p className="text-xs text-muted-foreground leading-[1.8]">
                No personal health data is collected, stored, or transmitted. All
                responses remain in your local browser and are discarded when you
                close the page.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-border flex flex-col md:flex-row justify-between items-center gap-3 text-[11px] text-muted-foreground tracking-wide">
          <span>© 2026 Lumina by Triana Dessy, S.Gz — For educational purposes only.</span>
          <span className="opacity-60">Not a substitute for professional clinical care.</span>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
