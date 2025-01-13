import { motion } from 'framer-motion'
import { Company, Dimension } from '../types'
import { getGradeColor, getTintColor, darkenColor, colors } from '../utils/colors'
import { companyDescriptions } from '../db/scoreData'

interface DimensionGridProps {
  company: Company
  dimensions: Dimension[]
  grades: Record<string, number>
  averageScore: number
}

export default function DimensionGrid({ company, dimensions, grades, averageScore }: DimensionGridProps) {
  return (
    <motion.div 
      className="w-full bg-background border border-gray-300 rounded-lg p-6 relative flex flex-col min-h-[40vh]"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-2xl font-bold mb-4 text-center">
        {company.name} Commitment Progress
      </h2>
      
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6 mx-auto w-full"
        style={{ maxWidth: '900px' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        {dimensions.map((dimension, index) => {
          const score = dimension.id === 'overall' ? averageScore : (grades[dimension.id] || 0)
          const gradeColor = getGradeColor(score);
          const backgroundColor = getTintColor(gradeColor);
          return (
            <div
              key={dimension.id}
              className="relative border border-gray-300 rounded-lg overflow-hidden max-w-[250px] w-full mx-auto shadow-sm"
              style={{
                height: '100px',
              }}
            >
              <div 
                className="absolute inset-0 flex flex-col"
                style={{ backgroundColor }}
              >
                <div className="flex-1 flex items-center justify-center px-3 pt-3">
                  <h3 className="font-bold text-sm text-center leading-tight">
                    {dimension.name}
                  </h3>
                </div>
                <motion.div 
                  className="h-[45%] flex items-center justify-center bg-white bg-opacity-60"
                  style={{ 
                    color: score === 1 ? colors.danger : gradeColor.text,
                    borderTop: '1px solid rgba(0,0,0,0.1)',
                    boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.05)'
                  }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 + 0.2 }}
                >
                  <span className="text-lg sm:text-xl font-bold">
                    {score === 1 ? '❌' : (score !== 0 ? score.toFixed(1) : 'N/A')}
                  </span>
                </motion.div>
              </div>
            </div>
          )
        })}
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.4 }}
        className="bg-gray-50 rounded-lg p-4 border border-gray-200 max-w-3xl mx-auto"
      >
        <motion.p 
          className="text-gray-600 text-sm leading-relaxed [&_a]:text-[#63b3ed] [&_a]:underline"
          dangerouslySetInnerHTML={{ __html: companyDescriptions[company.id] }}
        />
      </motion.div>
    </motion.div>
  )
}

