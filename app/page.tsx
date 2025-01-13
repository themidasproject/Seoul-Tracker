"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import CompanyList from './components/CompanyList'
import DimensionGrid from './components/DimensionGrid'
import SocialShare from './components/SocialShare'
import KeySection from './components/KeySection'
import { Company, Dimension, Grades } from './types'
import { calculateAverageScore } from './utils'
import { companies, dimensions, grades } from './db/scoreData'
import Header from './components/Header'
import { colors } from './utils/colors'

export default function Tracker() {
  const [averageScores, setAverageScores] = useState<Record<string, number>>({})
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null)

  useEffect(() => {
    const newAverageScores: Record<string, number> = {}
    companies.forEach(company => {
      if (grades[company.id]) {
        newAverageScores[company.id] = calculateAverageScore(grades[company.id])
      }
    })
    setAverageScores(newAverageScores)
  }, [])

  return (
    <motion.div 
      className="min-h-screen text-gray-900 font-serif"
      style={{ 
        background: `linear-gradient(135deg, ${colors.background} 0%, #ffffff 100%)`,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1h98v98H1V1zm0 0h98v98H1V1zm0 0h98v98H1V1zm0 0h98v98H1V1z' fill='none' stroke='%23718096' stroke-width='0.5' stroke-opacity='0.05'/%3E%3C/svg%3E")`,
        backgroundSize: '20px 20px',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <main className="container mx-auto px-4 py-8">
        <motion.p 
          className="text-xl text-center mb-8 max-w-3xl mx-auto"
          style={{ color: colors.text }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          At the <a href='https://www.gov.uk/government/topical-events/ai-safety-summit-2023' target='_blank' rel='noopener noreferrer' style={{ color: colors.accent, textDecoration: 'underline' }}>2024 AI Safety Summit</a> in Seoul, sixteen leading tech organizations pledged to implement "red line" risk evaluation policies for frontier AI models. A year has passed, and very few have followed through. This tracker assesses their progress across the five key components of the Seoul commitment.
        </motion.p>
        <div className="flex flex-col lg:flex-row gap-8 mb-8">
          <div className="w-full lg:w-[400px] flex-shrink-0">
            <CompanyList 
              companies={companies} 
              selectedCompany={selectedCompany} 
              onSelectCompany={setSelectedCompany}
              averageScores={averageScores}
            />
          </div>
          <div className="flex-grow min-w-0">
            <AnimatePresence mode="wait">
              {selectedCompany ? (
                <motion.div
                  key={selectedCompany.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <DimensionGrid 
                    company={selectedCompany}
                    dimensions={[...dimensions, { id: 'overall', name: 'Overall' }]}
                    grades={grades[selectedCompany.id] || {}}
                    averageScore={averageScores[selectedCompany.id] || 0}
                  />
                </motion.div>
              ) : (
                <motion.div 
                  className="flex-grow flex items-center justify-center bg-white border border-gray-300 rounded-lg p-6 min-h-[300px]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                >
                  <p className="text-2xl text-center" style={{ color: colors.lightText }}>
                    Select a company to view its commitment progress
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        <KeySection />
        <SocialShare />
      </main>
    </motion.div>
  )
}

