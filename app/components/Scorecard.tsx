"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import CompanyList from './CompanyList'
import DimensionGrid from './DimensionGrid'
import ScoreDetails from './ScoreDetails'
import { Company, Dimension, Grades } from '../types'
import { calculateAverageScore, getGradeColor } from '../utils'

const companies: Company[] = [
  { id: 'apple', name: 'Apple' },
  { id: 'google', name: 'Google' },
  { id: 'microsoft', name: 'Microsoft' },
  { id: 'amazon', name: 'Amazon' },
  { id: 'facebook', name: 'Facebook' },
]

const dimensions: Dimension[] = [
  { id: 'governance', name: 'Governance' },
  { id: 'financial', name: 'Financial Responsibility' },
  { id: 'ethical', name: 'Ethical Practices' },
  { id: 'transparency', name: 'Transparency' },
  { id: 'regulatory', name: 'Regulatory Compliance' },
]

export default function Scorecard() {
  const [grades, setGrades] = useState<Grades>({})
  const [averageScores, setAverageScores] = useState<Record<string, number>>({})
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null)
  const [selectedDimension, setSelectedDimension] = useState<Dimension | null>(null)

  useEffect(() => {
    const newGrades: Grades = {}
    const newAverageScores: Record<string, number> = {}
    companies.forEach(company => {
      newGrades[company.id] = {}
      dimensions.forEach(dimension => {
        newGrades[company.id][dimension.id] = Math.floor(Math.random() * 5) + 1
      })
      newAverageScores[company.id] = calculateAverageScore(newGrades[company.id])
    })
    setGrades(newGrades)
    setAverageScores(newAverageScores)
  }, [])

  return (
    <div className="bg-white rounded-lg shadow-xl p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Corporate Accountability Scorecard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <CompanyList 
          companies={companies} 
          selectedCompany={selectedCompany} 
          onSelectCompany={setSelectedCompany}
          averageScores={averageScores}
        />
        <motion.div 
          className="md:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {selectedCompany ? (
            <DimensionGrid 
              company={selectedCompany}
              dimensions={dimensions}
              grades={grades[selectedCompany.id]}
              onSelectDimension={setSelectedDimension}
            />
          ) : (
            <div className="text-center text-gray-500 py-12">
              Select a company to view its scorecard
            </div>
          )}
        </motion.div>
      </div>
      {selectedCompany && selectedDimension && (
        <ScoreDetails
          company={selectedCompany}
          dimension={selectedDimension}
          grade={grades[selectedCompany.id][selectedDimension.id]}
          onClose={() => setSelectedDimension(null)}
        />
      )}
    </div>
  )
}

