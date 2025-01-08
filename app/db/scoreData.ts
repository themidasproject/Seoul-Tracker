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
  { id: 'risk-assessment', name: 'Risk Assessment' },
  { id: 'risk-thresholds', name: 'Risk Thresholds' },
  { id: 'risk-mitigation', name: 'Risk Mitigation' },
  { id: 'risk-processes', name: 'Risk Processes' },
  { id: 'continuous-improvement', name: 'Continuous Improvement' },
]

export const grades: Grades = {
  amazon: { 'risk-assessment': 2, 'risk-thresholds': 3, 'risk-mitigation': 2, 'risk-processes': 3, 'continuous-improvement': 2 },
  anthropic: { 'risk-assessment': 3, 'risk-thresholds': 4, 'risk-mitigation': 3, 'risk-processes': 4, 'continuous-improvement': 3 },
  cohere: { 'risk-assessment': 1, 'risk-thresholds': 1, 'risk-mitigation': 1, 'risk-processes': 1, 'continuous-improvement': 1 },
  google: { 'risk-assessment': 4, 'risk-thresholds': 3, 'risk-mitigation': 4, 'risk-processes': 3, 'continuous-improvement': 4 },
  g42: { 'risk-assessment': 1, 'risk-thresholds': 1, 'risk-mitigation': 1, 'risk-processes': 1, 'continuous-improvement': 1 },
  ibm: { 'risk-assessment': 1, 'risk-thresholds': 1, 'risk-mitigation': 1, 'risk-processes': 1, 'continuous-improvement': 1 },
  inflection: { 'risk-assessment': 1, 'risk-thresholds': 1, 'risk-mitigation': 1, 'risk-processes': 1, 'continuous-improvement': 1 },
  meta: { 'risk-assessment': 1, 'risk-thresholds': 1, 'risk-mitigation': 1, 'risk-processes': 1, 'continuous-improvement': 1 },
  microsoft: { 'risk-assessment': 1, 'risk-thresholds': 1, 'risk-mitigation': 1, 'risk-processes': 1, 'continuous-improvement': 1 },
  mistral: { 'risk-assessment': 1, 'risk-thresholds': 1, 'risk-mitigation': 1, 'risk-processes': 1, 'continuous-improvement': 1 },
  naver: { 'risk-assessment': 1, 'risk-thresholds': 1, 'risk-mitigation': 1, 'risk-processes': 1, 'continuous-improvement': 1 },
  openai: { 'risk-assessment': 3, 'risk-thresholds': 4, 'risk-mitigation': 3, 'risk-processes': 3, 'continuous-improvement': 4 },
  samsung: { 'risk-assessment': 1, 'risk-thresholds': 1, 'risk-mitigation': 1, 'risk-processes': 1, 'continuous-improvement': 1 },
  tii: { 'risk-assessment': 1, 'risk-thresholds': 1, 'risk-mitigation': 1, 'risk-processes': 1, 'continuous-improvement': 1 },
  xai: { 'risk-assessment': 1, 'risk-thresholds': 1, 'risk-mitigation': 1, 'risk-processes': 1, 'continuous-improvement': 1 },
  zhipu: { 'risk-assessment': 1, 'risk-thresholds': 1, 'risk-mitigation': 1, 'risk-processes': 1, 'continuous-improvement': 1 },
}

export const descriptions: Record<string, Record<string, string>> = {
  amazon: {
    'risk-assessment': "Amazon has implemented a risk assessment framework for AI systems, including regular audits and impact assessments. Their approach includes <a href='https://www.aboutamazon.com/news/ai/amazons-approach-to-responsible-ai' target='_blank' rel='noopener noreferrer'>comprehensive guidelines</a> for AI development and deployment.",
    'risk-thresholds': "Amazon has established risk thresholds for AI systems, but specific details are not publicly available. They provide a <a href='https://aws.amazon.com/machine-learning/responsible-ai/' target='_blank' rel='noopener noreferrer'>Responsible AI resource center</a> with tools and best practices.",
    'risk-mitigation': "Amazon has implemented various risk mitigation strategies, as outlined in their <a href='https://www.aboutamazon.com/news/innovation/what-is-responsible-ai' target='_blank' rel='noopener noreferrer'>Responsible AI practices</a>. These include bias detection and mitigation tools.",
    'risk-processes': "Amazon's risk processes for AI are integrated into their broader risk management framework. They have established protocols for addressing AI-related risks, but specific details are not publicly disclosed.",
    'continuous-improvement': "Amazon continuously improves its AI safety measures through ongoing research and development efforts. They collaborate with academic institutions and industry partners to advance AI safety practices.",
  },
  anthropic: {
    'risk-assessment': "Anthropic has a robust risk assessment process for their AI models, including extensive testing and evaluation before deployment.",
    'risk-thresholds': "Anthropic has established clear risk thresholds for their AI systems, with specific criteria for different levels of risk.",
    'risk-mitigation': "Anthropic implements various risk mitigation strategies, including model fine-tuning and content filtering.",
    'risk-processes': "Anthropic has well-defined processes for addressing risks that meet or exceed their pre-defined thresholds.",
    'continuous-improvement': "Anthropic is actively involved in AI safety research and continuously updates their risk assessment and mitigation strategies.",
  },
  cohere: {
    'risk-assessment': "Cohere's risk assessment practices are not publicly detailed.",
    'risk-thresholds': "Information about Cohere's risk thresholds is not publicly available.",
    'risk-mitigation': "Cohere's specific risk mitigation strategies are not publicly disclosed.",
    'risk-processes': "Cohere's processes for addressing high-risk scenarios are not publicly detailed.",
    'continuous-improvement': "Cohere's efforts in continuous improvement of AI safety measures are not publicly documented.",
  },
  google: {
    'risk-assessment': "Google has a comprehensive risk assessment framework for AI, including regular audits and impact assessments.",
    'risk-thresholds': "Google has established risk thresholds for AI systems, but specific details are not fully disclosed.",
    'risk-mitigation': "Google implements various risk mitigation strategies, including bias detection and mitigation tools.",
    'risk-processes': "Google has established protocols for addressing AI-related risks that meet or exceed their thresholds.",
    'continuous-improvement': "Google is actively involved in AI safety research and continuously updates their risk assessment and mitigation strategies.",
  },
  g42: {
    'risk-assessment': "G42's risk assessment practices for AI are not publicly detailed.",
    'risk-thresholds': "Information about G42's risk thresholds is not publicly available.",
    'risk-mitigation': "G42's specific risk mitigation strategies are not publicly disclosed.",
    'risk-processes': "G42's processes for addressing high-risk scenarios are not publicly detailed.",
    'continuous-improvement': "G42's efforts in continuous improvement of AI safety measures are not publicly documented.",
  },
  ibm: {
    'risk-assessment': "IBM's risk assessment practices for AI are not fully publicly detailed.",
    'risk-thresholds': "Information about IBM's specific risk thresholds is not publicly available.",
    'risk-mitigation': "IBM's specific risk mitigation strategies are not fully publicly disclosed.",
    'risk-processes': "IBM's processes for addressing high-risk scenarios are not publicly detailed.",
    'continuous-improvement': "IBM's efforts in continuous improvement of AI safety measures are not comprehensively publicly documented.",
  },
  inflection: {
    'risk-assessment': "Inflection AI's risk assessment practices are not publicly detailed.",
    'risk-thresholds': "Information about Inflection AI's risk thresholds is not publicly available.",
    'risk-mitigation': "Inflection AI's specific risk mitigation strategies are not publicly disclosed.",
    'risk-processes': "Inflection AI's processes for addressing high-risk scenarios are not publicly detailed.",
    'continuous-improvement': "Inflection AI's efforts in continuous improvement of AI safety measures are not publicly documented.",
  },
  meta: {
    'risk-assessment': "Meta's risk assessment practices for AI are not fully publicly detailed.",
    'risk-thresholds': "Information about Meta's specific risk thresholds is not publicly available.",
    'risk-mitigation': "Meta's specific risk mitigation strategies are not fully publicly disclosed.",
    'risk-processes': "Meta's processes for addressing high-risk scenarios are not publicly detailed.",
    'continuous-improvement': "Meta's efforts in continuous improvement of AI safety measures are not comprehensively publicly documented.",
  },
  microsoft: {
    'risk-assessment': "Microsoft's risk assessment practices for AI are not fully publicly detailed.",
    'risk-thresholds': "Information about Microsoft's specific risk thresholds is not publicly available.",
    'risk-mitigation': "Microsoft's specific risk mitigation strategies are not fully publicly disclosed.",
    'risk-processes': "Microsoft's processes for addressing high-risk scenarios are not publicly detailed.",
    'continuous-improvement': "Microsoft's efforts in continuous improvement of AI safety measures are not comprehensively publicly documented.",
  },
  mistral: {
    'risk-assessment': "Mistral AI's risk assessment practices are not publicly detailed.",
    'risk-thresholds': "Information about Mistral AI's risk thresholds is not publicly available.",
    'risk-mitigation': "Mistral AI's specific risk mitigation strategies are not publicly disclosed.",
    'risk-processes': "Mistral AI's processes for addressing high-risk scenarios are not publicly detailed.",
    'continuous-improvement': "Mistral AI's efforts in continuous improvement of AI safety measures are not publicly documented.",
  },
  naver: {
    'risk-assessment': "Naver's risk assessment practices for AI are not publicly detailed.",
    'risk-thresholds': "Information about Naver's risk thresholds is not publicly available.",
    'risk-mitigation': "Naver's specific risk mitigation strategies are not publicly disclosed.",
    'risk-processes': "Naver's processes for addressing high-risk scenarios are not publicly detailed.",
    'continuous-improvement': "Naver's efforts in continuous improvement of AI safety measures are not publicly documented.",
  },
  openai: {
    'risk-assessment': "OpenAI has a robust risk assessment process for their AI models, including extensive testing and evaluation before deployment.",
    'risk-thresholds': "OpenAI has established clear risk thresholds for their AI systems, with specific criteria for different levels of risk.",
    'risk-mitigation': "OpenAI implements various risk mitigation strategies, including model fine-tuning and content filtering.",
    'risk-processes': "OpenAI has well-defined processes for addressing risks that meet or exceed their pre-defined thresholds.",
    'continuous-improvement': "OpenAI is actively involved in AI safety research and continuously updates their risk assessment and mitigation strategies.",
  },
  samsung: {
    'risk-assessment': "Samsung's risk assessment practices for AI are not publicly detailed.",
    'risk-thresholds': "Information about Samsung's risk thresholds is not publicly available.",
    'risk-mitigation': "Samsung's specific risk mitigation strategies are not publicly disclosed.",
    'risk-processes': "Samsung's processes for addressing high-risk scenarios are not publicly detailed.",
    'continuous-improvement': "Samsung's efforts in continuous improvement of AI safety measures are not publicly documented.",
  },
  tii: {
    'risk-assessment': "TII's risk assessment practices for AI are not publicly detailed.",
    'risk-thresholds': "Information about TII's risk thresholds is not publicly available.",
    'risk-mitigation': "TII's specific risk mitigation strategies are not publicly disclosed.",
    'risk-processes': "TII's processes for addressing high-risk scenarios are not publicly detailed.",
    'continuous-improvement': "TII's efforts in continuous improvement of AI safety measures are not publicly documented.",
  },
  xai: {
    'risk-assessment': "xAI's risk assessment practices are not publicly detailed.",
    'risk-thresholds': "Information about xAI's risk thresholds is not publicly available.",
    'risk-mitigation': "xAI's specific risk mitigation strategies are not publicly disclosed.",
    'risk-processes': "xAI's processes for addressing high-risk scenarios are not publicly detailed.",
    'continuous-improvement': "xAI's efforts in continuous improvement of AI safety measures are not publicly documented.",
  },
  zhipu: {
    'risk-assessment': "Zhipu.ai's risk assessment practices are not publicly detailed.",
    'risk-thresholds': "Information about Zhipu.ai's risk thresholds is not publicly available.",
    'risk-mitigation': "Zhipu.ai's specific risk mitigation strategies are not publicly disclosed.",
    'risk-processes': "Zhipu.ai's processes for addressing high-risk scenarios are not publicly detailed.",
    'continuous-improvement': "Zhipu.ai's efforts in continuous improvement of AI safety measures are not publicly documented.",
  },
}

