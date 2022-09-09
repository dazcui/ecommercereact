import React from 'react'

const ImputSearch = ({ setInputSearch }) => {

  const handleChange = e => {
    setInputSearch(e.target.value);
  }

  return (
    <div className='search__name'>
      <label ><i className="fa-solid fa-magnifying-glass"></i></label>
      <input onChange={handleChange} type="text" />
    </div>
  )
}

export default ImputSearch