import React from 'react'
import './home.css'
const FormFiltro = () => {
    return (
        <div className='formfiltro'>
            <div className='formfiltro__price' >
                <div>
                    <h3>Price</h3>
                </div>
                <div className='formfiltro__input-form'>
                    <h4>Form</h4><input type="text" />
                </div>
                <div className='formfiltro__input-to'>
                    <h4>To</h4><input type="text" />
                </div>
                <div className='formfiltro__button-price'>
                    <button>Filter price</button>
                </div>
            </div>
            <div className='formfiltro__category'>
                <div>
                    <h3>Category</h3>
                </div>
                <div className='formfiltro__category-select'>
                    <div><h4>Smart tv</h4></div>
                    <div><h4>Computers</h4></div>
                    <div><h4>Smartphone</h4></div>
                </div>

            </div>
        </div>
    )
}
export default FormFiltro