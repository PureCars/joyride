import React from 'react'
import styled from '@emotion/styled/macro'

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-context: space-between;
  margin: 10px;
`

const Icon = styled.img`
  width: 100px;
  height: 100px;
`

export const IconGrid = ({ icons }) => {
  return (
    <Grid>
      {icons.map(icon => <Icon src={icon.imageUrl}/>)}
    </Grid>
  )
}