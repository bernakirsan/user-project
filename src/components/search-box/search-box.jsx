import "./search-box.css"

import React from 'react'

function SearchBox({className, placeholder, onChange}) {
  return (
    <input 
    type='search'
    placeholder={placeholder}
    className={`search-box ${className}`}
    onChange={onChange}
    />
  )
}

export default SearchBox