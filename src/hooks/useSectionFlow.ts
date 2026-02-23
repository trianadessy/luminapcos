import { useState, useCallback } from "react";

type Section = "landing" | "quiz" | "results";

export function useSectionFlow() {
  const [currentSection, setCurrentSection] = useState<Section>("landing");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [answers, setAnswers] = useState<Record<number, number>>({});

  const goTo = useCallback((section: Section) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSection(section);
      setIsTransitioning(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 300);
  }, []);

  const recordAnswer = useCallback((questionIndex: number, optionIndex: number) => {
    setAnswers((prev) => ({ ...prev, [questionIndex]: optionIndex }));
  }, []);

  const reset = useCallback(() => {
    setAnswers({});
    goTo("landing");
  }, [goTo]);

  return { currentSection, isTransitioning, answers, goTo, recordAnswer, reset };
}
