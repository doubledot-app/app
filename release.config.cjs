const isStaging = process.env.CI_COMMIT_BRANCH === 'staging';

console.log('🐍 ~ Release branch:', process.env.CI_COMMIT_BRANCH);

const mainVerifyConditions = [
  ['@semantic-release/changelog'],
  [
    '@semantic-release/git',
    {
      assets: ['package.json', 'CHANGELOG.md'],
      message: 'chore(release): ${nextRelease.version}\n\n${nextRelease.notes}'
    }
  ]
];

const stagingVerifyConditions = [
  [
    '@semantic-release/git',
    {
      message: 'chore(release): ${nextRelease.version}\n\n${nextRelease.notes}'
    }
  ]
];

const mainPrepare = [
  '@semantic-release/changelog',
  [
    '@semantic-release/npm',
    {
      npmPublish: false
    }
  ],
  [
    '@semantic-release/git',
    {
      assets: ['package.json', 'CHANGELOG.md'],
      message: 'chore(release): ${nextRelease.version}\n\n${nextRelease.notes}'
    }
  ]
];

const stagingPrepare = [
  [
    '@semantic-release/git',
    {
      message: 'chore(release): ${nextRelease.version}\n\n${nextRelease.notes}'
    }
  ]
];

const verifyConditions = isStaging ? stagingVerifyConditions : mainVerifyConditions;
const prepare = isStaging ? stagingPrepare : mainPrepare;

const analyzeCommits = [['@semantic-release/commit-analyzer']];
const generateNotes = ['@semantic-release/release-notes-generator'];

const fail = [];
const publish = [];
const success = [];
const addChannel = [];
const verifyRelease = [];

module.exports = {
  repositoryUrl: 'https://github.com/doubledot-app/app',
  branches: [{name: 'main'}, {name: 'staging', prerelease: 'staging'}],
  verifyConditions,
  analyzeCommits,
  verifyRelease,
  generateNotes,
  addChannel,
  prepare,
  publish,
  success,
  fail
};
