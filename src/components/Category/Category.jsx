import React from 'react'
import "./Category.css"
import img_1 from "../../assets/images/cat-1-Dff_xs0d (1).jpg"
import img_2 from "../../assets/images/cat-2-DuslB7R8.jpg"
import img_3 from "../../assets/images/cat-3-CeSXsjz-.jpg"
import img_4 from "../../assets/images/cat-4-Df4eiVwg (1).jpg"

function Category() {
  return (
    <div className='Category container my-5'>
      <div className="row g-2">
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className='cat_card p-3'>
            <img src={img_1} alt="" />
            <div className='text-center'>
              <b className='fs-6'>Category Name</b>
              <p>100 products</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className='cat_card p-3'>
            <img src={img_2} alt="" />
            <div className='text-center'>
              <b className='fs-6'>Category Name</b>
              <p>100 products</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className='cat_card p-3'>
            <img src={img_3} alt="" />
            <div className='text-center'>
              <b className='fs-6'>Category Name</b>
              <p>100 products</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className='cat_card p-3'>
            <img src={img_4} alt="" />
            <div className='text-center'>
              <b className='fs-6'>Category Name</b>
              <p>100 products</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className='cat_card p-3'>
            <img src={img_3} alt="" />
            <div className='text-center'>
              <b className='fs-6'>Category Name</b>
              <p>100 products</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className='cat_card p-3'>
            <img src={img_2} alt="" />
            <div className='text-center'>
              <b className='fs-6'>Category Name</b>
              <p>100 products</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className='cat_card p-3'>
            <img src={img_4} alt="" />
            <div className='text-center'>
              <b className='fs-6'>Category Name</b>
              <p>100 products</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className='cat_card p-3'>
            <img src={img_1} alt="" />
            <div className='text-center'>
              <b className='fs-6'>Category Name</b>
              <p>100 products</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className='cat_card p-3'>
            <img src={img_2} alt="" />
            <div className='text-center'>
              <b className='fs-6'>Category Name</b>
              <p>100 products</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className='cat_card p-3'>
            <img src={img_4} alt="" />
            <div className='text-center'>
              <b className='fs-6'>Category Name</b>
              <p>100 products</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className='cat_card p-3'>
            <img src={img_3} alt="" />
            <div className='text-center'>
              <b className='fs-6'>Category Name</b>
              <p>100 products</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className='cat_card p-3'>
            <img src={img_1} alt="" />
            <div className='text-center'>
              <b className='fs-6'>Category Name</b>
              <p>100 products</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Category
