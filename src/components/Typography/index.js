import React from 'react'
import PropTypes from 'prop-types'
import upperFirst from 'lodash/upperFirst'
import classnames from 'classnames'
import { withStyles } from '@material-ui/styles'
import { TypographyBase } from './styles'

/**
 * Defines typography colors and selectors to get their values from the theme.
 */
export const colorSelectors = {
  textPrimary: () => '',
  textSecondary: () => '',
  textDark: () => '',
  primary: () => '',
  secondary: () => '',
  success: () => '',
  error: () => '',
  inverse: () => '',
  inherit: () => 'inherit'
}

/**
 * Gets the key to use for a given color name.
 */
const getColorKey = color => `color${upperFirst(color)}`

/**
 * Defines styles that will be passed as `classes` to Typography.
 */
const styles = theme => ({
  h1: {
    fontSize: 48,
    lineHeight: 1.5,
    fontWeight: 'bold'
  },
  h2: {
    fontSize: 32,
    lineHeight: 1.5,
    fontWeight: 600
  },
  h3: {
    fontSize: 24,
    lineHeight: 1.5,
    fontWeight: 600
  },
  h4: {
    fontSize: 24,
    lineHeight: 1.5
  },
  h5: {
    fontSize: 16,
    lineHeight: 1.5,
    fontWeight: 600
  },
  h6: {
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 1.5
  },
  h7: {
    fontSize: 12,
    lineHeight: 1.5,
    fontWeight: 600
  },
  body1: {
    fontSize: 16,
    lineHeight: 1.5
  },
  body2: {
    fontSize: 14,
    lineHeight: 1.5
  },
  body3: {
    fontSize: 12,
    lineHeight: 1.5
  },
  body4: {
    fontSize: 10,
    lineHeight: 1.5,
    fontWeight: 600
  },
  colorTextPrimary: {
    color: '#212121'
  },
  colorTextSecondary: {
    color: '#616161'
  },
  colorDisabled: {
    color: '#9e9e9e'
  },
  colorPrimary: {
    color: theme.palette.primary.main
  },
  colorError: {
    color: theme.palette.error.main
  }
})

/**
 * This wraps the standard material ui Typography component and intercepts
 * a couple of props to allow for custom definitions of colors and variants.
 */
export class Typography extends React.PureComponent {
  static propTypes = {
    /**
     * This string will be used to get the color class.
     * @default 'textPrimary'
     * @type {string}
     */
    color: PropTypes.oneOf(Object.keys(colorSelectors).concat('default')),

    /**
     * The name of the custom signal font variant to use.
     * variant is fully intercepted and never passed to muiTypography. If you want
     * to use material ui's base variants, then use the prop muiVariant.
     * This allows us to define a custom set of font types.
     * @default 'body2'
     * @type {string}
     */
    variant: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.oneOf([
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'subtitle1',
        'subtitle2',
        'body1',
        'body2',
        'body3',
        'body4',
        'caption'
      ])
    ]),

    /**
     * This prop will be passed to the wrapped MuiTypography component so that
     * its variants can be used, if necessary. It's probably uncommon, if ever,
     * that this will be used.
     * @type {string}
     */
    muiVariant: PropTypes.oneOf([
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'subtitle1',
      'body1',
      'body2',
      'caption',
      'button'
    ]),

    /**
     * We are empirically mapping the variant property to a range of different
     * DOM element types. For instance, h1 to <h1>. If you wish to change
     * that mapping, you can provide your own. Alternatively, you can use the
     * component property. The default mapping is the following:
     * @default {
     *   h1: 'h1',
     *   h2: 'h2',
     *   h3: 'h3',
     *   h4: 'h4',
     *   h5: 'h5',
     *   h6: 'h6',
     *   subtitle1: 'h6',
     *   subtitle2: 'p',
     *   body1: 'p',
     *   body2: 'p',
     *   body3: 'p',
     *   body4: 'p',
     *   caption: 'p',
     * }
     * @type {Object}
     */
    headlineMapping: PropTypes.object
  }

  static defaultProps = {
    color: 'textPrimary',
    variant: 'body2',
    headlineMapping: {
      h1: 'h1',
      h2: 'h2',
      h3: 'h3',
      h4: 'h4',
      h5: 'h5',
      h6: 'h6',
      subtitle1: 'h6',
      subtitle2: 'p',
      body1: 'p',
      body2: 'p',
      body3: 'p',
      body4: 'p',
      caption: 'p'
    }
  }

  render() {
    const {
      classes,
      className: classNameProp,
      variant,
      color,
      muiVariant,
      muiColor,
      muiClasses,
      component: componentProp,
      headlineMapping,
      ...rest
    } = this.props
    console.log(this.props)
    const className = classnames(
      classes[variant],
      {
        [classes[getColorKey(color)]]: color !== 'default'
      },
      classNameProp
    )
    const component = componentProp || headlineMapping[variant]
    console.log(className)
    return (
      <TypographyBase
        component={component}
        className={className}
        variant={muiVariant}
        color={muiColor}
        classes={muiClasses}
        {...rest}
      />
    )
  }
}

export default withStyles(styles)(Typography)
