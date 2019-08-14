import React from 'react'
import Typography from '@material-ui/core/Typography'
import styled from '@emotion/styled/macro'

export const ListToolbar = (
  {
    resultCount,
    chips,
    onResetFilters,
    onChangeSort
  }) => {
  
    let sortOrder = this.state.sortOrder;

    return (
      <div>
        <Typography variant="h6">{resultCount} results</Typography>
        <div>
          {chips.map(Chip => Chip)}
        </div>
        <Typography variant="h6" onClick={onResetFilters}>Reset filters</Typography>
        <div onClick={onChangeSort}>
          <Typography variant="h6">Sort by: {sortOrder}</Typography>
          <img src=""/>
        </div>
      </div>
    )
}
