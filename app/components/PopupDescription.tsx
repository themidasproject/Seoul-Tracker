import { motion } from 'framer-motion'
import { Company, Dimension } from '../types'
import { getGradeColor, colors } from '../utils'

interface PopupDescriptionProps {
  company: Company
  dimension: Dimension
  grade: number
  description: string
  onClose: () => void
}

export default function PopupDescription({ company, dimension, grade, description, onClose }: PopupDescriptionProps) {
  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="bg-white rounded-lg p-6 max-w-md w-full shadow-lg"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        transition={{ duration: 0.2 }}
      >
        <h2 className="text-2xl font-bold mb-4">{company.name} - {dimension.name}</h2>
        <p 
          className="mb-4 [&_a]:text-[#63b3ed] [&_a]:underline"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <motion.div 
          className="text-3xl font-bold mb-4 text-center"
          style={{ color: getGradeColor(grade).text }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          Grade: {grade === 1 ? '❌' : `${grade}/5`}
        </motion.div>
        <motion.button
          className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors w-full"
          onClick={onClose}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Close
        </motion.button>
      </motion.div>
    </motion.div>
  )
}

