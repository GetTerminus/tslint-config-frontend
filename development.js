// NOTE: When overwriting part of a TSLint rule, all rule options must be redeclared.
module.exports = {
  'extends': './ci.js',
  // While in development, all issues are reported as a warning so compilation is not effected
  'defaultSeverity': 'warning',
};
