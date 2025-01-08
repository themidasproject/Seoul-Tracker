import { motion } from 'framer-motion'
import { Company } from '../types'
import { getGradeColor, getTintColor, darkenColor, colors } from '../utils/colors'
import { CheckCircle, AlertCircle, X } from 'lucide-react'

interface CompanyListProps {
  companies: Company[]
  selectedCompany: Company | null
  onSelectCompany: (company: Company) => void
  averageScores: Record<string, number>
}

export default function CompanyList({ companies, selectedCompany, onSelectCompany, averageScores }: CompanyListProps) {
  const sortedCompanies = companies
    .sort((a, b) => {
      const scoreA = averageScores[a.id] || 0;
      const scoreB = averageScores[b.id] || 0;
      return scoreB - scoreA;
    });

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
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    }
  };

  const getStatusIcon = (score: number) => {
    if (score > 3) {
      return <CheckCircle size={16} className="mr-2" style={{ color: colors.success }} />;
    } else if (score > 2) {
      return <AlertCircle size={16} className="mr-2" style={{ color: colors.warning }} />;
    } else if (score === 1) {
      return <X size={16} className="mr-2" style={{ color: colors.danger }} />;
    }
    return null;
  };

  return (
    <motion.div 
      className="w-full lg:w-1/3 bg-white border border-gray-300 rounded-lg overflow-hidden flex flex-col shadow-sm"
      style={{ height: 'auto', maxHeight: 'calc(50vh - 2rem)' }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2 
        className="text-xl font-bold p-4 border-b border-gray-300"
        style={{ color: colors.primary }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        Companies
      </motion.h2>
      <motion.div 
        className="flex-grow overflow-y-auto"
        style={{ maxHeight: 'calc(50vh - 6rem)' }}
      >
        {sortedCompanies.map((company) => {
          const score = averageScores[company.id] || 0
          const gradeColor = getGradeColor(score);
          const backgroundColor = getTintColor(gradeColor);
          const hoverBackgroundColor = darkenColor(gradeColor.background, 0.1);
          return (
            <motion.button
              key={company.id}
              className={`w-full text-left px-4 py-3 border-b border-gray-200 flex items-center justify-between ${
                selectedCompany?.id === company.id
                  ? 'bg-blue-100'
                  : ''
              }`}
              style={{
                backgroundColor: selectedCompany?.id === company.id ? colors.accent + '20' : backgroundColor,
              }}
              onClick={() => onSelectCompany(company)}
              whileHover={{ 
                backgroundColor: selectedCompany?.id === company.id ? colors.accent + '30' : darkenColor(backgroundColor, 0.1),
                scale: 1.01,
                transition: { duration: 0.1 }
              }}
              variants={itemVariants}
            >
              <span className="font-medium" style={{ color: colors.text }}>{company.name}</span>
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
      </motion.div>
    </motion.div>
  )
}

