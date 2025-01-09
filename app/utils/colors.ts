export const colors = {
  primary: '#2d3748', // Darker blue-grey
  secondary: '#4a5568', // Dark blue-grey
  accent: '#63b3ed', // Light blue for accents
  success: '#68d391', // Softer green
  warning: '#f6e05e', // Softer yellow
  danger: '#fc8181', // Softer red
  background: '#f1f5f9', // Light blue-grey
  text: '#1a202c', // Very dark blue-grey
  lightText: '#718096', // Medium blue-grey
}

export function getGradeColor(grade: number): { text: string; background: string } {
  if (grade <= 1) return { text: '#c53030', background: colors.danger }
  if (grade <= 2) return { text: '#c05621', background: '#fbd38d' }
  if (grade <= 3) return { text: '#b7791f', background: colors.warning }
  if (grade <= 4) return { text: '#2f855a', background: '#9ae6b4' }
  return { text: '#22543d', background: colors.success }
}

export function getTintColor(gradeColor: ReturnType<typeof getGradeColor>, opacity: number = 0.2): string {
  return `${gradeColor.background}${Math.round(opacity * 255).toString(16).padStart(2, '0')}`
}

export function darkenColor(color: string, amount: number = 0.1): string {
  // Handle rgba colors
  if (color.includes('rgba')) {
    const [r, g, b, a] = color.match(/[\d.]+/g)?.map(Number) || [0, 0, 0, 0]
    return `rgba(${Math.max(0, r - r * amount)}, ${Math.max(0, g - g * amount)}, ${Math.max(0, b - b * amount)}, ${a})`
  }
  
  // Handle hex colors
  const hex = color.replace('#', '')
  const rgb = hex.match(/.{2}/g)?.map(c => parseInt(c, 16)) || [0, 0, 0]
  const darkened = rgb.map(c => Math.max(0, Math.round(c * (1 - amount))))
  return `#${darkened.map(c => c.toString(16).padStart(2, '0')).join('')}`
}

