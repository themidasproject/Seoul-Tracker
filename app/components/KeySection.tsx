import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { colors } from '../utils/colors'

const riskCategories = [
  {
    id: 'risk-evaluations',
    name: 'Risk Evaluation',
    description: 'Companies must assess risks across the entire AI lifecycle, including pre-deployment and training phases. As specified in the commitments, "risk assessments should consider model capabilities and the context in which they are developed and deployed, as well as the efficacy of implemented mitigations." This requires: (1) evaluation of model capabilities, (2) consideration of development and deployment context, (3) assessment of mitigation efficacy, and (4) incorporation of both internal and external evaluations.'
  },
  {
    id: 'risk-thresholds',
    name: 'Risk Thresholds',
    description: 'Organizations must explicitly define thresholds for intolerable risks. The commitments specify that "these thresholds should be defined with input from trusted actors and be accompanied by an explanation of how thresholds were decided upon." Requirements include: (1) clear threshold definitions, (2) monitoring procedures, (3) documentation of threshold determination, and (4) specific examples of intolerable risk scenarios.'
  },
  {
    id: 'risk-mitigations',
    name: 'Risk Mitigations',
    description: 'Companies must "articulate how risk mitigations will be identified and implemented, including safety and security-related risk mitigations." These mitigations include: (1) modification of system behaviors and (2) robust security controls for unreleased model weights.'
  },
  {
    id: 'halting-procedures',
    name: 'Halting Procedures',
    description: 'Organizations must establish explicit processes for responding to threshold-exceeding risks. The commitments state that "in the extreme, organisations commit not to develop or deploy a model or system at all, if mitigations cannot be applied to keep risks below the thresholds." This requires: (1) risk response procedures, (2) deployment criteria, and (3) conditions for complete halting.'
  },
  {
    id: 'safety-investment',
    name: 'Safety Investment',
    description: 'Companies must "continually invest in advancing their ability to implement commitments 1 – 4, including risk assessment and identification, thresholds definition, and mitigation effectiveness." This requires: (1) continuous monitoring of mitigation adequacy, (2) identification of new mitigations, and (3) incorporation of emerging best practices, international standards, and science on AI risk identification, assessment, and mitigations.'
  }
]

export default function KeySection() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div 
      onClick={() => !isExpanded && setIsExpanded(true)}
      className={`bg-white/95 backdrop-blur-md border border-gray-200 rounded-xl px-6 pt-6 ${isExpanded ? 'pb-6' : 'pb-6'} mt-8 shadow-sm`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      role="button"
      aria-expanded={isExpanded}
      aria-controls="methodology-content"
    >
      <div
        onClick={(e) => {
          e.stopPropagation()
          setIsExpanded(!isExpanded)
        }}
        className="w-full flex items-center justify-between text-lg font-bold cursor-pointer"
        style={{ color: colors.primary }}
      >
        <span>Methodology & Scoring Key</span>
        {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            id="methodology-content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden text-sm mt-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-8">
              {/* Introduction */}
              <div>
                <p className="text-gray-600 leading-relaxed mb-4 [&_a]:text-[#63b3ed] [&_a]:underline [&_a]:hover:opacity-80 [&_a]:transition-opacity">
                  This tracker monitors implementation of the <a href="https://www.gov.uk/government/publications/frontier-ai-safety-commitments-ai-seoul-summit-2024/frontier-ai-safety-commitments-ai-seoul-summit-2024" target="_blank" rel="noopener noreferrer">Frontier AI Safety Commitments</a> made at the 2024 AI Safety Summit in Seoul. The five categories below correspond directly to the five components of Outcome 1 as described in the commitment document. These commitments represent public promises made by leading AI companies to world governments and the global community, establishing expectations for transparency and responsible development of frontier AI systems.
                </p>
                <p className="text-gray-600 leading-relaxed [&_a]:text-[#63b3ed] [&_a]:underline [&_a]:hover:opacity-80 [&_a]:transition-opacity">
                  In February 2025, four new companies joined the list of companies that have publicly committed to the Seoul commitments: Magic, Minimax, 01.ai, and Nvidia. They have not yet been added to this tracker to ensure they have adequate time to produce a compliant risk assessment policy.
                </p>
              </div>

              {/* Scoring System */}
              <div>
                <h3 className="font-bold text-lg mb-3 text-gray-800">Scoring System</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li><span className="font-semibold">5.0:</span> Comprehensive public documentation of implementation with specific details and examples</li>
                  <li><span className="font-semibold">4.0:</span> Clear public evidence of implementation with some details</li>
                  <li><span className="font-semibold">3.0:</span> Basic public acknowledgment of implementation with limited details</li>
                  <li><span className="font-semibold">2.0:</span> Vague public statements about implementation without specifics</li>
                  <li><span className="font-semibold">1.0:</span> No public evidence of implementation</li>
                </ul>
              </div>

              {/* Categories */}
              <div>
                <h3 className="font-bold text-lg mb-3 text-gray-800">Assessment Categories</h3>
                <div className="space-y-4">
                  {riskCategories.map((category) => (
                    <div key={category.id} className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
                      <h4 className="font-bold text-gray-700 mb-2">{category.name}</h4>
                      <p className="text-gray-600 leading-relaxed">{category.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Methodology */}
              <div>
                <h3 className="font-bold text-lg mb-3 text-gray-800">Methodology</h3>
                <div className="space-y-3 text-gray-600 leading-relaxed [&_a]:text-[#63b3ed] [&_a]:underline [&_a]:hover:opacity-80 [&_a]:transition-opacity">
                  <p>
                    This analysis is based on internal research conducted by <a href="https://www.themidasproject.com" target="_blank" rel="noopener noreferrer">The Midas Project</a> using publicly available sources, including company announcements and third-party reporting. Our research cannot be comprehensive, and we do not have insight into internal practices at these companies. Therefore, this tracker should be viewed as an estimate based on public information, not a definitive assessment.
                  </p>
                </div>
              </div>

              {/* Changelog */}
              <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-100">
                <h3 className="font-bold text-lg mb-3 text-gray-800">Changelog</h3>
                <div className="space-y-3">
                  <p className="text-gray-600 text-sm">This tracker will be updated as new information emerges about companies' implementation of the Seoul commitments.</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li className="text-gray-700">
                      <span className="font-medium">February 10th, 2025:</span>
                      <span className="ml-2 text-gray-600">Initial publication</span>
                    </li>
                    <li className="text-gray-700">
                      <span className="font-medium">February 10th, 2025:</span>
                      <span className="ml-2 text-gray-600">Updated xAI to include newly released policy, and Google to include updates made to Frontier Safety Framework. Also made minor changes to OpenAI for accuracy and consistency.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

