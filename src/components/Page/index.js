import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const PageRoot = styled.div`
  min-height: 100vh;
`

const PageContent = styled.div`
  margin: 0 auto;
  ${props => console.log(props)}
  max-width: ${props => (props.size === 'full' ? '100%' : '1280px')};
  padding: ${props => props.theme.mui.spacing(4)}px;
`

export const Page = React.forwardRef(function Page(props, ref) {
  const { size = 'default', ...other } = props
  return (
    <PageRoot>
      <PageContent size={size} ref={ref} {...other} />
    </PageRoot>
  )
})

Page.propTypes = {
  size: PropTypes.oneOf(['default', 'full'])
}

export default Page
