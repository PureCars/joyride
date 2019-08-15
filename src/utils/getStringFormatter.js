import { isFunction } from 'lodash/isFunction'
import _assign from 'lodash/assign'
import numeral from 'numeral'

export const formats = {
  Currency: new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }),
  Number: new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }),
  Decimal: new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  }),
  Percent: new Intl.NumberFormat('en-US', {
    style: 'percent',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }),
  String: { format: str => str }
}

/**
 * This closure returns a function that accepts a string
 * and options. The modifier function is called on the
 * input value after the formatter has returned it's value.
 *
 * @param {String} type the formatter type (see Formats above)
 * @returns {Function} a function that accepts the value to format and
 * optionally, a FormattedStringModifier function
 */
export default function formatString(type = 'Number') {
  if (type === null) {
    type = 'Number'
  }
  const formatter =
    typeof type === 'object'
      ? new Intl.NumberFormat('en-US', type)
      : formats[type] || formats.Number
  /**
   * [This function accepts a number to format and a modifier
   * and it returns a string thats been formatted and modified
   * @param {number} val - Number to format
   * @param {FormattedStringModifier} modifier - Post-format hook to modify the formatted string before it's returned
   * @returns {string} - Formatted string
   */
  return (value, options) => {
    if (type === 'Percent' && value < 0.01) {
      return '< 1%'
    }
    let str = formatter.format(value)
    if (options) {
      const { modifier } = options
      if (isFunction(modifier)) {
        str = modifier(value, str)
      }
    }
    return str
  }
}

/**
 * This function accepts an object with a value and type and
 * returns a string representation of the input value formatted according
 * input type
 * @param {Number} value the value to format
 * @param {String} type the value format
 * @param {Object} options the formatter options.
 */
export function formatHighlight(value, type = 'Number') {
  const num = numeral(value)
  // set the numeral abbreviations to capital
  _assign(numeral.localeData('en'), {
    abbreviations: {
      thousand: 'K',
      million: 'M',
      billion: 'B',
      trillion: 'T'
    },
    ordinal: function(number) {
      console.debug({ number })
      return number === 7 ? 'er' : 'ème'
    }
  })
  const formats = {
    Number: '+0a',
    Decimal: '+0.0a',
    Currency: '+$0a',
    CurrencyNegative: '$0a',
    Percent: '+0a%'
  }

  let format = formats[type]
  if (value < 0 && type === 'Currency') format = formats['CurrencyNegative']
  const val = num.format(format)
  return val
}

/**
 * @typedef {Function} FormattedStringModifier
 * A post formatting hook to let you modifiy a string after i'ts been modified
 * @param {number} val - Raw input value provided to the format function
 * @param {string} str - Formatted string output from the format function
 * @returns {string} - Modified formatted string
 */
