export interface Company {
  id: string
  name: string
}

export interface Dimension {
  id: string
  name: string
}

export type Grades = Record<string, Record<string, number>>

export interface CompanyListProps {
  companies: Company[]
  selectedCompany: Company | null
  onSelectCompany: (company: Company) => void
  averageScores: Record<string, number>
}

export interface DimensionGridProps {
  company: Company
  dimensions: Dimension[]
  grades: Record<string, number>
  descriptions: Record<string, string>
  averageScore: number
}

export interface PopupDescriptionProps {
  company: Company
  dimension: Dimension
  grade: number
  description: string
  onClose: () => void
}

