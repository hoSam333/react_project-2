import React from 'react'
import "./Products.css"
import { FaStar } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import product_API from './product';

function Products({addToCart}) {


  return (
    <div className='Products container my-5'>
      <p className='h1 text-center'>PRODUCTS</p>
      <div className="row g-2">
    {product_API.map(( val , key )=>{
      return(

        <div className="col-lg-3 col-md-6 col-sm-12" key={key}>
            <div className='pro_card'>
              <div className='card_img'>
                  <img src={val.img} alt="" />
              </div>
              <div className='card_body'>
                <b className='fs-5'> {val.title}</b>
                <p> ${val.price} <del> ${val.sale} </del> </p>
                <div className='icones'>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div className='proccess'>
                  <div className='icon'>
                    <FaHeart />
                  </div>
                  <div className='icon' onClick={ ()=>{ addToCart( val ) } }>
                      <FaCartShopping/>
                  </div>
                </div>
              </div>
            </div>
        </div>
      )
    })}

      </div>
    </div>
  )
}

export default Products
