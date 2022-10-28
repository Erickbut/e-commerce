import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardProduct from '../components/home/CardProduct'
import FilterCategory from '../components/home/FilterCategory'
import FilterPrice from '../components/home/FilterPrice'
import InputSearch from '../components/home/InputSearch'
import OrderByPrice from '../components/home/OrderByPrice'
import { getAllProducts } from '../store/slices/products.slice'
import './styles/home.css'

const Home = () => {

  const [inputText, setInputText] = useState('')
  const [filterByText, setFilterByText] = useState()
  const [filterByPrice, setFilterByPrice] = useState({
    from: 0,
    to: Infinity
  })
  const products = useSelector(state => state.products)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])

  useEffect(() => {
    if (inputText !== '' && products) {
      const cb = product => product.title.toLowerCase().includes(inputText.toLocaleLowerCase().trim())
      setFilterByText(products.filter(cb))
    } else {
      setFilterByText(products)
    }
  }, [inputText, products])

  const CallBackFilterPrice = product => {
    return +product.price >= filterByPrice.from && +product.price <= filterByPrice.to
  }

  return (
    <main className='home'>
      <div className='input_home'>
        <p className='letter-home'>Find your Product:</p> 
      <InputSearch  inputText={inputText} setInputText={setInputText} />
      <i className="input_icon fa-solid fa-magnifying-glass"></i>
      </div>

      <FilterPrice setFilterByPrice={setFilterByPrice} />
      <FilterCategory />
      <OrderByPrice />

      <div className='home__container'>
        {
          filterByText?.filter(CallBackFilterPrice).map(product => (
            <CardProduct
              key={product.id}
              product={product}
            />
          ))
        }
      </div>
    </main>
  )
}

export default Home