module.exports = {
  'extends': './development.js',
  'env': {
    'jest': true,
  },
  'rules': {
    // Don't enforce naming conventions in test items
    'component-class-suffix': false,
    'directive-class-suffix': false,
    'pipe-prefix': false,

    // Allow inline templates
    'component-max-inline-declarations': false,

    // We often need to coerce to `any` in tests to verify how bad inputs are handled
    'no-any': false,
    'no-unsafe-any': false,

    // Allow lifecycle methods to be manually triggered
    'no-lifecycle-call': false,

    // This allows easy access to private properties in tests
    'no-string-literal': false,

    // We aren't as concerned with test components performance
    'prefer-on-push-component-change-detection': false,

    // Don't enforce member-access for test components
    'prefer-output-readonly': false,

    // Don't require member access to be defined in test components
    'member-access': false,

    // Don't enforce accessibility for test components
    'template-accessibility-alt-text': false,
    'template-accessibility-elements-content': false,
    'template-accessibility-label-for': false,
    'template-accessibility-valid-aria': false,

    // Don't force trackBy in test components
    'template-use-track-by-function': false,

    // Selectors are rarely needed for test host components
    'use-component-selector': false,
  },
};
