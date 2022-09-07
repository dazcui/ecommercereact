import React from 'react'

const FilterProduct = ({prod, productInfo}) => {
console.log(prod, productInfo);

  return (
    <div>
        
        <article  className='filter-home'>
            <header className='filter-home__header'>
                <img className='filter-home__img' src={prod.productImgs[0]} alt="" />
            </header>
            <div className='filter-home__body'>
                <h3 className='filter-home__name'>{prod.title}</h3>
                <div className='filter-home__priceButton'>
                    <section className='filter-home__price'>
                        <h4 className='filter-home__price-label'>Price</h4>
                        <span className='filter-home__price-value'>{prod.price}</span>
                    </section>
                    <button className='filter-home__button'>
                        <i className="fa-solid fa-cart-shopping"></i>
                    </button>
                </div>

            </div>
        </article>
    </div>
  )

}

export default FilterProduct