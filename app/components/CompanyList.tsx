import { motion } from 'framer-motion'
import { Company } from '../types'
import { getGradeColor, /* getTintColor, */ darkenColor, colors } from '../utils/colors'
import { CheckCircle, AlertCircle, X, ChevronUp, ChevronDown } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { policyStatuses } from '../db/scoreData'

// Helper: Lighten a hex color by mixing it with white. 
//  factor is a number from 0 (no change) to 1 (completely white)
function lightenColor(hex: string, factor: number): string {
  if (hex.startsWith('#')) {
    hex = hex.slice(1)
  }
  if (hex.length === 3) {
    hex = hex.split('').map(c => c + c).join('')
  }
  const num = parseInt(hex, 16)
  let r = (num >> 16) & 0xff
  let g = (num >> 8) & 0xff
  let b = num & 0xff
  // Increase each channel toward 255 (white)
  r = Math.round(r + (255 - r) * factor)
  g = Math.round(g + (255 - g) * factor)
  b = Math.round(b + (255 - b) * factor)
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`
}

// New helper to convert a numeric score into a letter grade with plus/minus modifiers.
// For scores in the ranges below:
// F: [0,1)
// D: [1,2) where 1.0-1.2 = D-, 1.3-1.6 = D, 1.7-2.0 = D+
// C: [2,3) where 2.0-2.2 = C-, 2.3-2.6 = C, 2.7-3.0 = C+
// B: [3,4) where 3.0-3.2 = B-, 3.3-3.6 = B, 3.7-4.0 = B+
// A: [4,5] where 4.0-4.2 = A-, 4.3-4.6 = A, 4.7-5 = A+
function getLetterGrade(score: number): string {
  if (score <= 1) {
    return "F";
  }

  let remainder: number;
  if (score < 2) {
    remainder = score - 1;
    if (remainder < 0.3) return "D-";
    else if (remainder < 0.7) return "D";
    else return "D+";
  } else if (score < 3) {
    remainder = score - 2;
    if (remainder < 0.3) return "C-";
    else if (remainder < 0.7) return "C";
    else return "C+";
  } else if (score < 4) {
    remainder = score - 3;
    if (remainder < 0.3) return "B-";
    else if (remainder < 0.7) return "B";
    else return "B+";
  } else { // score between 4 and 5
    remainder = score - 4;
    if (remainder < 0.3) return "A-";
    else if (remainder < 0.7) return "A";
    else return "A+";
  }
}

interface CompanyListProps {
  companies: Company[]
  selectedCompany: Company | null
  onSelectCompany: (company: Company) => void
  averageScores: Record<string, number>
}

export default function CompanyList({ companies, selectedCompany, onSelectCompany, averageScores }: CompanyListProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollUp, setCanScrollUp] = useState(false)
  const [canScrollDown, setCanScrollDown] = useState(false)

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current
      setCanScrollUp(scrollTop > 0)
      setCanScrollDown(scrollTop < scrollHeight - clientHeight - 1)
    }
  }

  useEffect(() => {
    const scrollEl = scrollRef.current
    if (scrollEl) {
      checkScroll()
      scrollEl.addEventListener('scroll', checkScroll)
      window.addEventListener('resize', checkScroll)
      
      const observer = new MutationObserver(checkScroll)
      observer.observe(scrollEl, { childList: true, subtree: true })

      return () => {
        scrollEl.removeEventListener('scroll', checkScroll)
        window.removeEventListener('resize', checkScroll)
        observer.disconnect()
      }
    }
  }, [companies])

  const arrowVariants = {
    bounce: {
      y: [0, -6, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  const sortedCompanies = companies.sort((a, b) => {
    const scoreA = averageScores[a.id] || 0
    const scoreB = averageScores[b.id] || 0
    return scoreB - scoreA
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        duration: 0.5, 
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    }
  }
  
  // Returns icons based on policy status with slightly darker colors.
  const getStatusIcon = (companyId: string) => {
    const status = policyStatuses[companyId]
    switch (status) {
      case 'full':
        return <CheckCircle size={16} className="mr-1" style={{ color: darkenColor(colors.success, 0.2) }} />
      case 'partial':
        return <AlertCircle size={16} className="mr-1" style={{ color: darkenColor(colors.warning, 0.2) }} />
      case 'none':
        return <X size={16} className="mr-1" style={{ color: darkenColor(colors.danger, 0.2) }} />
      default:
        return null
    }
  }

  return (
    <motion.div 
      className="w-full bg-white/95 backdrop-blur-md border border-gray-200 rounded-xl overflow-hidden flex flex-col shadow-sm"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h2 className="text-xl font-bold p-4 text-center border-b border-gray-100 bg-gray-50/50">
        Companies
      </h2>
      
      <div className="relative flex-1">
        {canScrollUp && (
          <div
            className="absolute top-0 left-0 right-0 h-8 z-10 pointer-events-none"
            style={{
              background: 'linear-gradient(to top, transparent, rgba(255,255,255,0.9))'
            }}
          >
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 top-1"
              variants={arrowVariants}
              animate="bounce"
            >
              <ChevronUp size={20} className="text-gray-400" />
            </motion.div>
          </div>
        )}

        <div
          ref={scrollRef}
          className="overflow-y-auto overflow-x-hidden"
          style={{ height: '400px' }}
          onScroll={checkScroll}
        >
          {sortedCompanies.map((company) => {
            const score = averageScores[company.id] || 0
            const status = policyStatuses[company.id]
            const statusColor = status === 'none'
              ? colors.danger
              : status === 'partial'
              ? colors.warning
              : colors.success

            // Adjusted lightening factor to 0.85 for a balance between light and visible
            const backgroundColor = lightenColor(statusColor, 0.85)

            return (
              <motion.button
                key={company.id}
                className={`w-full text-left px-4 py-3 border-b last:border-b-0 border-gray-200 flex items-center justify-between ${
                  selectedCompany?.id === company.id 
                    ? 'ring-2 ring-inset ring-gray-300'
                    : ''
                }`}
                style={{
                  backgroundColor: selectedCompany?.id === company.id 
                    ? darkenColor(backgroundColor, 0.05) 
                    : backgroundColor,
                }}
                onClick={() => onSelectCompany(company)}
                whileHover={{ 
                  backgroundColor: darkenColor(backgroundColor, 0.02),
                  transition: { duration: 0.1 }
                }}
                variants={itemVariants}
              >
                <span className="font-medium" style={{ color: colors.text }}>
                  {company.name}
                </span>
                {/* Adjusted negative margin to -mr-6 */}
                <div className="flex items-center justify-end -mr-6">
                  {getStatusIcon(company.id)}
                  <div className="w-12 text-left">
                    <motion.span 
                      className="font-bold font-lora"
                      style={{ color: darkenColor(statusColor, 0.2) }}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      {getLetterGrade(score)}
                    </motion.span>
                  </div>
                </div>
              </motion.button>
            )
          })}
        </div>

        {canScrollDown && (
          <div
            className="absolute bottom-0 left-0 right-0 h-8 z-10 pointer-events-none"
            style={{
              background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.9))'
            }}
          >
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 bottom-1"
              variants={arrowVariants}
              animate="bounce"
            >
              <ChevronDown size={20} className="text-gray-400" />
            </motion.div>
          </div>
        )}
      </div>
    </motion.div>
  )
}

