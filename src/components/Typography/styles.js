import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'

export const TypographyBase = styled(Typography)`
  > a {
    color: blue;
    &:active,
    &:hover,
    &:focus {
      color: blue;
      text-decoration: underline;
    }
  }
`
