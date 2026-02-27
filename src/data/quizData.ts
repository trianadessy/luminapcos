export interface QuizQuestion {
  question: string;
  options: string[];
  category: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    question: "I have a close female family member (mother, sister, or aunt) who has been diagnosed with PCOS.",
    options: ["Yes", "No"],
    category: "General PCOS",
  },
  {
    question: "I have irregular periods, occurring less than 21 days or more than 35 days apart.",
    options: ["Yes", "No"],
    category: "General PCOS",
  },
  {
    question: "I have more body hair than my peers, particularly on my face, chest, or stomach.",
    options: ["Yes", "No"],
    category: "General PCOS",
  },
  {
    question: "I have persistent or severe acne that feels difficult to manage.",
    options: ["Yes", "No"],
    category: "General PCOS",
  },
  {
    question: "I have regular digestive issues, such as bloating, diarrhea, ulcers, reflux, or indigestion.",
    options: ["Yes", "No"],
    category: "Inflammation",
  },
  {
    question: "I have a habit of relying on caffeine, overworking, or overexercising without enough rest.",
    options: ["Yes", "No"],
    category: "Adrenal fatigue",
  },
  {
    question: "I have intense cravings for carbohydrates and sugary foods like rice, bread, or sweets.",
    options: ["Yes", "No"],
    category: "Insulin resistance",
  },
  {
    question: "I am sensitive to not eating for periods of time and experience symptoms of hypoglycemia, such as shakiness, irritability, or dizziness.",
    options: ["Yes", "No"],
    category: "Insulin resistance",
  },
  {
    question: "I have a constant feeling of being tired and lethargic, even after resting.",
    options: ["Often", "Seldom"],
    category: "Hypothyroid",
  },
  {
    question: "I have experienced extreme stress, anxiety, or depression in the past five to eight years.",
    options: ["Often", "Seldom"],
    category: "Adrenal fatigue",
  },
];

export interface ResultProfile {
  type: string;
  whatsHappening: string;
  whyItMatters: string;
  nextStep: string;
}

export function computeResult(answers: Record<number, number>): ResultProfile {
  const categoryScores: Record<string, number> = {};

  quizQuestions.forEach((q, i) => {
    if (!categoryScores[q.category]) categoryScores[q.category] = 0;
    if (answers[i] === 0) categoryScores[q.category]++;
  });

  const drivers = Object.entries(categoryScores).filter(([cat]) => cat !== "General PCOS");
  drivers.sort((a, b) => b[1] - a[1]);
  const topDriver = drivers[0]?.[0] || "Inflammation";

  if (topDriver === "Insulin resistance" && categoryScores["Insulin resistance"] >= 1) {
    return {
      type: "Insulin Resistance",
      whatsHappening:
        "Your body is producing insulin but struggling to use it efficiently. This causes your pancreas to release even more insulin, which signals your ovaries to produce excess androgens (male hormones). The result is a hormonal cascade that disrupts your cycle, triggers cravings, and makes it harder to maintain a healthy weight.",
      whyItMatters:
        "Unmanaged insulin resistance doesn't just affect your periods — it increases your risk of type 2 diabetes, cardiovascular issues, and chronic inflammation over time. The sugar cravings and energy crashes you experience aren't a lack of willpower; they're your body's chemistry working against you.",
      nextStep:
        "Start pairing every carbohydrate with protein and healthy fat — this simple change slows glucose absorption and reduces insulin spikes. For example, add nuts to your rice or have eggs with your toast. Consider asking your doctor about a fasting insulin test to get a clearer picture of where you stand.",
    };
  } else if (topDriver === "Adrenal fatigue" && categoryScores["Adrenal fatigue"] >= 1) {
    return {
      type: "Adrenal Fatigue",
      whatsHappening:
        "Your adrenal glands have been working overtime due to chronic stress, producing excess cortisol and DHEA-S. These stress hormones are disrupting your reproductive hormones, mimicking or worsening PCOS symptoms. Your body is essentially stuck in survival mode, prioritising stress response over fertility and balance.",
      whyItMatters:
        "When your nervous system is constantly activated, it suppresses ovulation, disrupts sleep quality, and breaks down muscle while storing fat — especially around the midsection. The exhaustion, anxiety, and hormonal irregularities you feel are your body's way of telling you it can't sustain this pace.",
      nextStep:
        "Introduce a daily 10-minute nervous system reset — this could be box breathing, gentle yoga, or simply lying down with your legs elevated. Cut back on high-intensity exercise temporarily and prioritise 7–9 hours of sleep. Your hormones heal when your body feels safe.",
    };
  } else if (topDriver === "Inflammation" && categoryScores["Inflammation"] >= 1) {
    return {
      type: "Inflammation",
      whatsHappening:
        "Your body is experiencing chronic low-grade inflammation that is interfering with normal ovarian function and driving excess androgen production. This inflammation often originates in the gut — through food sensitivities, a disrupted microbiome, or intestinal permeability — and sends signals that keep your immune system on high alert.",
      whyItMatters:
        "Chronic inflammation doesn't just cause bloating and digestive discomfort — it actively blocks ovulation, worsens acne and hair growth, and makes your body more resistant to insulin over time. It's a hidden driver that, left unaddressed, can make every other PCOS symptom harder to manage.",
      nextStep:
        "Begin a two-week food-symptom diary to identify your personal inflammatory triggers. Common culprits include gluten, dairy, refined sugar, and processed seed oils. Focus on adding anti-inflammatory foods like fatty fish, turmeric, leafy greens, and fermented foods to support gut healing.",
    };
  } else {
    return {
      type: "Hypothyroid",
      whatsHappening:
        "Your thyroid gland may not be producing enough hormones to keep your metabolism, energy, and reproductive system running optimally. Hypothyroidism and PCOS frequently coexist, and an underactive thyroid can slow everything down — your cycle, your digestion, your mood, and your ability to lose weight.",
      whyItMatters:
        "An undiagnosed thyroid issue can make PCOS treatment feel ineffective because you're addressing symptoms without tackling a root cause. The persistent fatigue, brain fog, and cold sensitivity you may experience aren't just PCOS — they could be your thyroid calling for attention.",
      nextStep:
        "Ask your GP for a comprehensive thyroid panel that includes TSH, free T3, free T4, and thyroid antibodies — not just TSH alone. In the meantime, support your thyroid with selenium-rich foods (Brazil nuts), iodine (seaweed, eggs), and adequate zinc. Prioritise consistent sleep to give your thyroid the rest it needs.",
    };
  }
}
