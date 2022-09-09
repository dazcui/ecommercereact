import React from 'react'

const PriceFilter = ({setfobjFilterPrice}) => {

const submit = e =>{
  e.preventDefault()
  const obj ={
    from: +e.target.fromPrice.value,
    to: +e.target.toPrice.value
  }
  setfobjFilterPrice(obj)
}



  return (
    <form className='price__form' onSubmit={submit}>
        <h3>Price</h3>
        <ul>
            <li>
                <label htmlFor="">From</label>
                <input type="number" id='fromPrice'/>
            </li>
            <li>
                <label htmlFor="">To</label>
                <input type="number" id='toPrice'/>
            </li>
        </ul>
        <div className='price__form-button'>
          <button>Filter Price</button>
        </div>
      
    </form>

  )
}

export default PriceFilter