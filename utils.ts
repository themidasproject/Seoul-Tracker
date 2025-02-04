export function calculateAverageScore(grades: Record<string, number>): number {
  const scores = Object.values(grades)
  return scores.reduce((sum, score) => sum + score, 0) / scores.length
}

export function getGradeColor(grade: number): string {
  if (grade <= 1) return '#8b0000' // dark red
  if (grade <= 2) return '#ff4500' // orange red
  if (grade <= 3) return '#ffa500' // orange
  if (grade <= 4) return '#32cd32' // lime green
  return '#006400' // dark green
}

export function getTintColor(grade: number): string {
  const baseColor = getGradeColor(grade)
  return `${baseColor}20` // 20 is the hex value for 12.5% opacity
}

