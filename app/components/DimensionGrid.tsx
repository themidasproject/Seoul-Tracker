import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Company, Dimension } from '../types'
import { getGradeColor, getTintColor, darkenColor, colors } from '../utils/colors'
import { companyDescriptions, dimensionDescriptions } from '../db/scoreData'
import { Info, X, FileText } from 'lucide-react'

interface DimensionGridProps {
  company: Company
  dimensions: Dimension[]
  grades: Record<string, number>
  averageScore: number
}

export default function DimensionGrid({ company, dimensions, grades, averageScore }: DimensionGridProps) {
  const [selectedDimension, setSelectedDimension] = useState<string | null>(null)

  // Mapping for policy links based on company.id:
  // Anthropic -> RSP, Google -> FSF, and OpenAI -> PF.
  const policyLinks: Record<string, { label: string; url: string }> = {
    anthropic: { label: 'Read the policy', url: 'https://assets.anthropic.com/m/24a47b00f10301cd/original/Anthropic-Responsible-Scaling-Policy-2024-10-15.pdf' },
    google: { label: 'Read the policy', url: 'https://storage.googleapis.com/deepmind-media/DeepMind.com/Blog/introducing-the-frontier-safety-framework/fsf-technical-report.pdf' },
    openai: { label: 'Read the policy', url: 'https://cdn.openai.com/openai-preparedness-framework-beta.pdf' },
    meta: { label: 'Read the policy', url: 'https://ai.meta.com/static-resource/meta-frontier-ai-framework/' },
    naver: { label: 'Read the policy', url: 'https://clova.ai/en/tech-blog/en-navers-ai-safety-framework-asf' },
    g42: {label: 'Read the policy', url: 'https://www.g42.ai/application/files/9517/3882/2182/G42_Frontier_Safety_Framework_Publication_Version.pdf'},
    cohere: {label: 'Read the policy', url: 'https://cohere.com/security/the-cohere-secure-ai-frontier-model-framework-february-2025.pdf'},
    microsoft: {label: 'Read the policy', url: 'https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/microsoft/msc/documents/presentations/CSR/Frontier-Governance-Framework.pdf'},
  }
  const policy = policyLinks[company.id.toLowerCase()]

  const getScoreDescription = (score: number) => {
    switch(score) {
      case 5: return "Comprehensive public documentation of implementation with specific details and examples"
      case 4: return "Clear public evidence of implementation with some details"
      case 3: return "Basic public acknowledgment of implementation with limited details"
      case 2: return "Vague public statements about implementation without specifics"
      case 1: return "No public evidence of implementation"
      default: return "Not applicable"
    }
  }

  const formatScore = (score: number, isDimensionScore: boolean) => {
    if (score === 1) return '❌'
    if (score === 0) return 'N/A'
    
    if (isDimensionScore) {
      return (
        <>
          <span 
            className="text-base sm:text-lg font-bold tabular-nums lining-nums"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            {Math.round(score)}
          </span>
          <span className="text-xs sm:text-sm text-gray-500 ml-1">/&nbsp;5</span>
        </>
      )
    }
    return (
      <span 
        className="font-bold tabular-nums lining-nums"
        style={{ fontFamily: 'Georgia, serif' }}
      >
        {score.toFixed(1)}
      </span>
    )
  }

  return (
    <motion.div 
      className="w-full bg-white/95 backdrop-blur-md border border-gray-200 rounded-xl p-6 relative flex flex-col overflow-hidden shadow-sm"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-center text-gray-900">
        {company.name} Commitment Progress
      </h2>
      
      <div className="relative flex-1">
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4 mb-4 sm:mb-6 mx-auto w-full"
          style={{ maxWidth: '900px' }}
        >
          {dimensions.map((dimension, index) => {
            const score = dimension.id === 'overall' ? averageScore : (grades[dimension.id] || 0)
            const gradeColor = getGradeColor(score)
            const backgroundColor = getTintColor(gradeColor)

            return (
              <div key={dimension.id} className="relative">
                <div
                  className={`w-full relative border border-gray-300 rounded-lg overflow-hidden max-w-[225px] mx-auto shadow-sm transition-all duration-200 ${dimension.id !== 'overall' ? 'hover:-translate-y-1 hover:shadow-md' : ''}`}
                  style={{ height: '85px', minHeight: '85px' }}
                  {...(dimension.id !== 'overall' ? {
                    onClick: () => setSelectedDimension(dimension.id),
                    role: "button",
                    tabIndex: 0
                  } : {})}
                >
                  <div 
                    className="absolute inset-0 flex flex-col"
                    style={{ backgroundColor }}
                  >
                    <div className="h-[50%] flex items-center justify-center px-2 sm:px-3">
                      <h3 className="font-semibold text-xs sm:text-sm text-center leading-tight text-gray-800">
                        {dimension.name}
                      </h3>
                    </div>
                    <motion.div 
                      className="h-[50%] flex items-center justify-center bg-white bg-opacity-60"
                      style={{ 
                        color: score === 1 ? colors.danger : gradeColor.text,
                        borderTop: '1px solid rgba(0,0,0,0.1)',
                        boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.05)'
                      }}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 + 0.2 }}
                    >
                      <div className="font-bold flex items-baseline">
                        {formatScore(score, dimension.id !== 'overall')}
                      </div>
                    </motion.div>
                  </div>
                  {dimension.id !== 'overall' && (
                    <div className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2">
                      <Info size={14} className="text-gray-500 hover:text-gray-700" />
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </motion.div>

        {/* Company-wide description box */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 mt-4 sm:mt-6">
          <div className="text-gray-700 text-sm leading-relaxed space-y-4">
            <div
              className="[&_a]:text-blue-600 [&_a]:underline [&_a]:font-medium [&_a]:hover:text-blue-700"
              dangerouslySetInnerHTML={{ 
                __html: companyDescriptions[company.id] 
              }} 
            />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedDimension && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black bg-opacity-50 flex items-start sm:items-center justify-center p-4 overflow-y-auto"
            style={{ 
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 50 
            }}
            onClick={() => setSelectedDimension(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-lg p-4 sm:p-6 w-full max-w-2xl my-4 sm:my-0 shadow-xl"
              style={{
                maxHeight: 'calc(100% - 2rem)',
                overflowY: 'auto'
              }}
              onClick={e => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900">
                    {dimensions.find(d => d.id === selectedDimension)?.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-gray-500 mt-1">
                    {grades[selectedDimension] === 0 ? 'N/A' : (
                      <span className="group relative">
                        Score: {Math.round(grades[selectedDimension] || 0)} / 5
                        <span className="invisible group-hover:visible absolute left-0 top-full mt-1 w-64 p-2 bg-gray-900 text-white text-xs rounded shadow-lg z-[100]">
                          {getScoreDescription(Math.round(grades[selectedDimension] || 0))}
                        </span>
                      </span>
                    )}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedDimension(null)}
                  className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
              
              <hr className="border-t border-gray-300 mb-4" />
              
              <div className={`text-gray-700 text-xs sm:text-sm leading-relaxed ${grades[selectedDimension] === 1 ? 'text-red-500' : ''}`}>
                <div 
                  className="[&_a]:text-blue-600 [&_a]:underline [&_a]:font-medium [&_a]:hover:text-blue-700 [&_h4]:text-sm [&_h4]:sm:text-base [&_h4]:font-semibold [&_h4]:text-gray-900 [&_h4]:mb-2 [&_ul]:ml-4 [&_ul]:list-disc [&_ul]:space-y-1 [&_p:not(:last-child)]:mb-4 [&_ul]:mb-4"
                  dangerouslySetInnerHTML={{ 
                    __html: dimensionDescriptions[company.id]?.[selectedDimension] || 
                           `No detailed information available for ${dimensions.find(d => d.id === selectedDimension)?.name}.`
                  }} 
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Subtle "Read the policy" button for Anthropic, Google, and OpenAI in the top right corner */}
      {policy && (
        <a 
          href={policy.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="absolute top-2 right-2 bg-white/80 px-2 py-1 rounded text-xs text-gray-500 hover:text-gray-800 transition-colors flex items-center"
        >
          <FileText size={14} className="mr-1" />
          {policy.label}
        </a>
      )}
    </motion.div>
  )
}

