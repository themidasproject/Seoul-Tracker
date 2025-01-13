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
 amazon: { 'risk-evaluations': 1, 'risk-thresholds': 1, 'risk-mitigations': 1, 'halting-procedures': 1, 'safety-investment': 1 },
 anthropic: { 'risk-evaluations': 4, 'risk-thresholds': 3, 'risk-mitigations': 3, 'halting-procedures': 4, 'safety-investment': 4 },
 cohere: { 'risk-evaluations': 1, 'risk-thresholds': 1, 'risk-mitigations': 1, 'halting-procedures': 1, 'safety-investment': 1 },
 google: { 'risk-evaluations': 3, 'risk-thresholds': 2, 'risk-mitigations': 2, 'halting-procedures': 2, 'safety-investment': 3 },
 g42: { 'risk-evaluations': 1, 'risk-thresholds': 1, 'risk-mitigations': 1, 'halting-procedures': 1, 'safety-investment': 1 },
 ibm: { 'risk-evaluations': 1, 'risk-thresholds': 1, 'risk-mitigations': 1, 'halting-procedures': 1, 'safety-investment': 1 },
 inflection: { 'risk-evaluations': 1, 'risk-thresholds': 1, 'risk-mitigations': 1, 'halting-procedures': 1, 'safety-investment': 1 },
 meta: { 'risk-evaluations': 1, 'risk-thresholds': 1, 'risk-mitigations': 1, 'halting-procedures': 1, 'safety-investment': 1 },
 microsoft: { 'risk-evaluations': 2, 'risk-thresholds': 2, 'risk-mitigations': 1, 'halting-procedures': 1, 'safety-investment': 2 },
 mistral: { 'risk-evaluations': 1, 'risk-thresholds': 1, 'risk-mitigations': 1, 'halting-procedures': 1, 'safety-investment': 1 },
 naver: { 'risk-evaluations': 1, 'risk-thresholds': 1, 'risk-mitigations': 1, 'halting-procedures': 1, 'safety-investment': 1 },
 openai: { 'risk-evaluations': 3, 'risk-thresholds': 3, 'risk-mitigations': 2, 'halting-procedures': 2, 'safety-investment': 2 },
 samsung: { 'risk-evaluations': 1, 'risk-thresholds': 1, 'risk-mitigations': 1, 'halting-procedures': 1, 'safety-investment': 1 },
 tii: { 'risk-evaluations': 1, 'risk-thresholds': 1, 'risk-mitigations': 1, 'halting-procedures': 1, 'safety-investment': 1 },
 xai: { 'risk-evaluations': 1, 'risk-thresholds': 1, 'risk-mitigations': 1, 'halting-procedures': 1, 'safety-investment': 1 },
 zhipu: { 'risk-evaluations': 1, 'risk-thresholds': 1, 'risk-mitigations': 1, 'halting-procedures': 1, 'safety-investment': 1 },
}


export const companyDescriptions: Record<string, string> = {
 amazon: "Amazon has not publicly implemented a “red line” risk evaluation policy that meets the standards of the Seoul commitments.",
  anthropic: "Anthropic released the first major “red line” risk evaluation policy among top AI developers, known as their <a href='https://www.anthropic.com/news/anthropics-responsible-scaling-policy' target='_blank' rel='noopener noreferrer'>responsible scaling policy</a>. They conduct risk evaluations at least every six months. For the upcoming tier of risks, ASL-3, they’ve specified in abstract terms risk thresholds for (1) model autonomy and (2) chemical, biological, radiological, and nuclear risks. Reaching these capability thresholds will necessitate the implementation of new security and deployment mitigations. These mitigation standards have also been described in abstract terms. Anthropic has made an affirmative commitment to pause deployment and training if these thresholds are reached without the required mitigations in place. They’ve already published one update to the policy, and appear invested in maintaining and adhering to the commitment. ",
  cohere: "Cohere has not publicly implemented a “red line” risk evaluation policy that meets the standards of the Seoul commitments.",
  google: "Google’s <a href='https://storage.googleapis.com/deepmind-media/DeepMind.com/Blog/introducing-the-frontier-safety-framework/fsf-technical-report.pdf' target='_blank' rel='noopener noreferrer'>Frontier Safety Framework</a> commits the organization to conduct risk evaluations on a regular schedule for threats relating to model autonomy, biosecurity, cybersecurity, and machine learning research and development. They have pre-specified risk thresholds for each category, and also specified four tiers of mitigations — although these mitigations are not currently required to be implemented when reaching the aforementioned risk thresholds.  Their policy includes a vague and noncommittal announcement that they will pause deployment or development when risk thresholds are met without adequate mitigations in place.",
  g42: "G42 has not publicly implemented a “red line” risk evaluation policy that meets the standards of the Seoul commitments.",
  ibm: "IBM has not publicly implemented a “red line” risk evaluation policy that meets the standards of the Seoul commitments.",
  inflection: "Inflection has not publicly implemented a “red line” risk evaluation policy that meets the standards of the Seoul commitments.",
  meta: "Meta has not publicly implemented a “red line” risk evaluation policy that meets the standards of the Seoul commitments.",
  microsoft: "Microsoft has not publicly implemented a “red line” risk evaluation policy that meets the standards of the Seoul commitments. They have made a vague announcement that, together with OpenAI, they have \“defined capability thresholds that act as a trigger to review models in advance of their first release or downstream deployment.\” However, they have provided no public description of these practices, and there is one reported case of a model being deployed without the required review process taking place.",
  mistral: "Mistral AI has not publicly implemented a “red line” risk evaluation policy that meets the standards of the Seoul commitments.",
  naver: "Naver has not publicly implemented a “red line” risk evaluation policy that meets the standards of the Seoul commitments.",
  openai: "OpenAI’s <a href='https://cdn.openai.com/openai-preparedness-framework-beta.pdf' target='_blank' rel='noopener noreferrer'>preparedness framework</a> includes a commitment to conduct continual risk evaluation for cybersecurity, model autonomy, persuasion, and chemical, biological, radiological, and nuclear risks. They have sketched out, and described in vague terms, four risk levels for each category and committed not to deploy high-risk models (externally, that is) until security and safety mitigations have been put in place, although they haven’t described those mitigations in detail. They have struggled to continually invest in this framework, including releasing no updates since the original publication, not releasing risk scorecards on time for new models, and reportedly rushing safety teams through the risk evaluation process.",
  samsung: "Samsung has not publicly implemented a “red line” risk evaluation policy that meets the standards of the Seoul commitments.",
  tii: "Technology Innovation Institute has not publicly implemented a “red line” risk evaluation policy that meets the standards of the Seoul commitments.",
  xai: "xAI has not publicly implemented a “red line” risk evaluation policy that meets the standards of the Seoul commitments.",
  zhipu: "Zhipu.ai has not publicly implemented a “red line” risk evaluation policy that meets the standards of the Seoul commitments."
}
