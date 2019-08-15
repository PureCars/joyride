import React from 'react'
import styled from 'styled-components'
import ExpandMore from '@material-ui/icons/ExpandMore'
import Typography from '../../components/Typography'
import mockForm from './mockForm.json'

function Radio() {
  return <div>radio</div>
}

const ListWrapper = styled.div`
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e1e1e1;
`
const ListExpand = styled(ExpandMore)`
  color: #b4b4b4;
  font-size: 30px;
`
function List(props) {
  const title = props['display-title']
  return (
    <ListWrapper>
      <Typography variant="h6">{title}</Typography>
      <ListExpand />
    </ListWrapper>
  )
}
function Distance() {
  return <div>distance</div>
}
function ParentChild() {
  return <div>parent child</div>
}
function Range() {
  return <div>range</div>
}

const widgets = {
  radio: Radio,
  list: List,
  distance: Distance,
  'parent-child': ParentChild,
  range: Range
}

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
`

export default function FilterForm() {
  return (
    <Wrapper>
      {mockForm['criteria-gui'].map(widget => {
        const Widget = widgets[widget['widget-type']]
        return (
          <Widget
            key={widget['widget-data']['display-title']}
            {...widget['widget-data']}
          />
        )
      })}
    </Wrapper>
  )
}
