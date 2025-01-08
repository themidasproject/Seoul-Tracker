import { motion } from 'framer-motion'
import { Company, Dimension } from '../types'
import { getGradeColor } from '../utils'

interface ScoreDetailsProps {
  company: Company
  dimension: Dimension
  grade: number
  description: string
  onClose: () => void
}

export default function ScoreDetails({ company, dimension, grade, description, onClose }: ScoreDetailsProps) {
  const getDimensionDescription = (dimensionId: string) => {
    switch (dimensionId) {
      case 'risk-assessment':
        return "Assessing risks posed by frontier models across the AI lifecycle, including before deployment and during training."
      case 'risk-thresholds':
        return "Setting thresholds for severe risks and assessing whether these thresholds have been breached."
      case 'risk-mitigation':
        return "Articulating how risk mitigations will be identified and implemented to keep risks within defined thresholds."
      case 'risk-processes':
        return "Setting explicit processes to follow if a model or system poses risks that meet or exceed pre-defined thresholds."
      case 'continuous-improvement':
        return "Continually investing in advancing their ability to implement risk assessment, thresholds definition, and mitigation effectiveness."
      default:
        return "Details about this dimension are not available."
    }
  }

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-gray-800 rounded-lg p-6 max-w-md w-full"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-300">{company.name} - {dimension.name}</h2>
        <p className="text-gray-400 mb-4">
          {getDimensionDescription(dimension.id)}
        </p>
        <div className={`text-5xl font-bold mb-4 p-4 rounded-lg text-center ${getGradeColor(grade)}`}>
          {grade}/5
        </div>
        <p className="text-gray-400 mb-6">
          {description}
        </p>
        <p className="text-gray-400 mb-6">
          {grade <= 2 ? 'Poor performance. Significant improvements needed.' :
           grade <= 4 ? 'Average performance. Room for improvement.' :
           'Excellent performance. Industry-leading practices.'}
        </p>
        <button
          className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors"
          onClick={onClose}
        >
          Close
        </button>
      </motion.div>
    </motion.div>
  )
}

