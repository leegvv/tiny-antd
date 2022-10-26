module.exports = {
    extends: [
        'plugin:react/jsx-runtime',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended'
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'react', 'react-hooks'],
    env: {
        browser: true,
        node: true,
        es6: true,
        mocha: true,
        jest: true,
        jasmine: true
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx']
            }
        },
        react: {
            version: 'detect'
        }
    },
    rules: {
        // allow debugger during development
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-console": 0,
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/explicit-module-boundary-types': 0,
        'react/prop-types': 0,
        'react/react-in-jsx-scope': 0,
        'array-bracket-spacing': [2, 'never'],
        'arrow-body-style': 0,
        'arrow-parens': [2, 'always'],
        'arrow-spacing': [
            2,
            {
                before: true,
                after: true
            }
        ],
        'block-scoped-var': 2,
        'brace-style': [
            2,
            '1tbs',
            {
                allowSingleLine: false
            }
        ],
        camelcase: [
            2,
            {
                properties: 'never'
            }
        ],
        'class-methods-use-this': 0,
        'comma-dangle': [2, 'never'],
        'comma-spacing': [
            2,
            {
                before: false,
                after: true
            }
        ],
        'comma-style': [2, 'last'],
        complexity: [1, 100],
        'computed-property-spacing': [2, 'never'],
        'consistent-return': 2,
        'consistent-this': [2, 'self'],
        'constructor-super': 2,
        curly: [2, 'all'],
        'dot-location': [2, 'property'],
        eqeqeq: [2, 'smart'],
        'func-call-spacing': [2, 'never'],
        'func-names': 0,
        'func-style': [
            2,
            'declaration',
            {
                allowArrowFunctions: true
            }
        ],
        'generator-star-spacing': [
            2,
            {
                before: false,
                after: true
            }
        ],
        'global-require': 2,
        'guard-for-in': 2,
        'id-blacklist': 0,
        indent: [
            2,
            4,
            {
                SwitchCase: 1
            }
        ],
        'jsx-quotes': [2, 'prefer-single'],
        'key-spacing': [
            2,
            {
                beforeColon: false,
                afterColon: true,
                mode: 'strict'
            }
        ],
        'keyword-spacing': [
            2,
            {
                before: true,
                after: true,
                overrides: {}
            }
        ],
        'line-comment-position': 0,
        'lines-around-comment': [
            2,
            {
                beforeBlockComment: false,
                beforeLineComment: false,
                allowBlockStart: true,
                allowBlockEnd: true
            }
        ],
        'max-lines': [
            1,
            {
                max: 450,
                skipBlankLines: true,
                skipComments: false
            }
        ],
        'max-nested-callbacks': [
            2,
            {
                max: 10
            }
        ],
        'max-statements-per-line': [
            2,
            {
                max: 1
            }
        ],
        'multiline-ternary': [0, 'never'],
        'new-cap': 2,
        'new-parens': 2,
        'newline-before-return': 0,
        'newline-per-chained-call': 0,
        'no-alert': 2,
        'no-array-constructor': 2,
        'no-caller': 2,
        'no-case-declarations': 2,
        'no-class-assign': 2,
        'no-cond-assign': [2, 'except-parens'],
        'no-confusing-arrow': 2,
        'no-const-assign': 2,
        'no-constant-condition': 2,
        'no-debugger': 1,
        'no-div-regex': 2,
        'no-dupe-args': 2,
        'no-dupe-class-members': 2,
        'no-dupe-keys': 2,
        'no-duplicate-case': 2,
        'no-duplicate-imports': [
            2,
            {
                includeExports: true
            }
        ],
        'no-else-return': 2,
        'no-empty': 2,
        'no-empty-function': 2,
        'no-empty-pattern': 2,
        'no-eval': 2,
        'no-ex-assign': 2,
        'no-extend-native': 2,
        'no-extra-bind': 2,
        'no-extra-label': 2,
        'no-extra-parens': 0,
        'no-extra-semi': 2,
        'no-fallthrough': 2,
        'no-floating-decimal': 2,
        'no-func-assign': 2,
        'no-global-assign': 2,
        'no-implicit-coercion': 2,
        'no-implicit-globals': 0,
        'no-implied-eval': 2,
        'no-inner-declarations': 0,
        'no-invalid-regexp': 2,
        'no-irregular-whitespace': 2,
        'no-iterator': 2,
        'no-labels': 2,
        'no-lone-blocks': 2,
        'no-lonely-if': 2,
        'no-loop-func': 2,
        'no-mixed-spaces-and-tabs': 2,
        'no-multi-spaces': [
            2,
            {
                exceptions: {
                    Property: false
                }
            }
        ],
        'no-multi-str': 0,
        'no-multiple-empty-lines': [
            2,
            {
                max: 1
            }
        ],
        'no-native-reassign': 2,
        'no-negated-condition': 0,
        'no-nested-ternary': 1,
        'no-new': 2,
        'no-new-func': 2,
        'no-new-object': 2,
        'no-new-symbol': 2,
        'no-new-wrappers': 2,
        'no-octal-escape': 2,
        'no-param-reassign': 2,
        'no-process-env': 2,
        'no-process-exit': 2,
        'no-proto': 2,
        'no-redeclare': 2,
        'no-return-assign': [2, 'always'],
        'no-script-url': 2,
        'no-self-assign': [
            2,
            {
                props: true
            }
        ],
        'no-self-compare': 2,
        'no-sequences': 2,
        'no-shadow': [
            2,
            {
                hoist: 'functions'
            }
        ],
        'no-shadow-restricted-names': 2,
        'no-spaced-func': 2,
        'no-tabs': 0,
        'no-template-curly-in-string': 2,
        'no-ternary': 0,
        'no-this-before-super': 2,
        'no-throw-literal': 2,
        'no-trailing-spaces': [
            2,
            {
                skipBlankLines: false
            }
        ],
        'no-undef': 0,
        'no-undef-init': 2,
        'no-undefined': 2,
        'no-underscore-dangle': 2,
        'no-unexpected-multiline': 2,
        'no-unmodified-loop-condition': 2,
        'no-unneeded-ternary': [
            2,
            {
                defaultAssignment: false
            }
        ],
        'no-unreachable': 2,
        'no-unsafe-finally': 2,
        'no-unsafe-negation': 2,
        'no-unused-expressions': 2,
        'no-use-before-define': [2, 'nofunc'],
        'no-useless-computed-key': 2,
        'no-useless-concat': 2,
        'no-useless-constructor': 2,
        'no-useless-escape': 2,
        'no-useless-rename': 2,
        'no-void': 2,
        'no-whitespace-before-property': 2,
        'no-with': 2,
        'object-curly-newline': 0,
        'object-curly-spacing': [2, 'never'],
        'object-property-newline': [
            2,
            {
                allowMultiplePropertiesPerLine: true
            }
        ],
        'object-shorthand': [0, 'always'],
        'one-var': [2, 'never'],
        'one-var-declaration-per-line': 0,
        'operator-linebreak': [2, 'after'],
        'prefer-numeric-literals': 2,
        'prefer-reflect': 2,
        'prefer-rest-params': 2,
        'prefer-spread': 2,
        'prefer-template': 0,
        radix: 0,
        'react/display-name': [
            0,
            {
                ignoreTranspilerName: false
            }
        ],
        'react/jsx-boolean-value': [2, 'always'],
        'react/jsx-curly-spacing': [2, 'never'],
        'react/jsx-equals-spacing': [2, 'never'],
        'react/jsx-filename-extension': 0,
        'react/jsx-first-prop-new-line': [2, 'multiline'],
        'react/jsx-handler-names': 0,
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'react/jsx-key': 2,
        'react/jsx-max-props-per-line': [
            2,
            {
                maximum: 4
            }
        ],
        'react/jsx-no-duplicate-props': [
            2,
            {
                ignoreCase: false
            }
        ],
        'react/jsx-no-literals': 0,
        'react/jsx-no-undef': 2,
        'react/jsx-pascal-case': 2,
        'react/jsx-tag-spacing': [
            2,
            {
                beforeSelfClosing: 'never'
            }
        ],
        'react/jsx-uses-react': 2,
        'react/jsx-uses-vars': 2,
        'react/jsx-no-comment-textnodes': 2,
        'react/no-danger': 0,
        'react/no-deprecated': 2,
        'react/no-did-mount-set-state': 2,
        'react/no-did-update-set-state': 2,
        'react/no-direct-mutation-state': 2,
        'react/no-is-mounted': 2,
        'react/no-multi-comp': [
            0,
            {
                ignoreStateless: true
            }
        ],
        'react/no-render-return-value': 2,
        'react/no-set-state': 0,
        'react/no-string-refs': 0,
        'react/no-unknown-property': 2,
        'react/prefer-es6-class': 2,
        'react/prefer-stateless-function': 0,
        'react/require-optimization': 0,
        'react/require-render-return': 2,
        'react/self-closing-comp': 2,
        'react/sort-comp': 0,
        'react/jsx-wrap-multilines': 2,
        'react/no-find-dom-node': 1,
        'react/forbid-component-props': 0,
        'react/no-danger-with-children': 2,
        'react/no-unused-prop-types': [
            1,
            {
                skipShapeProps: true
            }
        ],
        'react/style-prop-object': 2,
        'react/no-children-prop': 2,
        'react/no-unescaped-entities': 2,
        'react-hooks/rules-of-hooks': 2,
        'react-hooks/exhaustive-deps': 1,
        'default-case': 1,
        'no-console': 1,
        'padded-blocks': [2, 'never'],
        'prefer-const': 1,
        'quote-props': [2, 'as-needed'],
        quotes: [2, 'single', {avoidEscape: true, allowTemplateLiterals: true}],
        'require-yield': 2,
        'rest-spread-spacing': [2, 'never'],
        semi: [2, 'always'],
        'semi-spacing': [
            2,
            {
                before: false,
                after: true
            }
        ],
        'space-before-blocks': [2, 'always'],
        'space-before-function-paren': [
            2,
            {
                anonymous: 'never',
                named: 'never',
                asyncArrow: 'always'
            }
        ],
        'space-in-parens': [2, 'never'],
        'space-infix-ops': 2,
        'space-unary-ops': [
            2,
            {
                words: true,
                nonwords: false
            }
        ],
        'template-curly-spacing': [2, 'never'],
        'use-isnan': 2,
        'wrap-iife': [2, 'outside'],
        yoda: [
            2,
            'never',
            {
                exceptRange: false,
                onlyEquality: false
            }
        ]
    }
}
