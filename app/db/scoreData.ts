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
 openai: { 'risk-evaluations': 2, 'risk-thresholds': 3, 'risk-mitigations': 2, 'halting-procedures': 2, 'safety-investment': 2 },
 samsung: { 'risk-evaluations': 1, 'risk-thresholds': 1, 'risk-mitigations': 1, 'halting-procedures': 1, 'safety-investment': 1 },
 tii: { 'risk-evaluations': 1, 'risk-thresholds': 1, 'risk-mitigations': 1, 'halting-procedures': 1, 'safety-investment': 1 },
 xai: { 'risk-evaluations': 1, 'risk-thresholds': 1, 'risk-mitigations': 1, 'halting-procedures': 1, 'safety-investment': 1 },
 zhipu: { 'risk-evaluations': 1, 'risk-thresholds': 1, 'risk-mitigations': 1, 'halting-procedures': 1, 'safety-investment': 1 },
}


export const dimensionDescriptions: Record<string, Record<string, string>> = {
  'amazon': {
    'risk-evaluations': 'No public evidence of implementation',
    'risk-thresholds': 'No public evidence of implementation',
    'risk-mitigations': 'No public evidence of implementation',
    'halting-procedures': 'No public evidence of implementation',
    'safety-investment': 'No public evidence of implementation',
  },
  'anthropic': {
    'risk-evaluations': `
      <p><span style="color: #16a34a;">✓ Commits to conduct risk evaluations at least every six months or every 4x in effective compute</span></p>
      <p><span style="color: #16a34a;">✓ Uses burden of proof that assumes models are unsafe unless proven safe</span></p>
      <p><span style="color: #16a34a;">✓ Evaluates efficacy of mitigations after implementation</span></p>
      <p><span style="color: #16a34a;">✓ Has published detailed risk evaluations for past models like Claude 3 Opus <sup><a target="_blank" rel="noopener noreferrer" href="https://cdn.sanity.io/files/4zrzovbb/website/210523b8e11b09c704c5e185fd362fe9e648d457.pdf">1</a></sup> and Claude 2 <sup><a target="_blank" rel="noopener noreferrer" href="https://www-cdn.anthropic.com/5c49cc247484cecf107c699baf29250302e5da70/claude-2-model-card.pdf">2</a></sup></span></p>
      <p><span style="color: #dc2626;">✗ Does not provide specific details about evaluation methodology</span></p>
      <p><span style="color: #dc2626;">✗ Lacks detail about expert/government input in future evaluation processes</span></p>
    `,
    'risk-thresholds': `
      <p><span style="color: #16a34a;">✓ Has defined thresholds for model autonomy risks and CBRN risks</span></p>
      <p><span style="color: #16a34a;">✓ Uses tiered system (ASL-1, ASL-2, etc.) with clear progression</span></p>
      <p><span style="color: #16a34a;">✓ Has pre-committed to specify future thresholds before reaching them</span></p>
      <p><span style="color: #dc2626;">✗ Current thresholds are described in abstract terms</span></p>
    `,
    'risk-mitigations': `
      <p><span style="color: #16a34a;">✓ Has defined two categories of mitigations: deployment and security standards</span></p>
      <p><span style="color: #16a34a;">✓ Commits to implement security standards before reaching thresholds</span></p>
      <p><span style="color: #16a34a;">✓ Commits to implement deployment standards before any deployment</span></p>
      <p><span style="color: #dc2626;">✗ Mitigations are described in abstract terms without specific, verifiable details</span></p>
    `,
    'halting-procedures': `
      <p><span style="color: #16a34a;">✓ Clear commitment to halt if thresholds are exceeded without mitigations</span></p>
      <p><span style="color: #16a34a;">✓ Specifies multiple levels of response (blocking responses, downgrading models, full de-deployment)</span></p>
      <p><span style="color: #16a34a;">✓ Includes both deployment and training halt procedures</span></p>
    `,
    'safety-investment': `
      <p><span style="color: #16a34a;">✓ First AI lab to release a red line policy</span></p>
      <p><span style="color: #16a34a;">✓ Maintains public changelog <sup><a target="_blank" rel="noopener noreferrer" href="https://www.anthropic.com/rsp-updates">1</a></sup> of policy updates</span></p>
      <p><span style="color: #16a34a;">✓ Has published major policy updates with explanatory blog posts <sup><a target="_blank" rel="noopener noreferrer" href="https://www.anthropic.com/news/announcing-our-updated-responsible-scaling-policy">2</a></sup></span></p>
      <p><span style="color: #16a34a;">✓ 8% of employees work on security-adjacent areas <sup><a target="_blank" rel="noopener noreferrer" href="https://www.anthropic.com/news/reflections-on-our-responsible-scaling-policy">3</a></sup></span></p>
      <p><span style="color: #16a34a;">✓ Security team expected to grow over time</span></p>
    `,
  },
  'cohere': {
    'risk-evaluations': 'No public evidence of implementation',
    'risk-thresholds': 'No public evidence of implementation',
    'risk-mitigations': 'No public evidence of implementation',
    'halting-procedures': 'No public evidence of implementation',
    'safety-investment': 'No public evidence of implementation',
  },
  'google': {
    'risk-evaluations': `
      <p><span style="color: #16a34a;">✓ Aims to evaluate models every 6x compute and every 3 months of fine-tuning</span></p>
      <p><span style="color: #16a34a;">✓ Has published evaluations in research papers <sup><a target="_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/2403.13793">1</a></sup> and model cards <sup><a target="_blank" rel="noopener noreferrer" href="https://storage.googleapis.com/deepmind-media/gemini/gemini_v1_5_report.pdf#page=69">2</a></sup> <sup><a target="_blank" rel="noopener noreferrer" href="https://arxiv.org/pdf/2408.00118#page=11">3</a></sup></span></p>
      <p><span style="color: #dc2626;">✗ Falls short of full commitment to evaluation schedule</span></p>
      <p><span style="color: #dc2626;">✗ No details about external expert collaboration in evaluations</span></p>
    `,
    'risk-thresholds': `
      <p><span style="color: #16a34a;">✓ Defines four categories of risk: autonomy, ML R&D, biosecurity, and cybersecurity</span></p>
      <p><span style="color: #16a34a;">✓ Has multiple capability levels defined for biosecurity and cybersecurity</span></p>
      <p><span style="color: #dc2626;">✗ Thresholds lack specific details</span></p>
      <p><span style="color: #dc2626;">✗ No specific evaluation procedures to verify threshold crossing</span></p>
    `,
    'risk-mitigations': `
      <p><span style="color: #16a34a;">✓ Has specified both security and deployment mitigations</span></p>
      <p><span style="color: #16a34a;">✓ Includes four tiers of mitigations for each category</span></p>
      <p><span style="color: #dc2626;">✗ Mitigations described only in abstract terms</span></p>
      <p><span style="color: #dc2626;">✗ No clear connection between mitigations and capability thresholds</span></p>
    `,
    'halting-procedures': `
      <p><span style="color: #16a34a;">✓ Commits to halt deployment or development if thresholds reached without mitigations</span></p>
      <p><span style="color: #dc2626;">✗ Future work needed to map thresholds to specific mitigations</span></p>
      <p><span style="color: #dc2626;">✗ Halting commitment remains theoretical without specific implementation details</span></p>
    `,
    'safety-investment': `
      <p><span style="color: #16a34a;">✓ Has committed to evolve the framework as understanding improves</span></p>
      <p><span style="color: #dc2626;">✗ No updates or improvements to framework since release</span></p>
      <p><span style="color: #dc2626;">✗ Unclear level of ongoing investment in maintaining the policy</span></p>
    `,
  },
    'g42': {
    'risk-evaluations': 'No public evidence of implementation',
    'risk-thresholds': 'No public evidence of implementation',
    'risk-mitigations': 'No public evidence of implementation',
    'halting-procedures': 'No public evidence of implementation',
    'safety-investment': 'No public evidence of implementation',
  },
  'ibm': {
    'risk-evaluations': 'No public evidence of implementation',
    'risk-thresholds': 'No public evidence of implementation',
    'risk-mitigations': 'No public evidence of implementation',
    'halting-procedures': 'No public evidence of implementation',
    'safety-investment': 'No public evidence of implementation',
  },
  'inflection': {
    'risk-evaluations': 'No public evidence of implementation',
    'risk-thresholds': 'No public evidence of implementation',
    'risk-mitigations': 'No public evidence of implementation',
    'halting-procedures': 'No public evidence of implementation',
    'safety-investment': 'No public evidence of implementation',
  },
  'meta': {
    'risk-evaluations': 'No public evidence of implementation',
    'risk-thresholds': 'No public evidence of implementation',
    'risk-mitigations': 'No public evidence of implementation',
    'halting-procedures': 'No public evidence of implementation',
    'safety-investment': 'No public evidence of implementation',
  },
  'microsoft': {
    'risk-evaluations': `
      <p><span style="color: #16a34a;">✓ Works with OpenAI through joint Deployment Safety Board for pre-release model reviews</span></p>
      <p><span style="color: #dc2626;">✗ Provides no specific details about the risk evaluation process</span></p>
    `,
    'risk-thresholds': `
      <p><span style="color: #16a34a;">✓ Claims to have defined capability thresholds with OpenAI that trigger model reviews</span></p>
      <p><span style="color: #dc2626;">✗ No public description of thresholds or review criteria are available</span></p>
    `,
    'risk-mitigations': 'No public evidence of implementation',
    'halting-procedures': 'No public evidence of implementation',
    'safety-investment': `
      <p><span style="color: #16a34a;">✓ Maintains an AI Red Team for safety testing, independent of their product teams </span></p>
      <p><span style="color: #dc2626;">✗ Bypassed safety board review process for GPT-4 testing in India. Initially denied this, before later admitting it. <sup><a target="_blank" rel="noopener noreferrer" href="https://www.medianama.com/2024/06/223-microsoft-tested-gpt-4-in-india-without-safety-boards-approval-report/">1</a></sup></span></p>
    `,
  },
  'mistral': {
    'risk-evaluations': 'No public evidence of implementation',
    'risk-thresholds': 'No public evidence of implementation',
    'risk-mitigations': 'No public evidence of implementation',
    'halting-procedures': 'No public evidence of implementation',
    'safety-investment': 'No public evidence of implementation',
  },
  'naver': {
    'risk-evaluations': 'No public evidence of implementation',
    'risk-thresholds': 'No public evidence of implementation',
    'risk-mitigations': 'No public evidence of implementation',
    'halting-procedures': 'No public evidence of implementation',
    'safety-investment': 'No public evidence of implementation',
  },
  'openai': {
    'risk-evaluations': `
      <p><span style="color: #16a34a;">✓ Evaluates four risk categories: cybersecurity, model autonomy, persuasion, and CBRN</span></p>
      <p><span style="color: #16a34a;">✓ Commits to maintain dynamic scorecards for each model</span></p>
      <p><span style="color: #dc2626;">✗ No published scorecards have been updated</span></p>
      <p><span style="color: #dc2626;">✗ Some models released without public scorecards</span></p>
    `,
    'risk-thresholds': `
      <p><span style="color: #16a34a;">✓ Defines four levels of risk: low, medium, high, and critical</span></p>
      <p><span style="color: #16a34a;">✓ Separates pre-mitigation and post-mitigation risks</span></p>
      <p><span style="color: #16a34a;">✓ Includes rationale for thresholds as specified in Seoul commitments</span></p>
      <p><span style="color: #dc2626;">✗ Risk thresholds set very high</span></p>
      <p><span style="color: #dc2626;">✗ Thresholds are described only in abstract terms</span></p>
    `,
    'risk-mitigations': `
      <p><span style="color: #16a34a;">✓ Includes both security and deployment mitigations</span></p>
      <p><span style="color: #dc2626;">✗ Few specific details for security measures</span></p>
      <p><span style="color: #dc2626;">✗ No specific details for deployment measures</span></p>
    `,
    'halting-procedures': `
      <p><span style="color: #16a34a;">✓ Clear rules: only deploy models with medium or lower post-mitigation risk</span></p>
      <p><span style="color: #16a34a;">✓ Includes both deployment and development halting procedures</span></p>
      <p><span style="color: #dc2626;">✗ Commitments weakened by very high thresholds for "high" and "critical" risk</span></p>
    `,
    'safety-investment': `
      <p><span style="color: #16a34a;">✓ Early leader in discussing AGI risks and safety research</span></p>
      <p><span style="color: #16a34a;">✓ Commits to third-party audits of scorecard evaluations</span></p>
      <p><span style="color: #dc2626;">✗ Failed on multiple occasions to adhere to preparedness framework as described:</span></p>
      <p style="margin-left: 20px;"><span style="color: #dc2626;">• Rushed safety evaluation for GPT-4o release <sup><a target="_blank" rel="noopener noreferrer" href="https://www.washingtonpost.com/technology/2024/07/12/openai-ai-safety-regulation-gpt4/">1</a></sup></span></p>
      <p style="margin-left: 20px;"><span style="color: #dc2626;">• Delayed scorecard publication for GPT-4o</span></p>
      <p style="margin-left: 20px;"><span style="color: #dc2626;">• Used early model checkpoint for o1-preview evaluations without clear disclosure</span></p>
      <p style="margin-left: 20px;"><span style="color: #dc2626;">• Missing evaluations for o1 pro</span></p>
    `,
  },
  'samsung': {
    'risk-evaluations': 'No public evidence of implementation',
    'risk-thresholds': 'No public evidence of implementation',
    'risk-mitigations': 'No public evidence of implementation',
    'halting-procedures': 'No public evidence of implementation',
    'safety-investment': 'No public evidence of implementation',
  },
    'tii': {
    'risk-evaluations': 'No public evidence of implementation',
    'risk-thresholds': 'No public evidence of implementation',
    'risk-mitigations': 'No public evidence of implementation',
    'halting-procedures': 'No public evidence of implementation',
    'safety-investment': 'No public evidence of implementation',
  },
  'xai': {
    'risk-evaluations': 'No public evidence of implementation',
    'risk-thresholds': 'No public evidence of implementation',
    'risk-mitigations': 'No public evidence of implementation',
    'halting-procedures': 'No public evidence of implementation',
    'safety-investment': 'No public evidence of implementation',
  },
  'zhipu': {
    'risk-evaluations': 'No public evidence of implementation',
    'risk-thresholds': 'No public evidence of implementation',
    'risk-mitigations': 'No public evidence of implementation',
    'halting-procedures': 'No public evidence of implementation',
    'safety-investment': 'No public evidence of implementation',
  },
}


export const companyDescriptions: Record<string, string> = {
  amazon: "Amazon has not publicly implemented a \"red line\" risk evaluation policy that meets the standards of the Seoul commitments.",
  anthropic: "Anthropic released the first major \"red line\" risk evaluation policy among top AI developers, known as their responsible scaling policy <sup><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.anthropic.com/news/anthropics-responsible-scaling-policy\">1</a></sup>. They conduct risk evaluations at least every six months. For the upcoming tier of risks, they've specified (in abstract terms) risk thresholds for (1) model autonomy and (2) chemical, biological, radiological, and nuclear risks. Reaching these capability thresholds will necessitate the implementation of new security and deployment mitigations. These mitigation standards have also been described in abstract terms. Anthropic has made an affirmative commitment to pause deployment and training if these thresholds are reached without the required mitigations in place. They've already published one update to the policy, and appear invested in maintaining and adhering to the commitment.",
  cohere: "Cohere has not publicly implemented a \"red line\" risk evaluation policy that meets the standards of the Seoul commitments.",
  google: "Google has released a \"red line\" risk evaluation policy known as their Frontier Safety Framework <sup><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://storage.googleapis.com/deepmind-media/DeepMind.com/Blog/introducing-the-frontier-safety-framework/fsf-technical-report.pdf\">1</a></sup>. This is a commitment to conduct risk evaluation across four major domains of risk, and to implement deployment and security mitigations when warnings signs of dangerous capabilities appear. However, it has yet to be fleshed out: mitigations have not been connected to risk thresholds, nor has the policy been implemented in a detailed, verifiable manner.",
  g42: "G42 has not publicly implemented a \"red line\" risk evaluation policy that meets the standards of the Seoul commitments.",
  ibm: "IBM has not publicly implemented a \"red line\" risk evaluation policy that meets the standards of the Seoul commitments.",
  inflection: "Inflection has not publicly implemented a \"red line\" risk evaluation policy that meets the standards of the Seoul commitments.",
  meta: "Meta has not publicly implemented a \"red line\" risk evaluation policy that meets the standards of the Seoul commitments.",
  microsoft: "Microsoft has not publicly implemented a \"red line\" risk evaluation policy that meets the standards of the Seoul commitments. They have made a vague announcement that, together with OpenAI, they have \"defined capability thresholds that act as a trigger to review models in advance of their first release or downstream deployment.\" However, they have provided no public description of these practices, and there is one reported case of a model being deployed without the required review process taking place.",
  mistral: "Mistral AI has not publicly implemented a \"red line\" risk evaluation policy that meets the standards of the Seoul commitments.",
  naver: "Naver has not publicly implemented a \"red line\" risk evaluation policy that meets the standards of the Seoul commitments.",
  openai: "OpenAI's \"red line\" risk evaluation policy is known as their Preparedness Framework <sup><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://cdn.openai.com/openai-preparedness-framework-beta.pdf\">1</a></sup>. It includes a commitment to conduct risk evaluations and monitor for tiered risk levels across four domains, and implement mitigations upon reaching those risk levels. However, they have also seemingly struggled to adhere to this framework on multiple occasions.",
  samsung: "Samsung has not publicly implemented a \"red line\" risk evaluation policy that meets the standards of the Seoul commitments.",
  tii: "Technology Innovation Institute has not publicly implemented a \"red line\" risk evaluation policy that meets the standards of the Seoul commitments.",
  xai: "xAI has not publicly implemented a \"red line\" risk evaluation policy that meets the standards of the Seoul commitments.",
  zhipu: "Zhipu.ai has not publicly implemented a \"red line\" risk evaluation policy that meets the standards of the Seoul commitments."
}
