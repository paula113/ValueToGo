export default {
  'CD/W No.': {
    prop: 'CD/W No.',
    type: Number,
    required: true,
    // Excel stores dates as integers.
    // E.g. '24/03/2018' === 43183.
    // Such dates are parsed to UTC+0 timezone with time 12:00 .
  },
  Description: {
    prop: 'Description',
    type: String,
    // Excel stores dates as integers.
    // E.g. '24/03/2018' === 43183.
    // Such dates are parsed to UTC+0 timezone with time 12:00 .
  },
  'Remediated as of, or prior to period-end?': {
    prop: 'Remediated as of, or prior to period-end?',
    type: String,
    // Excel stores dates as integers.
    // E.g. '24/03/2018' === 43183.
    // Such dates are parsed to UTC+0 timezone with time 12:00 .
  },
  'Final Conclusion on Severity': {
    prop: 'Final Conclusion on Severity',
    type: String,
  },
  FSLI: {
    prop: 'FSLI',
    type: String,
  },
  'Internal Control Component': {
    prop: 'Internal Control Component',
    type: String,
  },
  'Business Process': {
    prop: 'Business Process',
    type: String,
  },
  'Audit Unit': {
    prop: 'Audit Unit',
    type: String,
  },
  'Exception Identified By': {
    prop: 'Exception Identified By',
    type: String,
  },
  Assertions: {
    prop: 'Assertions',
    type: String,
  },
  'Audit Response': {
    prop: 'Audit Response',
    type: String,
  },
  'Does the deficiency relate directly to the achieve…nt of one or more financial statement assertions?': {
    prop: 'Does the deficiency relate directly to the achieve…nt of one or more financial statement assertions?',
    type: String,
  },
  'Is the likelihood of a misstatement resulting from…ss (or combination) at least reasonably possible?': {
    prop: 'Is the likelihood of a misstatement resulting from…ss (or combination) at least reasonably possible?',
    type: String,
  },
  'Value of transactions or accounts exposed or expec…o be exposed to the deficiency/weakness - Interim': {
    prop: 'Value of transactions or accounts exposed or expec…o be exposed to the deficiency/weakness - Interim',
    type: String,
  },
  'Value of transactions or accounts exposed or expec…to be exposed to the deficiency/weakness - Annual': {
    prop: 'Value of transactions or accounts exposed or expec…to be exposed to the deficiency/weakness - Annual',
    type: String,
  },
  'Is the magnitude of the potential misstatement, wh…ither the interim or annual financial statements?': {
    prop: 'Is the magnitude of the potential misstatement, wh…ither the interim or annual financial statements?',
    type: String,
  },
  'Factors considered in determining likelihood and magnitude': {
    prop: 'Factors considered in determining likelihood and magnitude',
    type: String,
  },
  'Is this at least a significant deficiency?': {
    prop: 'Is this at least a significant deficiency?',
    type: String,
  },
  rationale: {
    prop: 'rationale',
    type: String,
  },
  'Do compensating controls exist and operate effecti…to either interim or annual financial statements?': {
    prop: 'Do compensating controls exist and operate effecti…to either interim or annual financial statements?',
    type: String,
  },
  'Description of Compensating Controls': {
    prop: 'Description of Compensating Controls',
    type: String,
  },
  'Refer to where testing (either by us or management…nsating control was documented in the work-papers': {
    prop: 'Refer to where testing (either by us or management…nsating control was documented in the work-papers',
    type: String,
  },
  'Is this a Material Weakness?': {
    prop: 'Is this a Material Weakness?',
    type: String,
  },
  'Document Rationale': {
    prop: 'Document Rationale',
    type: String,
  },
  'Are there multiple control deficiencies and/or sig…inancial statement account balance or disclosure?': {
    prop: 'Are there multiple control deficiencies and/or sig…inancial statement account balance or disclosure?',
    type: String,
  },
  'Aggregation Description': {
    prop: 'Aggregation Description',
    type: String,
  },
  'Source Ref. No.': {
    prop: 'Source Ref. No.',
    type: String,
  },
  Title: {
    prop: 'Title',
    type: String,
  },
  'Sub-process': {
    prop: 'Sub-process',
    type: String,
  },
  'FSLI or Disclosure': {
    prop: 'FSLI or Disclosure',
    type: String,
  },
  'Roll Forward?': {
    prop: 'Roll Forward?',
    type: String,
  },
  'Control No.': {
    prop: 'Control No.',
    type: Number,
  }, // number
  'Control Title': {
    prop: 'Control Title',
    type: String,
  },
  'Audit Response Links': {
    prop: 'Audit Response Links',
    type: String,
  },
  'Aggregation Reference': {
    prop: 'Aggregation Reference',
    type: String,
  },
  IsReportedToManagement: {
    prop: 'IsReportedToManagement',
    type: String,
  },
  ExceptionAmount: {
    prop: 'ExceptionAmount',
    type: String,
  },
  AffectedPopulationAmount: {
    prop: 'AffectedPopulationAmount',
    type: String,
  },
  RootCause: {
    prop: 'RootCause',
    type: String,
  },
  Implication: {
    prop: 'Implication',
    type: String,
  },
  Recommendation: {
    prop: 'Recommendation',
    type: String,
  },
  ResponsiblePerson: {
    prop: 'ResponsiblePerson',
    type: String,
  },
  TargetDate: {
    prop: 'TargetDate',
    type: String,
  },

};
