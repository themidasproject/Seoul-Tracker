import { motion } from 'framer-motion'
import { Company } from '../types'
import { getGradeColor, getTintColor, darkenColor, colors } from '../utils/colors'
import { CheckCircle, AlertCircle, X, ChevronUp, ChevronDown } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

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

  const sortedCompanies = companies
    .sort((a, b) => {
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

  const getStatusIcon = (score: number) => {
    if (score > 2) {
      return <CheckCircle size={16} className="mr-2" style={{ color: colors.success }} />
    } else if (score > 1) {
      return <AlertCircle size={16} className="mr-2" style={{ color: colors.warning }} />
    } else if (score === 1) {
      return <X size={16} className="mr-2" style={{ color: colors.danger }} />
    }
    return null
  }

  return (
    <motion.div 
      className="w-full bg-white border border-gray-300 rounded-lg overflow-hidden flex flex-col shadow-sm"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h2 className="text-xl font-bold p-4 text-center border-b border-gray-200">
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
          className="overflow-y-auto"
          style={{ maxHeight: '40vh' }}
          onScroll={checkScroll}
        >
          {sortedCompanies.map((company) => {
            const score = averageScores[company.id] || 0
            const gradeColor = getGradeColor(score)
            const backgroundColor = getTintColor(gradeColor)
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
                    ? darkenColor(backgroundColor, 0.2) 
                    : backgroundColor,
                }}
                onClick={() => onSelectCompany(company)}
                whileHover={{ 
                  backgroundColor: darkenColor(backgroundColor, 0.15),
                  transition: { duration: 0.1 }
                }}
                variants={itemVariants}
              >
                <span className="font-medium" style={{ color: colors.text }}>
                  {company.name}
                </span>
                <div className="flex items-center">
                  {getStatusIcon(score)}
                  <motion.span 
                    className="font-bold"
                    style={{ color: score === 1 ? colors.danger : gradeColor.text }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    {score.toFixed(1)}
                  </motion.span>
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

