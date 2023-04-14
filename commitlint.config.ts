type ParsedRegexType = {
  kind: string;
  ticket: string;
  dev: string;
  desc: string;
  header: string;
};

const VALID_KINDS = [
  'feat: ',
  'fix: ',
  'breaking: ',
  'build: ',
  'chore: ',
  'ci: ',
  'docs: ',
  'style: ',
  'refactor: ',
  'perf: ',
  'test: ',
  'config: ',
];

const validateKind = (kind: string) => VALID_KINDS.includes(kind);

module.exports = {
  parserPreset: {
    parserOpts: {
      headerPattern: new RegExp(
        '^' +
          /([a-z]+:\s)/.source +
          /(\[[\w-]+\]\s)/.source +
          /(<[A-Za-z0-9\s]+>\s)/.source +
          /(.+)/.source +
          '$'
      ),
      headerCorrespondence: ['kind', 'ticket', 'dev', 'desc'],
    },
  },
  plugins: [
    {
      rules: {
        'header-match-team-pattern': (parsed: ParsedRegexType) => {
          const { kind, ticket, dev, desc } = parsed;
          if (
            kind === null ||
            ticket === null ||
            dev === null ||
            desc === null
          ) {
            return [
              false,
              'Commit must be in format => kind: [TicketNumber] <Author> Some description',
            ];
          }
          if (!validateKind(kind)) {
            return [
              false,
              `Invalid kind, please select one of this => ${VALID_KINDS.join()}`,
            ];
          }
          return [true, ''];
        },
      },
    },
  ],
  rules: {
    'header-match-team-pattern': [2, 'always'],
  },
};

export {};
