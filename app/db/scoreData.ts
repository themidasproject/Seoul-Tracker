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
 amazon: { 'risk-evaluations': 2, 'risk-thresholds': 2, 'risk-mitigations': 2, 'halting-procedures': 2, 'safety-investment': 3 },
 anthropic: { 'risk-evaluations': 2, 'risk-thresholds': 3, 'risk-mitigations': 3, 'halting-procedures': 4, 'safety-investment': 4 },
 cohere: { 'risk-evaluations': 2, 'risk-thresholds': 1, 'risk-mitigations': 2, 'halting-procedures': 1, 'safety-investment': 3 },
 google: { 'risk-evaluations': 3, 'risk-thresholds': 2, 'risk-mitigations': 2, 'halting-procedures': 2, 'safety-investment': 2 },
 g42: { 'risk-evaluations': 3, 'risk-thresholds': 2, 'risk-mitigations': 2, 'halting-procedures': 2, 'safety-investment': 3 },
 ibm: { 'risk-evaluations': 1, 'risk-thresholds': 1, 'risk-mitigations': 1, 'halting-procedures': 1, 'safety-investment': 1 },
 inflection: { 'risk-evaluations': 1, 'risk-thresholds': 1, 'risk-mitigations': 1, 'halting-procedures': 1, 'safety-investment': 1 },
 meta: { 'risk-evaluations': 2, 'risk-thresholds': 2, 'risk-mitigations': 1, 'halting-procedures': 3, 'safety-investment': 2 },
 microsoft: { 'risk-evaluations': 3, 'risk-thresholds': 2, 'risk-mitigations': 2, 'halting-procedures': 3, 'safety-investment': 2 },
 mistral: { 'risk-evaluations': 1, 'risk-thresholds': 1, 'risk-mitigations': 1, 'halting-procedures': 1, 'safety-investment': 1 },
 naver: { 'risk-evaluations': 3, 'risk-thresholds': 1, 'risk-mitigations': 1, 'halting-procedures': 2, 'safety-investment': 2 },
 openai: { 'risk-evaluations': 3, 'risk-thresholds': 3, 'risk-mitigations': 2, 'halting-procedures': 2, 'safety-investment': 2 },
 samsung: { 'risk-evaluations': 1, 'risk-thresholds': 1, 'risk-mitigations': 1, 'halting-procedures': 1, 'safety-investment': 1 },
 tii: { 'risk-evaluations': 1, 'risk-thresholds': 1, 'risk-mitigations': 1, 'halting-procedures': 1, 'safety-investment': 1 },
 xai: { 'risk-evaluations': 1, 'risk-thresholds': 1, 'risk-mitigations': 1, 'halting-procedures': 1, 'safety-investment': 1 },
 zhipu: { 'risk-evaluations': 1, 'risk-thresholds': 1, 'risk-mitigations': 1, 'halting-procedures': 1, 'safety-investment': 1 },
}


export const dimensionDescriptions: Record<string, Record<string, string>> = {
  'amazon': {
    'risk-evaluations': `
      <p><span style="color: #16a34a;">✓ Commits to conduct risk evaluations during training and prior to deployment for all frontier models, as well as re-evaluating for all updates that meaningfully increase capabilities</span></p>
      <p><span style="color: #dc2626;">✗ Does not commit to a minimum frequency for risk evaluation</span></p>
      <p><span style="color: #dc2626;">✗ Does not evaluate for persuasion or model autonomy</span></p>
    `,
    'risk-thresholds': `
      <p><span style="color: #16a34a;">✓ Has defined one upcoming risk threshold for each of three categories of risk: CBRN, Cyber, and AI R&D. </span></p>
      <p><span style="color: #dc2626;">✗ Current thresholds are described in abstract terms, and set quite high</span></p>
      <p><span style="color: #dc2626;">✗ Does not commit to defining future thresholds before current thresholds are reached</span></p>
    `,
    'risk-mitigations': `
      <p><span style="color: #16a34a;">✓ Describes multiple training, deployment, and security mitigations that will be used to ensure risk stays below thresholds</span></p>
      <p><span style="color: #dc2626;">✗ Specific mitigations are not connected to each risk threshold</span></p>
      <p><span style="color: #dc2626;">✗ Mitigations are described in abstract terms without specific, verifiable details</span></p>
    `,
    'halting-procedures': `
      <p><span style="color: #16a34a;">✓ Commits to not externally deploy frontier AI models if they exceed risk thresholds</span></p>
      <p><span style="color: #dc2626;">✗ Doesn't commit to halting development or internal deployment for models exceeding risk thresholds</span></p>
    `,
    'safety-investment': `
      <p><span style="color: #16a34a;">✓ Worked with third party experts to draft their initial framework. Plans to continue collaborating on safety with governments, domain experts, and other frontier model providers</span></p>
      <p><span style="color: #16a34a;">✓ Commits to publishing evaluation results for all upcoming model releases</span></p>
      <p><span style="color: #dc2626;">✗ Does not commit to a timeframe for future updates to the framework</span></p>
    `,
  },
  'anthropic': {
    'risk-evaluations': `
      <p><span style="color: #16a34a;">✓ Commits to conduct risk evaluations at least every six months or every 4x scaleup in effective compute</span></p>
      <p><span style="color: #16a34a;">✓ Assumes models are unsafe unless proven safe</span></p>
      <p><span style="color: #16a34a;">✓ Evaluates efficacy of mitigations after implementation</span></p>
      <p><span style="color: #16a34a;">✓ Has published detailed risk evaluations for past models like Claude 3 Opus <sup><a target="_blank" rel="noopener noreferrer" href="https://cdn.sanity.io/files/4zrzovbb/website/210523b8e11b09c704c5e185fd362fe9e648d457.pdf">1</a></sup> and Claude 2 <sup><a target="_blank" rel="noopener noreferrer" href="https://www-cdn.anthropic.com/5c49cc247484cecf107c699baf29250302e5da70/claude-2-model-card.pdf">2</a></sup></span></p>
      <p><span style="color: #dc2626;">✗ Does not provide specific details about evaluation methodology</span></p>
      <p><span style="color: #dc2626;">✗ Lacks detail about third party input in evaluation processes</span></p>
      <p><span style="color: #dc2626;">✗ Does not commit to evaluations for persuasion or situational awareness</span></p>
    `,
    'risk-thresholds': `
      <p><span style="color: #16a34a;">✓ Has defined thresholds for model autonomy risks and CBRN risks</span></p>
      <p><span style="color: #16a34a;">✓ Uses tiered system (ASL-1, ASL-2, etc.) with clear progression</span></p>
      <p><span style="color: #16a34a;">✓ Has pre-committed to specify future thresholds before reaching them</span></p>
      <p><span style="color: #dc2626;">✗ Current thresholds are described in abstract terms</span></p>
      <p><span style="color: #dc2626;">✗ Does not yet provide thresholds for cyber risks, although they do commit to monitoring them</span></p>
    `,
    'risk-mitigations': `
      <p><span style="color: #16a34a;">✓ Has defined two categories of mitigations: deployment and security standards</span></p>
      <p><span style="color: #16a34a;">✓ Commits to implement security standards before reaching thresholds</span></p>
      <p><span style="color: #16a34a;">✓ Commits to implement deployment standards before any deployment</span></p>
      <p><span style="color: #dc2626;">✗ Mitigations are described in abstract terms without specific, verifiable details</span></p>
    `,
    'halting-procedures': `
      <p><span style="color: #16a34a;">✓ Clear commitment to halt if thresholds are exceeded without mitigations</span></p>
      <p><span style="color: #16a34a;">✓ Specifies multiple levels of response (e.g., blocking responses, downgrading models, full de-deployment)</span></p>
      <p><span style="color: #16a34a;">✓ Includes both deployment and training halting procedures</span></p>
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
    'risk-evaluations': `
      <p><span style="color: #16a34a;">✓ Shares plans to conduct comprehensive risk assessments before launching new models</span></p>
      <p><span style="color: #dc2626;">✗ Commits to no frequency for risk evaluation</span></p>
      <p><span style="color: #dc2626;">✗ Largely ignores catastrophic risks</span></p>
    `,
    'risk-thresholds': `
      <p><span style="color: #dc2626;">✗ Describes categories of risk in the abstract, but does not specify clear evaluation results or misuse potential that indicate an unacceptable level of risk</span></p>
      <p><span style="color: #dc2626;">✗ Does not include CBRN risks, persuasion, model autonomy, or other catastrophic risks as categories covered by the policy</span></p>
    `,
    'risk-mitigations': `
      <p><span style="color: #16a34a;">✓ Describes many mitigations associated with near-term risks including discriminatory outputs, cybersecurity vulnerabilities, and CSAM</span></p>
      <p><span style="color: #16a34a;">✓ Commits to implementing many specific industry standard security practices</span></p>
      <p><span style="color: #dc2626;">✗ Lacks specific, verifiable details about most mitigations</span></p>
    `,
    'halting-procedures': `
      <p><span style="color: #16a34a;">✓ Commits to not release new models unless evaluations show they pose no greater risks than previous models</span></p>
      <p><span style="color: #dc2626;">✗ Does not include thresholds for halting development, nor is internal deployment discussed in the policy</span></p>
    `,
    'safety-investment': `
      <p><span style="color: #16a34a;">✓ Engages with external experts</span></p>
      <p><span style="color: #16a34a;">✓ Commits to publish risk evaluation results in model documentation, as well as continuing to publish updates to the policy</span></p>
    `,
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
      <p><span style="color: #dc2626;">✗ Weakened policy in first major update, saying that they only plan to adhere to it if other companies are doing so too, despite the Seoul commitment having been made without such a condition</span></p>
    `,
  },
  'g42': {
    'risk-evaluations': `
      <p><span style="color: #16a34a;">✓ Conducts risk evaluation for biological threats and offensive cybersecurity at least every six months</span></p>
      <p><span style="color: #16a34a;">✓ Provides details, although nonspecific, for both preliminary and in-depth evaluations that will be used to determine if the upcoming risk threshold is met</span></p>
      <p><span style="color: #dc2626;">✗ has not committed to evaluate risks for model autonomy and persuasion </span></p>
    `,
    'risk-thresholds': `
      <p><span style="color: #16a34a;">✓ Describes one upcoming risk threshold for biological threats and offensive cybersecurity, with a commitment to describe the next one when the upcoming one is reached</span></p>
      <p><span style="color: #dc2626;">✗ Threshold lacks specificity</span></p>
      <p><span style="color: #dc2626;">✗ Does not describe future thresholds</span></p>
    `,
    'risk-mitigations': `
      <p><span style="color: #16a34a;">✓ Describes deployment and security mitigations, in vague terms, for four levels of risk</span></p>
      <p><span style="color: #dc2626;">✗ Mitigations lacks specificity</span></p>
    `,
    'halting-procedures': `
      <p><span style="color: #16a34a;">✓ Commits to restrict deployment of a model if deployment mitigations are not met</span></p>
      <p><span style="color: #16a34a;">✓ Commits to pause model development if security mitigations are not met</span></p>
      <p><span style="color: #dc2626;">✗ Does not discuss limiting internal deployment, except for as a response to reported incidents</span></p>
    `,
    'safety-investment': `
      <p><span style="color: #16a34a;">✓ Has made multiple accountability commitments including:</span></p>
      <p style="margin-left: 20px;"><span style="color: #16a34a;">• Engaging in annual external audits to ensure compliance with the framework</span></p>
      <p style="margin-left: 20px;"><span style="color: #16a34a;">• Conducting annual reviews to benchmark framework against industry standards, as well as more frequent internal reviews</span></p>
      <p style="margin-left: 20px;"><span style="color: #16a34a;">• Engaging in public, industry, and government disclosure of risk management practices and updates to the framework</span></p>
      <p><span style="color: #16a34a;">✓ Plans to solicit advice from external experts \"as deemed appropriate,\" and worked with experts in drafting their initial framework</span></p>
    `,
  },
  'ibm': {
    'risk-evaluations': '<p><span style="color: #dc2626;">✗ No public evidence of implementation</span></p>',
    'risk-thresholds': '<p><span style="color: #dc2626;">✗ No public evidence of implementation</span></p>',
    'risk-mitigations': '<p><span style="color: #dc2626;">✗ No public evidence of implementation</span></p>',
    'halting-procedures': '<p><span style="color: #dc2626;">✗ No public evidence of implementation</span></p>',
    'safety-investment': '<p><span style="color: #dc2626;">✗ No public evidence of implementation</span></p>',
  },
  'inflection': {
    'risk-evaluations': '<p><span style="color: #dc2626;">✗ No public evidence of implementation</span></p>',
    'risk-thresholds': '<p><span style="color: #dc2626;">✗ No public evidence of implementation</span></p>',
    'risk-mitigations': '<p><span style="color: #dc2626;">✗ No public evidence of implementation</span></p>',
    'halting-procedures': '<p><span style="color: #dc2626;">✗ No public evidence of implementation</span></p>',
    'safety-investment': '<p><span style="color: #dc2626;">✗ No public evidence of implementation</span></p>',
  },
  'meta': {
    'risk-evaluations': `
      <p><span style="color: #16a34a;">✓ Commits to conducting CBRN and cyber risk assessment for frontier AI models</span></p>
      <p><span style="color: #dc2626;">✗ Does not commit to conducting risk assessment for model autonomy, ML R&D, situational awareness, or persuasion</span></p>
      <p><span style="color: #dc2626;">✗ Provides no specific commitment to evaluation schedule or frequency</span></p>
      <p><span style="color: #dc2626;">✗ Provides no specific details about third party collaboration </span></p>
    `,
    'risk-thresholds': `
      <p><span style="color: #16a34a;">✓ Has defined "outcome criteria" for CBRN and Cyber risks</span></p>
      <p><span style="color: #dc2626;">✗ Defines tiered risk levels, but does not connect them to outcome criteria</span></p>
      <p><span style="color: #dc2626;">✗ Current outcome criteria are described in abstract terms</span></p>
      <p><span style="color: #dc2626;">✗ The bar for outcome criteria are set very high</span></p>
    `,
    'risk-mitigations': `
      <p><span style="color: #dc2626;">✗ No specific mitigations are described in their Frontier AI Framework</span></p>
      <p><span style="color: #dc2626;">✗ Their policy says they will only adhere to security measures \"insofar as is technically feasible and commercially practicable,\" practically meaning they can implement as little as they please </span></p>
    `,
    'halting-procedures': `
      <p><span style="color: #16a34a;">✓ Clear commitment to halt if risk thresholds are exceeded</span></p>
      <p><span style="color: #16a34a;">✓ Includes both deployment and training halting procedures</span></p>
      <p><span style="color: #dc2626;">✗ Halting commitment not connected to specific outcome criteria</span></p>
    `,
    'safety-investment': `
      <p><span style="color: #16a34a;">✓ Plans to update framework in the future </span></p>
      <p><span style="color: #dc2626;">✗ Has not yet connected specific mitigations to risk thresholds  </span></p>
      <p><span style="color: #dc2626;">✗ Includes caveats that absolve them of obligations if risks aren't \"unique\" or clearly modeled, allowing them to write off speculative risks and risks that are simultaneously posed by other AI systems</span></p>
    `
  },
  'microsoft': {
    'risk-evaluations': `
      <p><span style="color: #16a34a;">✓ Commits to conduct both "leading indicator" assessments and in-depth assessments for qualified models, at least every six months and for all models over 10^26 FLOPs</span></p>
      <p><span style="color: #16a34a;">✓ Plans to conduct post-mitigation re-evaluation of models to ensure that dangerous capabilities remain below specified thresholds (with a safety buffer)</span></p>
      <p><span style="color: #dc2626;">✗ Provides no specific details about the risk evaluation process</span></p>
    `,
    'risk-thresholds': `
      <p><span style="color: #16a34a;">✓ Has defined, only in abstract terms, four tiers of risk thresholds for CBRN risks, offensive cybersecurity, and model autonomy</span></p>
      <p><span style="color: #dc2626;">✗ Does not connect risk thresholds to specific, verifiable evaluation results</span></p>
      <p><span style="color: #dc2626;">✗ Offensive cybersecurity and model autonomy thresholds are quite high before further reviews and mitigations are required to be put in place</span></p>
    `,
    'risk-mitigations': `
      <p><span style="color: #16a34a;">✓ Discusses multiple security and deployment mitigations at a high level</span></p>
      <p><span style="color: #dc2626;">✗ Doesn't connect specific mitigations to specific risk thresholds</span></p>
    `,
    'halting-procedures': `
      <p><span style="color: #16a34a;">✓ Commits to pause development and deployment if risk thresholds are exceeded without neccesary mitigations in place</span></p>
    `,
    'safety-investment': `
      <p><span style="color: #16a34a;">✓ Has comitted to publish further updates to their framework, and to review framework improvements every six months</span></p>
      <p><span style="color: #16a34a;">✓ Plans to work with governments and third party experts</span></p>
      <p><span style="color: #dc2626;">✗ Bypassed safety board review process for GPT-4 testing in India. Initially denied this, before later admitting it <sup><a target="_blank" rel="noopener noreferrer" href="https://www.medianama.com/2024/06/223-microsoft-tested-gpt-4-in-india-without-safety-boards-approval-report/">1</a></sup></span></p>
    `,
  },
  'mistral': {
    'risk-evaluations': '<p><span style="color: #dc2626;">✗ No public evidence of implementation</span></p>',
    'risk-thresholds': '<p><span style="color: #dc2626;">✗ No public evidence of implementation</span></p>',
    'risk-mitigations': '<p><span style="color: #dc2626;">✗ No public evidence of implementation</span></p>',
    'halting-procedures': '<p><span style="color: #dc2626;">✗ No public evidence of implementation</span></p>',
    'safety-investment': '<p><span style="color: #dc2626;">✗ No public evidence of implementation</span></p>',
  },
  'naver': {
    'risk-evaluations': `
      <p><span style="color: #16a34a;">✓ Commits to evaluate frontier AI models every 3 months or every 6x scaleup in compute</span></p>
      <p><span style="color: #16a34a;">✓ Evaluates both "loss of control" and "misuse" risks</span></p>
      <p><span style="color: #dc2626;">✗ No published evaluation results yet</span></p>
    `,
    'risk-thresholds': `
      <p><span style="color: #dc2626;">✗ No specific capability thresholds defined</span></p>
    `,
    'risk-mitigations': `
      <p><span style="color: #dc2626;">✗ No specific mitigations described</span></p>
    `,
    'halting-procedures': `
      <p><span style="color: #16a34a;">✓ Clear commitment to withhold deployment for high-risk scenarios</span></p>
      <p><span style="color: #dc2626;">✗ Halting criteria remain abstract and unconnected to specific evaluation results</span></p>
    `,
    'safety-investment': `
      <p><span style="color: #16a34a;">✓ Partners with external experts for safety research and red teaming</span></p>
      <p><span style="color: #dc2626;">✗ No specific updates have been made to the framework, nor implementation details released</span></p>
      <p><span style="color: #dc2626;">✗ No discussion of the framework or risk assessment in Naver's first major model release <sup><a target="_blank" rel="noopener noreferrer" href="https://arxiv.org/html/2404.01954v1#S5">1</a></sup> after implementing the framework</span></p>
    `,
  },
  'openai': {
    'risk-evaluations': `
      <p><span style="color: #16a34a;">✓ Evaluates frontier models across four risk categories: cybersecurity, model autonomy, persuasion, and CBRN</span></p>
      <p><span style="color: #16a34a;">✓ Commits to publushing scorecards for each model</span></p>
      <p><span style="color: #dc2626;">✗ Does not commit to a minimum frequency for risk evaluations</span></p>
      <p><span style="color: #dc2626;">✗ Some models have already been released without public scorecards</span></p>
    `,
    'risk-thresholds': `
      <p><span style="color: #16a34a;">✓ Defines four levels of risk: low, medium, high, and critical</span></p>
      <p><span style="color: #16a34a;">✓ Separates pre-mitigation and post-mitigation risks</span></p>
      <p><span style="color: #16a34a;">✓ Includes rationale for thresholds as specified in Seoul commitments</span></p>
      <p><span style="color: #dc2626;">✗ Risk thresholds set very high</span></p>
      <p><span style="color: #dc2626;">✗ Thresholds are described only in abstract terms</span></p>
    `,
    'risk-mitigations': `
      <p><span style="color: #16a34a;">✓ Discusses both security and deployment mitigations</span></p>
      <p><span style="color: #dc2626;">✗ Few specific details for security measures</span></p>
      <p><span style="color: #dc2626;">✗ No specific details for deployment measures</span></p>
      <p><span style="color: #dc2626;">✗ Specific mitigations are not connected to specific risk thresholds</span></p>
    `,
    'halting-procedures': `
      <p><span style="color: #16a34a;">✓ Includes both deployment and development halting procedures</span></p>
      <p><span style="color: #dc2626;">✗ Halting commitment weakened by very high thresholds for "high" and "critical" risk</span></p>
    `,
    'safety-investment': `
      <p><span style="color: #16a34a;">✓ Early leader in discussing AGI risks and safety research</span></p>
      <p><span style="color: #16a34a;">✓ Commits to third-party audits of scorecard evaluations</span></p>
      <p><span style="color: #dc2626;">✗ Failed on multiple occasions to adhere to preparedness framework as described:</span></p>
      <p style="margin-left: 20px;"><span style="color: #dc2626;">• Rushed safety evaluation for GPT-4o release <sup><a target="_blank" rel="noopener noreferrer" href="https://www.washingtonpost.com/technology/2024/07/12/openai-ai-safety-regulation-gpt4/">1</a></sup></span></p>
      <p style="margin-left: 20px;"><span style="color: #dc2626;">• Delayed scorecard publication for GPT-4o <sup><a target="_blank" rel="noopener noreferrer" href="https://www.themidasproject.com/watchtower/2024/08/08/openai-3/">2</a></sup></span></p>
      <p style="margin-left: 20px;"><span style="color: #dc2626;">• Used early model checkpoint for o1-preview evaluations without clear disclosure <sup><a target="_blank" rel="noopener noreferrer" href="https://x.com/tszzl/status/1864928690762867166">3</a></sup></span></p>
      <p style="margin-left: 20px;"><span style="color: #dc2626;">• Missing evaluations for o1 pro <sup><a target="_blank" rel="noopener noreferrer" href="https://thezvi.substack.com/p/the-o1-system-card-is-not-about-o1">4</a></sup></span></p>
      <p style="margin-left: 20px;"><span style="color: #dc2626;">• Did not share evaluation results for o3 launch in deep research <sup><a target="_blank" rel="noopener noreferrer" href="https://www.transformernews.ai/p/how-to-think-about-deepseek">5</a></sup></span></p>
    `,
  },
  'samsung': {
    'risk-evaluations': '<p><span style="color: #dc2626;">✗ No public evidence of implementation</span></p>',
    'risk-thresholds': '<p><span style="color: #dc2626;">✗ No public evidence of implementation</span></p>',
    'risk-mitigations': '<p><span style="color: #dc2626;">✗ No public evidence of implementation</span></p>',
    'halting-procedures': '<p><span style="color: #dc2626;">✗ No public evidence of implementation</span></p>',
    'safety-investment': '<p><span style="color: #dc2626;">✗ No public evidence of implementation</span></p>',
  },
    'tii': {
    'risk-evaluations': '<p><span style="color: #dc2626;">✗ No public evidence of implementation</span></p>',
    'risk-thresholds': '<p><span style="color: #dc2626;">✗ No public evidence of implementation</span></p>',
    'risk-mitigations': '<p><span style="color: #dc2626;">✗ No public evidence of implementation</span></p>',
    'halting-procedures': '<p><span style="color: #dc2626;">✗ No public evidence of implementation</span></p>',
    'safety-investment': '<p><span style="color: #dc2626;">✗ No public evidence of implementation</span></p>',
  },
  'xai': {
    'risk-evaluations': '<p><span style="color: #dc2626;">✗ No public evidence of implementation</span></p>',
    'risk-thresholds': '<p><span style="color: #dc2626;">✗ No public evidence of implementation</span></p>',
    'risk-mitigations': '<p><span style="color: #dc2626;">✗ No public evidence of implementation</span></p>',
    'halting-procedures': '<p><span style="color: #dc2626;">✗ No public evidence of implementation</span></p>',
    'safety-investment': '<p><span style="color: #dc2626;">✗ No public evidence of implementation</span></p>',
  },
  'zhipu': {
    'risk-evaluations': '<p><span style="color: #dc2626;">✗ No public evidence of implementation</span></p>',
    'risk-thresholds': '<p><span style="color: #dc2626;">✗ No public evidence of implementation</span></p>',
    'risk-mitigations': '<p><span style="color: #dc2626;">✗ No public evidence of implementation</span></p>',
    'halting-procedures': '<p><span style="color: #dc2626;">✗ No public evidence of implementation</span></p>',
    'safety-investment': '<p><span style="color: #dc2626;">✗ No public evidence of implementation</span></p>',
  },
}


export const companyDescriptions: Record<string, string> = {
  amazon: "Amazon has released a Frontier Model Safety Framework <sup><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://assets.amazon.science/a7/7c/8bdade5c4eda9168f3dee6434fff/pc-amazon-frontier-model-safety-framework-2-7-final-2-9.pdf\">1</a></sup> that includes a commitment to conduct risk evaluations, one level of upcoming thresholds for unacceptable CBRN, Cyber, and AI R&D risks, and a set of development, deployment, and security mitigations that they will use to manage risk. These mitigations are not directly connected to specific risk thresholds. They commit to halting external deployment if unacceptable risk is detected, but not halting development or internal deployment.",
  anthropic: "Anthropic released the first major \"red line\" risk evaluation policy among top AI developers, known as their responsible scaling policy <sup><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.anthropic.com/news/anthropics-responsible-scaling-policy\">1</a></sup>. They conduct risk evaluations at least every six months. For the upcoming tier of risks, they've specified (in abstract terms) risk thresholds for (1) model autonomy and (2) chemical, biological, radiological, and nuclear risks. Reaching these capability thresholds will necessitate the implementation of new security and deployment mitigations. These mitigation standards have also been described in abstract terms. Anthropic has made an affirmative commitment to pause deployment and training if these thresholds are reached without the required mitigations in place. They've already published one update to the policy, and appear invested in maintaining and adhering to the commitment.",
  cohere: "On February 7th, Cohere released their Secure AI Frontier Model Framework <sup><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://cohere.com/security/the-cohere-secure-ai-frontier-model-framework-february-2025.pdf\">1</a></sup>. This policy includes a commitment to conduct risk evaluations for new models, and not to release any new models that pose greater total risk than previous models. However, they only discuss limited near-term risks, and they don't provide specific evaluations-based thresholds that will be used to determine when the risk level is unacceptable. They also only describe mitigations in limited detail.",
  google: "<p> Note: Currently outdated while reviewing February 2025 updates to the Frontier Safety Framework</p><p></p><p>Google has released a \"red line\" risk evaluation policy known as their Frontier Safety Framework <sup><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://storage.googleapis.com/deepmind-media/DeepMind.com/Blog/introducing-the-frontier-safety-framework/fsf-technical-report.pdf\">1</a></sup>. This is a commitment to conduct risk evaluation across four major domains of risk, and to implement deployment and security mitigations when warnings signs of dangerous capabilities appear. However, it has yet to be fleshed out: mitigations have not been connected to risk thresholds, nor has the policy been implemented in a detailed, verifiable manner.</p>",
  g42: "G42 released a Frontier AI Safety Framework <sup><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.g42.ai/application/files/9517/3882/2182/G42_Frontier_Safety_Framework_Publication_Version.pdf\">1</a></sup> that includes a commitment to conduct risk evaluations, an upcoming risk threshold (for both biological and cybersecurity risks), and four tiers of deployment and security mitigations (described in abstract terms) which will be in place by the time risk thresholds are met, or else require halting procedures.",
  ibm: "IBM has not publicly implemented a \"red line\" risk evaluation policy that meets the standards of the Seoul commitments. They did release a blog post <sup><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://newsroom.ibm.com/blog-trustworthy-ai-at-scale-ibms-ai-safety-and-governance-framework\">1</a></sup> in the lead-up to the Paris AI Action Summit, ostensibly detailing their compliance, but no tiered red line risk evaluation framework can be found.",
  inflection: "Inflection has not publicly implemented a \"red line\" risk evaluation policy that meets the standards of the Seoul commitments.",
  meta: "On February 3rd, Meta released its Frontier AI Framework <sup><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://ai.meta.com/static-resource/meta-frontier-ai-framework/\">1</a></sup>. This framework includes a commitment to conduct risk evaluation, a set of tiered risk levels that would lead to halting procedures, and a set of outcome criteria for cyber and CBRN risks that are \"in scope\". These outcome criteria are not directly connected to the risk thresholds, nor are any specific mitigations described by the policy. The policy includes overly broad disclaimers that absolve them of obligations if risks aren't \"unique\" or clearly modeled, allowing them to write off (1) speculative risks and (2)risks that are simultaneously posed by other AI systems.",
  microsoft: "Microsoft has released a Frontier Governance Framework <sup><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/microsoft/msc/documents/presentations/CSR/Frontier-Governance-Framework.pdf\">1</a></sup> that includes a commitment to conduct risk evaluation every six months and for all models over 10^26 FLOPs, as well as a set of tiered risk levels for CBRN, cybersecurity, and model autonomy risks. They provide an abstract set of mitigations that they will use to ensure the risk thresholds are not breached, but specific mitigation standards are not connected to each threshold. They do commit to pause development and deployment if risk thresholds are exceeded without adequate mitigations in place.",
  mistral: "Mistral AI has not publicly implemented a \"red line\" risk evaluation policy that meets the standards of the Seoul commitments.",
  naver: "Naver has implemented an AI Safety Framework <sup><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://clova.ai/en/tech-blog/en-navers-ai-safety-framework-asf\">1</a></sup> that includes regular risk assessments, categorization of risks into \"misuse\" and \"loss of control\" categories, and details about governance structure. They commit to evaluating frontier AI models every 3 months or upon 6x compute increases. Their policy describes no specific thresholds nor mitigations, but does include a commitment to halt when risk is deemed unacceptable.",
  openai: "OpenAI's \"red line\" risk evaluation policy is known as their Preparedness Framework <sup><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://cdn.openai.com/openai-preparedness-framework-beta.pdf\">1</a></sup>. It includes a commitment to conduct risk evaluations and monitor for tiered risk levels across four domains, and implement mitigations upon reaching those risk levels. However, they have also seemingly struggled to adhere to this framework on multiple occasions.",
  samsung: "Samsung has not publicly implemented a \"red line\" risk evaluation policy that meets the standards of the Seoul commitments.",
  tii: "Technology Innovation Institute has not publicly implemented a \"red line\" risk evaluation policy that meets the standards of the Seoul commitments.",
  xai: "xAI has not publicly implemented a \"red line\" risk evaluation policy that meets the standards of the Seoul commitments.",
  zhipu: "Zhipu.ai has not publicly implemented a \"red line\" risk evaluation policy that meets the standards of the Seoul commitments."
}

export type PolicyStatus = 'full' | 'partial' | 'none';

export const policyStatuses: Record<string, PolicyStatus> = {
  amazon: 'full',
  anthropic: 'full',
  cohere: 'partial',
  google: 'full',
  g42: 'full',
  ibm: 'none',
  inflection: 'none',
  meta: 'partial',
  microsoft: 'full',
  mistral: 'none',
  naver: 'partial',
  openai: 'full',
  samsung: 'none',
  tii: 'none',
  xai: 'none',
  zhipu: 'none'
};
