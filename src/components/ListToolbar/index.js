import React from 'react'
import { Typography, MenuItem, IconButton, Menu } from '@material-ui/core'
import {
  Wrapper,
  Chips,
  FilterInfo,
  SortSelect,
  LinkTypography,
  StyledChip
} from './styles'
import Tune from '@material-ui/icons/Tune'

const sortOptions = ['most recent to least', 'least recent to most']

export const ListToolbar = ({
  itemCount,
  chips,
  onResetFilters,
  onDeleteChip,
  onChangeSort
}) => {
  const [sortOrder, setSortOrder] = React.useState('most recent to least')

  const [anchorEl, setAnchorEl] = React.useState(null)
  const sortMenuOpen = Boolean(anchorEl)

  function handleSortMenuClick(event) {
    setAnchorEl(event.currentTarget)
  }

  function createHandleOnMenuItemClick(option) {
    return function handleOnMenuItemClick() {
      setAnchorEl(null)
      setSortOrder(option)
      onChangeSort(option)
    }
  }

  function createHandleChipDelete(chipName) {
    return function handleChipDelete() {
      onDeleteChip(chipName)
    }
  }

  return (
    <Wrapper>
      <FilterInfo>
        <Typography variant="h6">{itemCount} results</Typography>
        <Chips>
          {chips.map(chip => (
            <StyledChip
              key={chip.key}
              label={chip.value}
              onDelete={createHandleChipDelete(chip.key)}
            />
          ))}
        </Chips>
        {chips.length > 0 && (
          <LinkTypography variant="body2" onClick={onResetFilters}>
            Reset filters
          </LinkTypography>
        )}
      </FilterInfo>
      <SortSelect>
        <Typography variant="body1">Sort by: {sortOrder}</Typography>
        <div>
          <IconButton
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
            onClick={handleSortMenuClick}
          >
            <Tune />
          </IconButton>
          <Menu
            id="sort-menu"
            keepMounted
            open={sortMenuOpen}
            anchorEl={anchorEl}
          >
            {sortOptions.map(option => (
              <MenuItem
                key={option}
                selected={option === { sortOrder }}
                onClick={createHandleOnMenuItemClick(option)}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
        </div>
      </SortSelect>
    </Wrapper>
  )
}
