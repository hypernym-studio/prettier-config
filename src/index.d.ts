export interface Config {
  /**
   * Include parentheses around a sole arrow function parameter.
   *
   * @default 'always'
   */
  arrowParens: 'always' | 'avoid'
  /**
   * Print semicolons at the ends of statements.
   *
   * @default false
   */
  semi: boolean
  /**
   * Use single quotes instead of double quotes.
   *
   * @default true
   */
  singleQuote: boolean
  /**
   * Print trailing commas wherever possible in multi-line comma-separated syntactic structures.
   *
   * @default 'none'
   */
  trailingComma: 'es5' | 'none' | 'all'
}
