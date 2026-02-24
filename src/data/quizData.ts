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
  title: string;
  subtitle: string;
  description: string;
  strengths: string[];
  growthAreas: string[];
  dailyPractice: string;
  affirmation: string;
}

export function computeResult(answers: Record<number, number>): ResultProfile {
  // Count "Yes" or "Often" answers (index 0) per category
  const categoryScores: Record<string, number> = {};
  
  quizQuestions.forEach((q, i) => {
    if (!categoryScores[q.category]) categoryScores[q.category] = 0;
    if (answers[i] === 0) categoryScores[q.category]++;
  });

  // Find the dominant PCOS driver (excluding General PCOS)
  const drivers = Object.entries(categoryScores).filter(([cat]) => cat !== "General PCOS");
  drivers.sort((a, b) => b[1] - a[1]);
  const topDriver = drivers[0]?.[0] || "General PCOS";
  const generalScore = categoryScores["General PCOS"] || 0;

  if (topDriver === "Insulin resistance" && categoryScores["Insulin resistance"] >= 1) {
    return {
      title: "Insulin Resistant PCOS",
      subtitle: "Your primary driver appears to be insulin resistance",
      description:
        "Insulin resistant PCOS is the most common type, affecting approximately 70% of those with PCOS. Your body may struggle to use insulin effectively, leading to higher blood sugar levels and increased androgen production.",
      strengths: ["Awareness of carbohydrate sensitivity", "Recognising blood sugar patterns"],
      growthAreas: ["Blood sugar management", "Anti-inflammatory nutrition", "Regular movement"],
      dailyPractice: "Pair carbohydrates with protein and healthy fats at every meal to stabilise blood sugar levels.",
      affirmation: "Understanding my body's signals is the first step toward balance.",
    };
  } else if (topDriver === "Adrenal fatigue" && categoryScores["Adrenal fatigue"] >= 1) {
    return {
      title: "Adrenal PCOS",
      subtitle: "Your primary driver appears to be adrenal stress",
      description:
        "Adrenal PCOS is driven by chronic stress rather than insulin resistance. Your adrenal glands may be producing excess DHEA-S, contributing to hormonal imbalance.",
      strengths: ["Drive and determination", "High capacity for work"],
      growthAreas: ["Stress management", "Rest and recovery", "Nervous system regulation"],
      dailyPractice: "Incorporate 10 minutes of intentional rest or breathwork daily — your body needs permission to slow down.",
      affirmation: "Rest is not laziness — it is medicine for my hormones.",
    };
  } else if (topDriver === "Inflammation" && categoryScores["Inflammation"] >= 1) {
    return {
      title: "Inflammatory PCOS",
      subtitle: "Your primary driver appears to be chronic inflammation",
      description:
        "Inflammatory PCOS is characterised by chronic low-grade inflammation that disrupts ovulation and stimulates excess androgen production. Gut health often plays a central role.",
      strengths: ["Body awareness", "Attention to digestive signals"],
      growthAreas: ["Gut healing", "Anti-inflammatory diet", "Identifying food sensitivities"],
      dailyPractice: "Keep a food-symptom diary to identify triggers — knowledge is your most powerful tool.",
      affirmation: "Healing my gut is healing my hormones.",
    };
  } else if (topDriver === "Hypothyroid" && categoryScores["Hypothyroid"] >= 1) {
    return {
      title: "Hypothyroid-Related PCOS",
      subtitle: "Your symptoms may be linked to thyroid function",
      description:
        "Hypothyroidism and PCOS share overlapping symptoms including fatigue, weight changes, and irregular cycles. An underactive thyroid can worsen or mimic PCOS symptoms.",
      strengths: ["Recognising fatigue patterns", "Seeking answers proactively"],
      growthAreas: ["Thyroid testing (TSH, T3, T4)", "Energy management", "Nutrient support (selenium, iodine, zinc)"],
      dailyPractice: "Prioritise 7–9 hours of sleep and consider asking your GP for a full thyroid panel.",
      affirmation: "Fatigue is not failure — it's my body asking for support.",
    };
  }

  return {
    title: "General PCOS Profile",
    subtitle: "Your results suggest general PCOS indicators",
    description:
      generalScore >= 2
        ? "You show several hallmark signs of PCOS. A formal diagnosis typically requires at least two of three criteria: irregular periods, elevated androgens, and polycystic ovaries on ultrasound."
        : "Your responses don't strongly indicate a single PCOS driver, but PCOS presents differently in everyone. Consider working with a healthcare professional for personalised guidance.",
    strengths: ["Taking initiative in understanding your health", "Willingness to explore root causes"],
    growthAreas: ["Comprehensive hormone testing", "Working with a PCOS-informed practitioner", "Lifestyle foundations"],
    dailyPractice: "Start with the basics: balanced meals, regular movement, quality sleep, and stress management.",
    affirmation: "Every step I take toward understanding my body is a step toward healing.",
  };
}
