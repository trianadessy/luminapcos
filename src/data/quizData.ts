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
  subtitle: string;
  whatsHappening: string;
  whyItMatters: string;
  nextSteps: string[];
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
      subtitle: "Your results suggest signs of insulin dysregulation.",
      whatsHappening:
        "Your responses suggest your body may be producing insulin but struggling to use it efficiently. This causes your pancreas to release even more insulin, which signals your ovaries to produce excess androgens (male hormones). The result is a hormonal cascade that disrupts your cycle, triggers cravings, and makes it harder to maintain a healthy weight.",
      whyItMatters:
        "Unmanaged insulin resistance does not just affect your periods. It increases your risk of type 2 diabetes, cardiovascular issues, and chronic inflammation over time. The sugar cravings and energy crashes you experience are not a lack of willpower; they are your body's chemistry working against you.",
      nextSteps: [
        "Talk to your GP: Share these indicators with your doctor and ask for a fasting insulin test and HbA1c to get a clearer picture of your metabolic health.",
        "Consult a Registered Nutritionist: Work with an expert to design a personalised meal plan that stabilises blood sugar — focusing on pairing carbohydrates with protein and healthy fat at every meal.",
        "Start with one simple change: Add protein to your breakfast and notice how your energy and cravings shift throughout the day.",
      ],
    };
  } else if (topDriver === "Adrenal fatigue" && categoryScores["Adrenal fatigue"] >= 1) {
    return {
      type: "Adrenal Fatigue",
      subtitle: "Your results suggest elevated stress-related hormonal patterns.",
      whatsHappening:
        "Your responses suggest your adrenal glands may have been working overtime due to chronic stress, producing excess cortisol and DHEA-S. These stress hormones are disrupting your reproductive hormones, mimicking or worsening PCOS symptoms. Your body is essentially stuck in survival mode, prioritising stress response over fertility and balance.",
      whyItMatters:
        "When your nervous system is constantly activated, it suppresses ovulation, disrupts sleep quality, and breaks down muscle while storing fat — especially around the midsection. The exhaustion, anxiety, and hormonal irregularities you feel are your body's way of telling you it cannot sustain this pace.",
      nextSteps: [
        "Talk to your GP: Share these indicators with your doctor and request a cortisol and DHEA-S panel to assess your adrenal function.",
        "Consult a Registered Nutritionist: Work with an expert to build a nourishing protocol that supports your nervous system, including adequate magnesium, B vitamins, and adaptogenic foods.",
        "Introduce a daily reset: Start with 10 minutes of box breathing, gentle yoga, or simply lying down with your legs elevated. Your hormones heal when your body feels safe.",
      ],
    };
  } else if (topDriver === "Inflammation" && categoryScores["Inflammation"] >= 1) {
    return {
      type: "Inflammation",
      subtitle: "Your results suggest persistent inflammation indicators.",
      whatsHappening:
        "Your responses suggest your body may be in a state of low-grade, chronic inflammation. This often originates in the gut through food sensitivities or a disrupted microbiome, which keeps your immune system on high alert. This state interferes with normal ovarian function and drives excess androgen production, which is why traditional weight loss efforts may feel ineffective.",
      whyItMatters:
        "Chronic inflammation does not just cause bloating. It can actively block ovulation and worsen symptoms like acne and unwanted hair growth. Left unaddressed, it makes your body more resistant to insulin over time, acting as a hidden driver that makes every other PCOS symptom harder to manage.",
      nextSteps: [
        "Talk to your GP: Share these indicators with your doctor to explore specific inflammatory markers and ensure a comprehensive medical evaluation.",
        "Consult a Registered Nutritionist: Once you have your clinical picture, the next essential step is to work with an expert to design a personalised anti-inflammatory protocol that supports gut healing and hormonal balance.",
        "Start a Food-Symptom Diary: In the meantime, begin tracking your meals to identify potential personal triggers like dairy or refined sugar, while adding anti-inflammatory foods like fatty fish and leafy greens.",
      ],
    };
  } else {
    return {
      type: "Hypothyroid",
      subtitle: "Your results suggest potential thyroid-related patterns.",
      whatsHappening:
        "Your responses suggest your thyroid gland may not be producing enough hormones to keep your metabolism, energy, and reproductive system running optimally. Hypothyroidism and PCOS frequently coexist, and an underactive thyroid can slow everything down — your cycle, your digestion, your mood, and your ability to lose weight.",
      whyItMatters:
        "An undiagnosed thyroid issue can make PCOS treatment feel ineffective because you may be addressing symptoms without tackling a root cause. The persistent fatigue, brain fog, and cold sensitivity you experience are not just PCOS — they could be your thyroid calling for attention.",
      nextSteps: [
        "Talk to your GP: Ask for a comprehensive thyroid panel that includes TSH, free T3, free T4, and thyroid antibodies — not just TSH alone.",
        "Consult a Registered Nutritionist: Work with an expert to support your thyroid with selenium-rich foods (Brazil nuts), iodine (seaweed, eggs), and adequate zinc through a personalised nutrition plan.",
        "Prioritise consistent sleep: Give your thyroid the rest it needs by maintaining a regular sleep schedule of 7–9 hours per night.",
      ],
    };
  }
}
