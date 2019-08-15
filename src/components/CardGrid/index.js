import React from 'react'
import styled from 'styled-components'

const CardGridRoot = styled.div`
  display: grid;
  grid-gap: ${props => props.theme.mui.spacing(props.gridGap)}px;
  grid-template-columns: repeat(
    auto-fill,
    minmax(${props => props.columnWidth}px, 1fr)
  );
`

export const CardGrid = React.forwardRef(function CardGrid(props, ref) {
  const { columnWidth = 200, gridGap = 2, ...other } = props
  return (
    <CardGridRoot
      columnWidth={columnWidth}
      gridGap={gridGap}
      ref={ref}
      {...other}
    />
  )
})

export default CardGrid
