import Link from 'next/link'
import Image from 'next/image'
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
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          <a 
            href="https://www.themidasproject.com" 
            className="flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/logo.png"
              alt="Logo"
              width={50}
              height={50}
              className="rounded-full"
              priority
            />
          </a>
          
          <h1 className="text-2xl lg:text-4xl font-bold text-center" style={{ color: colors.primary }}>
            "Red Line" AI Risk Evaluation Tracker
          </h1>
          
          <div className="w-[50px] invisible lg:block">
            {/* This is an empty div to balance the layout on desktop */}
          </div>
        </div>
      </div>
    </motion.header>
  )
}

