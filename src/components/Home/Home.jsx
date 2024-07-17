import React from 'react'
import "./Home.css"
import Header from "../Header/Header"
import Services from "../Services/Services"
import Category from '../Category/Category'
import Products from "../Products/Products"
import Slider2 from "../Slider2/Slider2"
import Contact from "../Contact/Contact"

function Home({addToCart}) {
  return (
    <div className='Home'>
      <Header/>
      <Services/>
      <Category/>
      <Products addToCart={addToCart} />
      <Slider2/>
      <Contact/>
    </div>
  )
}

export default Home
