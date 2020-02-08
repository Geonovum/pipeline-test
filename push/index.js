const core = require('@actions/core');
const github = require('@actions/github');

try {
  // tpod-id
  const tpodId = core.getInput('tpod-id');
  console.log('tpod-id: ${tpodId}');
} catch (error) {
  core.setFailed(error.message);
}