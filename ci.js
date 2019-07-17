module.exports = {

  // Extend existing rulesets
  'rulesDirectory': [
    'codelyzer',
  ],

  'defaultSeverity': 'error',

  // NOTE: Rules are tagged with the source: `#tslint` or `#codelyzer` and if it is fixable: `#hasFixer`
  'rules': {
    // An interface or literal type with just a call signature can be written as a function type.
    // #tslint #hasFixer
    'callable-types': true,

    // JavaScript and general programming convention is to refer to classes in PascalCase.
    // It can be confusing to use camelCase or other conventions for class names.
    // #tslint
    'class-name': true,

    // Helps to maintain a consistent, readable style in the codebase.
    // #tslint #hasFixer
    'comment-format': [
      true,
      'check-space',
    ],

    // Consistent conventions make it easy to quickly identify and reference assets of different types.
    // #codelyzer
    'component-class-suffix': true,

    // Large, inline templates and styles obscure the component’s purpose and implementation, reducing readability and maintainability.
    // #codelyzer
    'component-max-inline-declarations': [
      true,
      {
        'animations': 15,
        'styles': 3,
        'template': 3,
      },
    ],

    // a) Keeps the element names consistent with the specification for Custom Elements.
    // b) Consistent conventions make it easy to quickly identify and reference assets of different types.
    // c) Components are easy to identify in the DOM.
    // See https://angular.io/styleguide#style-02-07 https://angular.io/styleguide#style-05-02 https://angular.io/styleguide#style-05-02
    // #codelyzer
    'component-selector': [
      true,
      'element',
      // No prefix is enforced at the base level. This should be set specifically by consumers.
      '',
      'kebab-case',
    ],

    // Some decorators can only be used in certain class types. For example, an @Input should not be used in an @Injectable class.
    // #codelyzer
    'contextual-decorator': true,

    // Certain lifecycle methods can only be used in certain class types.
    // #codelyzer
    'contextual-lifecycle': true,

    // Prevent possible accidental execution due to missing brackets
    // #tslint #hasFixer
    'curly': 'error',

    // We should be alerted whenever using an identifier marked with a JSDoc `@deprecated` flag.
    // #tslint
    'deprecation': true,

    // Consistent conventions make it easy to quickly identify and reference assets of different types.
    // #codelyzer
    'directive-class-suffix': true,

    // a) Consistent conventions make it easy to quickly identify and reference assets of different types.
    // b) It is easier to recognize that a symbol is a directive by looking at the template’s HTML.
    // See https://angular.io/styleguide#style-02-06 https://angular.io/styleguide#style-02-08
    // #codelyzer
    'directive-selector': [
      true,
      'attribute',
      '',
      'camelCase',
    ],

    // For some libraries, importing the library directly can cause unused submodules to be loaded, so you may want to block these imports
    // and require that users directly import only the submodules they need. In other cases, you may simply want to ban an import because
    // using it is undesirable or unsafe.
    // #tslint
    'import-blacklist': [
      true,
      'lodash',
    ],

    // Imports are easier for the reader to look at when they’re tidy.
    // #codelyzer
    'import-destructuring-spacing': true,

    // Helps to maintain a consistent, readable style in the codebase.
    // #tslint
    'import-spacing': true,

    // Interfaces are generally preferred over type literals because interfaces can be implemented, extended and merged.
    // #tslint #hasFixer
    'interface-over-type-literal': true,

    // Helps to maintain a consistent, readable style in the codebase.
    // #tslint
    'jsdoc-format': [
      true,
      'check-multiline-start',
    ],

    // Labels in JavaScript only can be used in conjunction with break or continue, constructs meant to be used for loop flow control. While
    // you can theoretically use labels on any block statement in JS, it is considered poor code structure to do so.
    // #tslint
    'label-position': true,

    // Explicit visibility declarations can make code more readable and accessible for those new to TS. Members lacking a visibility
    // declaration may be an indication of an accidental leak of class internals.
    // #tslint #hasFixer
    'member-access': [
      true,
      'check-accessor',
      'check-parameter-property',
    ],

    // Both formats of type assertions have the same effect, but only as type assertions work in .tsx files.
    // #tslint #hasFixer
    'no-angle-bracket-type-assertion': true,

    // Using any as a type declaration nullifies the compile-time benefits of the type system.
    // #tslint
    'no-any': true,

    // @Attribute is considered bad practice. Use @Input instead.
    // #codelyzer
    'no-attribute-decorator': true,

    // Comparing boolean values to boolean literals is unnecessary, as those expressions will result in booleans too.
    // #tslint #hasFixer
    'no-boolean-literal-compare': true,

    // Ensure that directives do not implement conflicting lifecycle interfaces.
    // #codelyzer
    'no-conflicting-lifecycle': true,

    // The second call to ‘super()’ will fail at runtime.
    // #tslint
    'no-duplicate-super': true,

    // An empty interface is equivalent to its supertype (or `{}`).
    // #tslint
    'no-empty-interface': true,

    // The property associated with @HostBinding or the method associated with @HostListener can be modified only in a single place: in the
    // directive’s class. If you use the host metadata property, you must modify both the property declaration inside the controller, and
    // the metadata associated with the directive.
    // See: https://angular.io/styleguide#style-06-03
    // #codelyzer
    'no-host-metadata-property': true,

    // Disallows importing modules that are not listed as dependency in the project’s package.json
    // #tslint
    'no-implicit-dependencies': true,

    // Explicit types where they can be easily inferred by the compiler make code more verbose.
    // #tslint #hasFixer
    'no-inferrable-types': true,

    // a) It is easier and more readable to identify which properties in a class are inputs.
    // b) If you ever need to rename the property name associated with @Input, you can modify it in a single place.
    // c) The metadata declaration attached to the directive is shorter and thus more readable.
    // See https://angular.io/styleguide#style-05-12
    // #codelyzer
    'no-inputs-metadata-property': true,

    // Two names for the same property (one private, one public) is inherently confusing.
    // #codelyzer
    'no-input-rename': true,

    // Explicit calls to lifecycle methods could be confusing. Invoke them is an Angular’s responsability.
    // #codelyzer
    'no-lifecycle-call': true,

    // Interfaces in TypeScript aren’t meant to describe constructors on their implementations.
    // #tslint
    'no-misused-new': true,

    // Using non-null assertion cancels the benefits of the strict null checking mode.
    // #tslint
    'no-non-null-assertion': true,

    // Listeners subscribed to an output with such a name will also be invoked when the native event is raised.
    // #codelyzer
    'no-output-native': true,

    // Two names for the same property (one private, one public) is inherently confusing.
    // See https://angular.io/styleguide#style-05-13
    // #codelyzer
    'no-output-rename': true,

    // Angular allows for an alternative syntax on-*. If the event itself was prefixed with on this would result in an on-onEvent binding
    // expression.
    // See https://angular.io/guide/styleguide#dont-prefix-output-properties
    // #codelyzer
    'no-output-on-prefix': true,

    // a) It is easier and more readable to identify which properties in a class are events.
    // b) If you ever need to rename the event name associated with @Output, you can modify it in a single place.
    // c) The metadata declaration attached to the directive is shorter and thus more readable.
    // See https://angular.io/styleguide#style-05-12
    // #codelyzer
    'no-outputs-metadata-property': true,

    // Impure pipes do not perform well because they run on every change detection cycle.
    // #codelyzer
    'no-pipe-impure': true,

    // If you ever need to rename the property associated with @ContentChild, @ContentChildren, @ViewChild or @ViewChildren, you can modify
    // it in a single place.
    // #codelyzer
    'no-queries-metadata-property': true,

    // Warns if a type assertion does not change the type of an expression.
    // #tslint #hasFixer
    'no-unnecessary-type-assertion': true,

    // If you’re dealing with data of unknown or “any” types, you shouldn’t be accessing members of it. Either add type annotations for
    // properties that may exist or change the data type to the empty object type `{}`.
    // #tslint
    'no-unsafe-any': true,

    // Unused CSS is are likely an error due to incomplete refactoring.
    // #codelyzer #hasFixer
    'no-unused-css': true,

    // Helps to maintain a consistent, readable style in the codebase.
    // NOTE: ESLint has a related rule, but the 'fixer' does not fix sort order.
    // #tslint #hasFixer
    'ordered-imports': [
      true,
      {
        'case-insensitive': true,
      },
    ],

    // Consistent conventions make it easy to quickly identify and reference assets of different types.
    // #codelyzer
    // No prefix is enforced at the base level. This should be set specifically by consumers.
    'pipe-prefix': [
      true,
      '',
    ],

    // Enforces component’s change detection to ChangeDetectionStrategy.OnPush for better performance.
    // #codelyzer
    'prefer-on-push-component-change-detection': true,

    // Prefer to declare @Output as readonly since they should not be reassigned.
    // #codelyzer
    'prefer-output-readonly': true,

    // The ./ prefix is standard syntax for relative URLs; don’t depend on Angular’s current ability to do without that prefix.
    // See https://angular.io/guide/styleguide#style-05-04
    // #codelyzer
    'relative-url-prefix': true,

    // Adding two variables not of the same type can easily cause unexpected behavior.
    // #tslint
    'restrict-plus-operands': true,

    // Prefer return; in void functions and return undefined; in value-returning functions.
    // #tslint
    'return-undefined': true,

    // Helps to maintain a consistent, readable style in the codebase.
    // NOTE: The eslint fixer doesn't seem to work for this one so we are using TSLint's semicolon enforcement.
    // #tslint #hasFixer
    'semicolon': [
      true,
      'always',
    ],

    // Enforces alternate text for elements which require the alt, aria-label, aria-labelledby attributes for better accessibility
    // #codelyzer
    'template-accessibility-alt-text': true,

    // Heading, anchor and button elements should have content to be accessible by screen readers
    // #codelyzer
    'template-accessibility-elements-content': true,

    // The label tag should either have a `for` attribute or should have associated control.
    // #codelyzer
    'template-accessibility-label-for': true,

    // Ensures that the correct ARIA attributes are used.
    // #codelyzer
    'template-accessibility-valid-aria': true,

    // Ensure that the two-way data binding syntax is correct.
    // #codelyzer #hasFixer
    'template-banana-in-box': true,

    // The use of ‘$any’ nullifies the compile-time benefits of the Angular’s type system.
    // #codelyzer
    'template-no-any': true,

    // Calling expressions in templates causes it to run on every change detection cycle and may cause performance issues.
    // #codelyzer
    'template-no-call-expression': true,

    // Elements that can be visually distracting can cause accessibility issues with visually impaired users (e.g. `blink` or `marquee`).
    // #codelyzer
    'template-no-distracting-elements': true,

    // The use of ‘trackBy’ is considered a good practice and is better for performance.
    // #codelyzer
    'template-use-track-by-function': true,

    // Helps to maintain a consistent, readable style in the codebase.
    // #hasFixer
    'type-literal-delimiter': true,

    // Any two overloads that could be unified into one by using a union or an optional/rest parameter should be.
    // #tslint
    'unified-signatures': true,

    // Omitting the component selector makes debugging difficult.
    // #codelyzer
    'use-component-selector': true,

    // Interfaces prescribe typed method signatures. Use those signatures to flag spelling and syntax mistakes.
    // #codelyzer
    'use-lifecycle-interface': true,

    // Interfaces prescribe typed method signatures. Use those signatures to flag spelling and syntax mistakes.
    // #codelyzer
    'use-pipe-decorator': true,

    // Interfaces prescribe typed method signatures. Use those signatures to flag spelling and syntax mistakes.
    // #codelyzer
    'use-pipe-transform-interface': true,
  },
};
