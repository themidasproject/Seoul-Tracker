import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Company, Dimension, DimensionGridProps } from '../types'
import { getGradeColor, getTintColor, darkenColor, colors } from '../utils/colors'
import PopupDescription from './PopupDescription'

export default function DimensionGrid({ company, dimensions, grades, descriptions, averageScore }: DimensionGridProps) {
  const [selectedDimension, setSelectedDimension] = useState<Dimension | null>(null)

  return (
    <motion.div 
      className="flex-grow bg-background border border-gray-300 rounded-lg p-6 relative flex flex-col"
      style={{ height: 'calc(50vh - 2rem)', minHeight: '300px' }}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-2xl font-bold mb-6">{company.name} Commitment Progress</h2>
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 flex-grow overflow-y-auto"
        style={{ height: '100%' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        {dimensions.map((dimension, index) => {
          const score = dimension.id === 'overall' ? averageScore : (grades[dimension.id] || 0)
          const gradeColor = getGradeColor(score);
          const backgroundColor = getTintColor(gradeColor);
          const hoverBackgroundColor = darkenColor(gradeColor.background, 0.1);
          return (
            <motion.button
              key={dimension.id}
              className="p-2 sm:p-3 border border-gray-300 rounded-lg text-center flex flex-col justify-center items-center"
              style={{
                backgroundColor: backgroundColor,
                minHeight: '80px',
              }}
              onClick={() => setSelectedDimension(dimension)}
              whileHover={{ 
                scale: 1.01, 
                backgroundColor: darkenColor(backgroundColor, 0.1), 
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
                transition: { duration: 0.1 }
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <h3 className="font-bold mb-1 text-xs sm:text-sm">{dimension.name}</h3>
              <motion.div 
                className="text-lg sm:text-xl md:text-2xl font-bold"
                style={{ color: score === 1 ? colors.danger : gradeColor.text }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 + 0.2 }}
              >
                {score === 1 ? '❌' : (score !== 0 ? score.toFixed(1) : 'N/A')}
              </motion.div>
            </motion.button>
          )
        })}
      </motion.div>
      <AnimatePresence>
        {selectedDimension && (
          <PopupDescription
            company={company}
            dimension={selectedDimension}
            grade={selectedDimension.id === 'overall' ? averageScore : (grades[selectedDimension.id] || 0)}
            description={selectedDimension.id === 'overall' ? 'Average score across all categories' : (descriptions[selectedDimension.id] || 'No description available.')}
            onClose={() => setSelectedDimension(null)}
          />
        )}
      </AnimatePresence>
    </motion.div>
  )
}

