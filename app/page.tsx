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
import Head from 'next/head'

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
    <>
      <Head>
        <title>Seoul Commitment Tracker</title>
        <meta name="description" content="Tracking whether AI companies are following through on their frontier safety commitments from Seoul 2024." />
        <meta name="keywords" content="AI, frontier models, risk assessment, safety, compliance" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <Header 
          onSelectCompany={setSelectedCompany}
          companies={companies}
          grades={grades}
        />
        
        <main className="container-width py-6 sm:py-8">
          <motion.p 
            className="text-lg text-center mb-6 max-w-4xl mx-auto px-4"
            style={{ color: colors.text }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            At the <a href='https://www.gov.uk/government/publications/frontier-ai-safety-commitments-ai-seoul-summit-2024/frontier-ai-safety-commitments-ai-seoul-summit-2024' target='_blank' rel='noopener noreferrer' style={{ color: colors.accent, textDecoration: 'underline' }}>2024 AI Safety Summit</a> in Seoul, South Korea, sixteen leading tech organizations pledged to implement "red line" risk evaluation policies for frontier AI models. The deadline has now arrived, but not everyone has lived up to their commitment. This tracker assesses progress across the five key components.
          </motion.p>
          <div className="flex flex-col lg:flex-row gap-8 mb-8">
            <div className="w-full lg:w-[400px] flex-shrink-0 px-3 sm:px-0">
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
      </div>
    </>
  )
}

