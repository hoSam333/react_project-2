import React from 'react'
import "./Api.css"
import img from "../../assets/images/download.jpeg"
import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function Fakeapi({fakeApi , addToCart }) {
  return (
    <div className='api container my-5'>

        <h2 className='component_title text-center'>Fake Products</h2>
        <p className='w-75 text-center my-4 m-auto opacity-75 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed sint dicta provident corporis hic esse porro accusantium ullam. Consectetur id mollitia ipsa tenetur sequi exercitationem facere rem itaque error! Velit!</p>
        <div className="row g-3">
                {fakeApi.map((val , index)=>{
                    return(
                        <div className="col-lg-3" key={index}>
                            <div className='one border shadow border-dark rounded-3'>
                                <Link to={`products/${ val.id }`} className='card_img'>
                                    <img src={val.image} alt="" />
                                </Link>
                                <b>{val.title.slice(0,10)}</b>
                                <div className='proccess d-flex flex-row'>
                                    <div className='icon'>
                                        <FaHeart />
                                    </div>
                                    <div className='icon' onClick={ ()=>{ addToCart( val ) } } >
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

export default Fakeapi
