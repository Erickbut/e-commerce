import React from 'react'
import '../home/styles/filterPrice.css'

const FilterPrice = ({setFilterByPrice}) => {

  const handleSubmit = e => {
    e.preventDefault()
    const from = +e.target.from.value
    const to = +e.target.to.value
    const obj = {
      from: from,
      to: to !== 0 ? to : Infinity
    }
    setFilterByPrice(obj)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3 className='filterPrice_title'>Price</h3>
      <div className='from-div'>
        <label htmlFor="from">From: </label>
        <input type="number" id='from'/>
      </div>
      <div className='to-div'>
        <label htmlFor="to">To: </label>
        <input className='input-to' type="number" id='to'/>
      </div>
      <button className='filter-price-btn'>Filter</button>
    </form>
  )
}

export default FilterPrice