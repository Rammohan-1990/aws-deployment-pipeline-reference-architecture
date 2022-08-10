const { awscdk } = require('projen');
const project = new awscdk.AwsCdkTypeScriptApp({
  cdkVersion: '2.36.0',
  defaultReleaseBranch: 'main',
  name: 'dpri',
  srcdir: 'infrastructure/src',
  testdir: 'infrastructure/test',
  githubOptions: {
    mergify: false,
    workflows: false,
  },
  pullRequestTemplate: false,
  gitignore: ['target/', '.vscode/'],
  context: {
    deployMode: 'pipeline',
  },

  /* Runtime dependencies of this module. */
  deps: [
    '@types/aws-lambda',
    '@aws-sdk/client-codeguru-reviewer',
    '@aws-sdk/client-codepipeline',
    '@aws-cdk/aws-synthetics-alpha',
  ],

  jestOptions: {
    jestVersion: '^27.0',
  },

  /* Build dependencies for this module. */
  devDeps: [
    'cdk-nag',
  ],

  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();