import React, { useEffect, useState } from 'react'
import "./Api.css"
import { useParams } from 'react-router-dom'
import { FaCartPlus } from "react-icons/fa6";
import axios  from 'axios'

function FakeDetails() {

    let {id} = useParams()
    let [fakeapi , setFakeApi] = useState({})

    let details_url = `https://fakestoreapi.com/products/${id}`

    async  function getDetailsApi(){
        let {data} = await axios.get( details_url )
        setFakeApi(data)
    }

    useEffect(()=>{
        getDetailsApi()
    } , [])
    
  return (
    <div className='details container my-5'>
      <div className="row">
        <div className="col-lg-5">
            <div className='details_img'>
                <img src={fakeapi.image} alt=""  />
            </div>
        </div>
        <div className="col-lg-7">
            <div className='description'>
                <b className='text-center fs-4'> ({fakeapi.category}) </b>
                <strong> product Name :  <span> {fakeapi.title}</span>  </strong>
                <p> {fakeapi.description} </p>
                <b> Price : ${fakeapi.price}.00 </b>
                <button className='btn btn-primary'> <FaCartPlus/> Add To Cart </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default FakeDetails
