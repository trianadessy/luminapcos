export interface QuizQuestion {
  question: string;
  options: string[];
}

export const quizQuestions: QuizQuestion[] = [
  {
    question: "When you wake up most mornings, what's the first feeling you notice?",
    options: ["Calm and rested", "Anxious or rushed", "Indifferent or numb", "Hopeful and energized"],
  },
  {
    question: "How do you typically respond when something unexpected disrupts your plans?",
    options: ["Adapt quickly", "Feel frustrated but push through", "Shut down temporarily", "See it as an opportunity"],
  },
  {
    question: "When was the last time you did something purely for your own enjoyment?",
    options: ["Today or yesterday", "Within the past week", "I can't quite remember", "It's been a while"],
  },
  {
    question: "How do you feel about asking others for help?",
    options: ["Comfortable — everyone needs help", "I'll ask, but I feel guilty", "I'd rather handle things alone", "I rarely think to ask"],
  },
  {
    question: "What best describes your inner dialogue on a typical day?",
    options: ["Encouraging and kind", "A mix of critical and supportive", "Mostly self-critical", "I don't pay much attention to it"],
  },
  {
    question: "How connected do you feel to the people closest to you right now?",
    options: ["Very connected", "Somewhat connected", "I feel a gap growing", "I often feel alone even with others"],
  },
  {
    question: "When you experience a strong emotion, what do you usually do?",
    options: ["Sit with it and process", "Distract myself", "Express it immediately", "Push it aside to deal with later"],
  },
  {
    question: "How often do you feel like you're living on 'autopilot'?",
    options: ["Rarely — I feel present", "Sometimes, during routines", "Quite often", "Most of the time"],
  },
  {
    question: "What's your relationship with rest and downtime?",
    options: ["I prioritize it", "I try but feel guilty", "I fill every gap with productivity", "Rest feels uncomfortable"],
  },
  {
    question: "If you could change one thing about how you feel day-to-day, what would it be?",
    options: ["More peace of mind", "More energy and motivation", "Deeper connections with others", "Greater self-compassion"],
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
  const values = Object.values(answers);
  const avg = values.reduce((a, b) => a + b, 0) / values.length;

  if (avg <= 1) {
    return {
      title: "The Grounded Soul",
      subtitle: "You carry a quiet strength within you",
      description:
        "You demonstrate a remarkable capacity for self-awareness and emotional regulation. Your natural tendency toward calm reflection serves as an anchor in turbulent times.",
      strengths: ["Emotional resilience", "Self-awareness", "Healthy boundaries", "Present-moment living"],
      growthAreas: ["Allowing vulnerability with others", "Embracing spontaneity"],
      dailyPractice: "Spend 5 minutes each evening writing down one moment where you felt fully alive today.",
      affirmation: "My peace is my power, and I share it generously with the world.",
    };
  } else if (avg <= 2) {
    return {
      title: "The Compassionate Striver",
      subtitle: "You give deeply, sometimes at your own expense",
      description:
        "You possess a beautiful balance of ambition and empathy, though you sometimes forget to direct that compassion inward. Your awareness of this pattern is itself a strength.",
      strengths: ["Empathy", "Determination", "Emotional intelligence", "Adaptability"],
      growthAreas: ["Self-compassion practices", "Setting gentle boundaries", "Resting without guilt"],
      dailyPractice: "Before saying yes to any request, pause and ask: 'Do I have the capacity for this right now?'",
      affirmation: "I deserve the same kindness I so freely give to others.",
    };
  } else {
    return {
      title: "The Quiet Seeker",
      subtitle: "You're ready for a meaningful shift",
      description:
        "You're in a period of deep introspection, even if it doesn't always feel that way. The fact that you're here shows a courage that shouldn't be underestimated.",
      strengths: ["Introspective nature", "Courage to seek change", "Honesty with self", "Depth of feeling"],
      growthAreas: ["Reconnecting with joy", "Building a support network", "Developing a self-care routine"],
      dailyPractice: "Each morning, name three things you can see, hear, and feel to ground yourself in the present.",
      affirmation: "I am not behind. I am exactly where my journey needs me to be.",
    };
  }
}
