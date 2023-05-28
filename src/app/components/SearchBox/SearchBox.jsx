import React from 'react'
import './SearchBox.sass'

const SearchBox = ({ onChange }) => {
  const handleChange = (event) => {
    const value = event.target.value
    onChange && onChange(value)
  }

  return (
    <div className={'searchBox'}>
      <input
        type='text'
        onChange={handleChange}
        className={'input'}
        placeholder='Search place'
      />
    </div>
  )
}

export default SearchBox
