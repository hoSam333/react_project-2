import React from 'react'
import "./Cart.css"

function Cart({ cart , deleteProductFromCart ,increaseAmount , decreaseAmout }) {
  let totall = 0
  return (
    <div className='Cart container my-5'>
      <div className="row g-3">

        { cart.length > 0 ?
        <>

        {cart.map( ( value , index )=>{
          return(
            <div className="col-lg-12" key={ index }>
                 <span style={{display:"none"}}> {totall += value.price * value.amount} </span> 
              <div className='one'>
                <b className='h5'>{ value.title.slice(0 , 15) }</b>
                <img src={ value.img || value.image || value.thumbnail  } alt="" />
                <div>
                  <p> ${value.price} </p>
                  <b> ${ (value.price * value.amount).toFixed(2) } </b>
                </div>
                <div>
                  <button onClick={ ()=>{ increaseAmount( value ) } } >+</button>
                  <span> { value.amount } </span>
                  <button onClick={ ()=>{ decreaseAmout( value ) } } >-</button>
                </div>
                <button onClick={ ()=>{ deleteProductFromCart( index ) } } className='btn btn-danger'>Remove From Cart </button>
              </div>

            </div>
          )
        } )}

        <div className="col-lg-8 mx-auto sticky-bottom">
          <div className='totall p-3 rounded-3 '>
            <b> Totall Price : </b>
            <b> ${Math.round( totall )} </b>
          </div>
        </div>
        </>
      :
      <div className='text-center text-danger h1 p-5 '> Threre Is No Product here  </div>
}

      </div>
    </div>
  )
}

export default Cart
