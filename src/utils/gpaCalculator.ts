export const calculateGPA = (credits: number[], scores: number[]): number => {
  const totalCredits = credits.reduce((sum, credit) => sum + credit, 0);
  const weightedSum = credits.reduce((sum, credit, index) => sum + credit * scores[index], 0);
  return weightedSum / (totalCredits * 20); // Converting to 5.0 scale
};

export const calculateTotalCredits = (credits: number[]): number => {
  return credits.reduce((sum, credit) => sum + credit, 0);
};