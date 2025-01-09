import { Company, Dimension, Grades } from '../types'

export const companies: Company[] = [
  { id: 'amazon', name: 'Amazon' },
  { id: 'anthropic', name: 'Anthropic' },
  { id: 'cohere', name: 'Cohere' },
  { id: 'google', name: 'Google' },
  { id: 'g42', name: 'G42' },
  { id: 'ibm', name: 'IBM' },
  { id: 'inflection', name: 'Inflection AI' },
  { id: 'meta', name: 'Meta' },
  { id: 'microsoft', name: 'Microsoft' },
  { id: 'mistral', name: 'Mistral AI' },
  { id: 'naver', name: 'Naver' },
  { id: 'openai', name: 'OpenAI' },
  { id: 'samsung', name: 'Samsung Electronics' },
  { id: 'tii', name: 'Technology Innovation Institute' },
  { id: 'xai', name: 'xAI' },
  { id: 'zhipu', name: 'Zhipu.ai' },
]

export const dimensions: Dimension[] = [
  { id: 'risk-evaluations', name: 'Risk Evaluation' },
  { id: 'risk-thresholds', name: 'Risk Thresholds' },
  { id: 'risk-mitigations', name: 'Risk Mitigations' },
  { id: 'halting-procedures', name: 'Halting Procedures' },
  { id: 'safety-investment', name: 'Safety Investment' }
]

export const grades: Grades = {
  amazon: { 'risk-evaluations': 2, 'risk-thresholds': 3, 'risk-mitigations': 2, 'halting-procedures': 3, 'safety-investment': 2 },
  anthropic: { 'risk-evaluations': 3, 'risk-thresholds': 4, 'risk-mitigations': 3, 'halting-procedures': 4, 'safety-investment': 3 },
  cohere: { 'risk-evaluations': 1, 'risk-thresholds': 1, 'risk-mitigations': 1, 'halting-procedures': 1, 'safety-investment': 1 },
  google: { 'risk-evaluations': 4, 'risk-thresholds': 3, 'risk-mitigations': 4, 'halting-procedures': 3, 'safety-investment': 4 },
  g42: { 'risk-evaluations': 1, 'risk-thresholds': 1, 'risk-mitigations': 1, 'halting-procedures': 1, 'safety-investment': 1 },
  ibm: { 'risk-evaluations': 1, 'risk-thresholds': 1, 'risk-mitigations': 1, 'halting-procedures': 1, 'safety-investment': 1 },
  inflection: { 'risk-evaluations': 1, 'risk-thresholds': 1, 'risk-mitigations': 1, 'halting-procedures': 1, 'safety-investment': 1 },
  meta: { 'risk-evaluations': 1, 'risk-thresholds': 1, 'risk-mitigations': 1, 'halting-procedures': 1, 'safety-investment': 1 },
  microsoft: { 'risk-evaluations': 1, 'risk-thresholds': 1, 'risk-mitigations': 1, 'halting-procedures': 1, 'safety-investment': 1 },
  mistral: { 'risk-evaluations': 1, 'risk-thresholds': 1, 'risk-mitigations': 1, 'halting-procedures': 1, 'safety-investment': 1 },
  naver: { 'risk-evaluations': 1, 'risk-thresholds': 1, 'risk-mitigations': 1, 'halting-procedures': 1, 'safety-investment': 1 },
  openai: { 'risk-evaluations': 3, 'risk-thresholds': 4, 'risk-mitigations': 3, 'halting-procedures': 3, 'safety-investment': 4 },
  samsung: { 'risk-evaluations': 1, 'risk-thresholds': 1, 'risk-mitigations': 1, 'halting-procedures': 1, 'safety-investment': 1 },
  tii: { 'risk-evaluations': 1, 'risk-thresholds': 1, 'risk-mitigations': 1, 'halting-procedures': 1, 'safety-investment': 1 },
  xai: { 'risk-evaluations': 1, 'risk-thresholds': 1, 'risk-mitigations': 1, 'halting-procedures': 1, 'safety-investment': 1 },
  zhipu: { 'risk-evaluations': 1, 'risk-thresholds': 1, 'risk-mitigations': 1, 'halting-procedures': 1, 'safety-investment': 1 },
}

export const companyDescriptions: Record<string, string> = {
  amazon: "Amazon has made moderate progress in implementing AI safety measures, particularly in risk assessment and mitigation. Their <a href='https://www.aboutamazon.com/news/ai/amazons-approach-to-responsible-ai' target='_blank' rel='noopener noreferrer'>responsible AI guidelines</a> outline key practices, though implementation details remain limited.",
  
  anthropic: "Anthropic demonstrates strong commitment to AI safety through comprehensive risk assessment and mitigation strategies. Their <a href='https://www.anthropic.com/news/anthropic-constitutional-ai' target='_blank' rel='noopener noreferrer'>Constitutional AI approach</a> and active involvement in AI safety research show industry-leading practices.",
  
  cohere: "Cohere has not yet publicly detailed their AI safety implementation measures. While they signed the commitment, specific actions and progress remain unclear. Their public communications focus on commercial applications rather than safety measures.",
  
  google: "Google shows strong implementation of AI safety measures across all categories. Their <a href='https://ai.google/responsibility/principles/' target='_blank' rel='noopener noreferrer'>AI Principles</a> and regular risk assessments demonstrate comprehensive safety practices, though some specific implementation details remain private.",
  
  g42: "G42's AI safety measures and implementation progress are not well documented publicly. While they have signed international commitments, there is limited transparency about their specific safety practices and risk assessment procedures.",
  
  ibm: "IBM has established general AI ethics principles but provides limited public information about specific safety implementation measures. Their <a href='https://www.ibm.com/artificial-intelligence/ethics' target='_blank' rel='noopener noreferrer'>AI Ethics Board</a> oversees development, though detailed safety protocols are not publicly available.",
  
  inflection: "Inflection AI has made public commitments to AI safety but has not extensively detailed their implementation measures. Their approach to risk assessment and mitigation strategies remains largely undisclosed.",
  
  meta: "Meta has developed AI safety guidelines and participates in industry collaborations, but provides limited public information about specific implementation measures. Their <a href='https://ai.meta.com/responsible-ai/' target='_blank' rel='noopener noreferrer'>Responsible AI practices</a> outline general principles.",
  
  microsoft: "Microsoft has established AI safety principles and collaborates on industry standards. Their <a href='https://www.microsoft.com/en-us/ai/responsible-ai' target='_blank' rel='noopener noreferrer'>Responsible AI Standards</a> provide a framework, though specific implementation details of safety measures are not fully public.",
  
  mistral: "Mistral AI has made initial commitments to AI safety but has not yet published detailed information about their implementation measures. Their approach to risk assessment and safety protocols remains to be fully documented.",
  
  naver: "Naver's AI safety implementation measures are not extensively documented in public sources. While they participate in international discussions, specific details about their safety practices and risk assessment procedures are limited.",
  
  openai: "OpenAI maintains strong safety measures across their AI development pipeline. Their <a href='https://openai.com/safety' target='_blank' rel='noopener noreferrer'>safety practices</a> include comprehensive risk assessment, clear safety thresholds, and active research in AI alignment. They regularly publish updates on safety practices and research findings.",
  
  samsung: "Samsung Electronics has made general commitments to AI ethics but provides limited public information about specific safety implementation measures. Their approach to AI risk assessment and mitigation strategies is not extensively documented.",
  
  tii: "Technology Innovation Institute's AI safety measures and implementation progress are not well documented publicly. While they participate in international initiatives, specific details about their safety practices remain limited.",
  
  xai: "xAI has made initial commitments to AI safety but has not yet published detailed information about their implementation measures. Their specific approach to risk assessment and safety protocols remains largely undocumented.",
  
  zhipu: "Zhipu.ai's AI safety implementation measures are not extensively documented in public sources. While they have signed international commitments, specific details about their safety practices and risk assessment procedures remain limited."
}

