import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { colors } from '../utils/colors'

const riskCategories = [
  {
    id: 'risk-assessment',
    name: 'Risk Assessment',
    description: 'Assess risks posed by frontier AI models across the AI lifecycle, including before deployment and during training. Consider model capabilities, context, and efficacy of risk mitigations. Include internal and external evaluations.'
  },
  {
    id: 'risk-thresholds',
    name: 'Risk Thresholds',
    description: 'Set thresholds for severe, intolerable risks. Monitor for threshold breaches. Define thresholds with input from trusted actors and align with international agreements. Explain threshold decisions and provide examples of intolerable risk situations.'
  },
  {
    id: 'risk-mitigation',
    name: 'Risk Mitigation',
    description: 'Articulate how risk mitigations will be identified and implemented to keep risks within defined thresholds. Include safety and security-related mitigations such as modifying system behaviors and implementing robust security controls.'
  },
  {
    id: 'risk-processes',
    name: 'Risk Processes',
    description: 'Set explicit processes for when risks meet or exceed pre-defined thresholds. Develop and deploy systems only if residual risks stay below thresholds. Commit to not developing or deploying a model if risks cannot be adequately mitigated.'
  },
  {
    id: 'continuous-improvement',
    name: 'Continuous Improvement',
    description: 'Continually invest in advancing ability to implement risk assessment, thresholds definition, and mitigation effectiveness. Assess and monitor mitigation adequacy and identify additional mitigations as needed. Contribute to and consider best practices, standards, and science in AI risk management.'
  }
]

const scoreDescriptions = [
  { score: 1, description: 'No public evidence of implementation' },
  { score: 2, description: 'Limited or partial implementation' },
  { score: 3, description: 'Adequate implementation' },
  { score: 4, description: 'Strong implementation' },
  { score: 5, description: 'Exceptional implementation, going above and beyond' }
]

export default function KeySection() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div 
      className="bg-white border border-gray-300 rounded-lg p-4 mb-8 relative z-10 shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <motion.button
        className="w-full flex justify-between items-center text-xl font-bold"
        onClick={() => setIsExpanded(!isExpanded)}
        style={{
          color: colors.primary
        }}
      >
        Key and Methodology
        {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
      </motion.button>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4"
          >
            <h3 className="text-lg font-bold mb-2" style={{ color: colors.primary }}>Key Commitment Areas</h3>
            {riskCategories.map((category, index) => (
              <motion.div 
                key={category.id} 
                className="mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <h4 className="font-bold" style={{ color: colors.secondary }}>{category.name}</h4>
                <p className="text-sm" style={{ color: colors.text }}>{category.description}</p>
              </motion.div>
            ))}
            <h3 className="text-lg font-bold mt-6 mb-2" style={{ color: colors.primary }}>Implementation Scoring System</h3>
            {scoreDescriptions.map((item, index) => (
              <motion.div 
                key={item.score} 
                className="mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <span className="font-bold" style={{ color: colors.secondary }}>{item.score}: </span>
                <span className="text-sm" style={{ color: colors.text }}>{item.description}</span>
              </motion.div>
            ))}
            <h3 className="text-lg font-bold mt-6 mb-2" style={{ color: colors.primary }}>Methodology</h3>
            <motion.p 
              className="text-sm mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              style={{ color: colors.text }}
            >
              This analysis is based on internal research conducted by <a href='https://example.com/midas-project' target='_blank' rel='noopener noreferrer' style={{ color: colors.accent, textDecoration: 'underline' }}>The Midas Project</a> using publicly available sources, including company announcements and third-party reporting. Our research cannot be comprehensive, and we do not have insight into internal practices at these companies. Therefore, this tracker should be viewed as an estimate based on public information, not a definitive assessment. The Midas Project is not liable for any decisions made based on this information.
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

