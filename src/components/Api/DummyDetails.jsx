import React, { useEffect, useState } from 'react'
import "./Api.css"
import { useParams } from 'react-router-dom'
import { FaCartPlus } from "react-icons/fa6";
import axios  from 'axios'

function DummyDetails() {

    let {id} = useParams()
    let [DummyApi , setDummyApi] = useState({})

    let details_url = `https://dummyjson.com/products/${id}`

    async  function getDetailsApi(){
        let {data} = await axios.get( details_url )
        setDummyApi(data)
        console.log( data );
    }

    useEffect(()=>{
        getDetailsApi()
    } , [])
    
  return (
    <div className='details container my-5'>
      <div className="row">
        <div className="col-lg-5">
            <div className='details_img'>
                <img src={DummyApi.thumbnail} alt=""  />
            </div>
        </div>
        <div className="col-lg-7">
            <div className='description'>
                <b className='text-center fs-4'> ({DummyApi.category}) </b>
                <strong> product Name :  <span> {DummyApi.title}</span>  </strong>
                <p> {DummyApi.description} </p>
                <b> Price : ${DummyApi.price}.00 </b>
                <button className='btn btn-primary'> <FaCartPlus/> Add To Cart </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default DummyDetails
