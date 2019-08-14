import React from 'react'
import Typography from '@material-ui/core/Typography'
import { Wrapper, Chips } from './styles';

export const ListToolbar = (
  {
    resultCount,
    chips,
    onResetFilters,
    onChangeSort
  }) => {
  
    //let sortOrder = this.state.sortOrder;
    let sortOrder = "most recent to least"

    return (
      <Wrapper>
        <Typography variant="h6">{resultCount} results</Typography>
        <Chips>
          {chips.map(Chip => Chip)}
        </Chips>
        <Typography variant="h6" onClick={onResetFilters}>Reset filters</Typography>
        <div onClick={onChangeSort}>
          <Typography variant="h6">Sort by: {sortOrder}</Typography>
          <img src=""/>
        </div>
      </Wrapper>
    )
}
