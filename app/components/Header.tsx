import Link from 'next/link'
import { motion } from 'framer-motion'
import { colors } from '../utils/colors'

export default function Header() {
  return (
    <motion.header 
      className="bg-white border-b border-gray-300 shadow-sm"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-gray-500 text-xl font-bold">L</span>
          </div>
          <span className="sr-only">Home</span>
        </Link>
        <h1 className="text-4xl font-bold text-center" style={{ color: colors.primary }}>
          Seoul Summit AI Commitment Tracker
        </h1>
        <div className="w-10 h-10 invisible">
          {/* This is an empty div to balance the layout */}
        </div>
      </div>
    </motion.header>
  )
}

