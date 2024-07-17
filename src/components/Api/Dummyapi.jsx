import React from 'react'
import "./Api.css"
import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function Dummyapi({dummyApi , addToCart }) {
    console.log( dummyApi );
  return (
    <div className='api container my-5'>

        <h2 className='component_title text-center'>Dummy Json Products</h2>
        <p className='w-75 text-center my-4 m-auto opacity-75 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed sint dicta provident corporis hic esse porro accusantium ullam. Consectetur id mollitia ipsa tenetur sequi exercitationem facere rem itaque error! Velit!</p>
        <div className="row g-3">
                {dummyApi.map((val , index)=>{
                    return(
                        <div className="col-lg-3 col-md-6 col-sm-12" key={index}>
                            <div className='one border shadow border-dark rounded-3'>
                                <Link to={`products/${val.id}`} className='card_img'>
                                    <img src={val.thumbnail} alt="" />
                                </Link>
                                <b>{val.title.slice(0,10)}</b>
                                <div className='proccess flex-row   '>
                                    <div className='icon'>
                                        <FaHeart />
                                    </div>
                                    <div className='icon' onClick={ ()=>{ addToCart( val ) } }>
                                        <FaCartShopping/>
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

export default Dummyapi
