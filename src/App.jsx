import React, { useEffect, useState } from 'react'
import "./App.css"
import Home from "./components/Home/Home"
import Navbar from './components/Navbar/Navbar'
import Footer from "./components/Footer/Footer"
import About from './components/About/About'
import Shop from "./components/Shop/Shop"
import Fakeapi from './components/Api/Fakeapi'
import axios from "axios"
import Dummyapi from "./components/Api/Dummyapi"
import FakeDetails from './components/Api/FakeDetails'
import DummyDetails from './components/Api/DummyDetails'
import Contact from "./components/Contact/Contact"
import Cart from './components/Cart/Cart'
import Swal from 'sweetalert2'
import { BrowserRouter , Routes , Route , Outlet } from "react-router-dom"

function App() {


  // -----START API------------------------------
  let fakeurl = "https://fakestoreapi.com/products"
  let dummyurl = "https://dummyjson.com/products"

  const [ fakeApi , setFakeApi  ]  = useState([])
  const [ dummyApi , setDummyApi  ]  = useState([])

   async function getFakeProducts(){
      let {data} = await axios.get(fakeurl)
      setFakeApi( data )
  } 
   async function getDummyProducts(){
      let {data} = await axios.get(dummyurl)
      setDummyApi( data.products )
  } 

  useEffect(()=>{
    getDummyProducts()
    getFakeProducts()
  } , [] )












// ------START CART-------------------------------
let [ cart , setCart ] = useState([])


useEffect(()=>{
let checkedCart = localStorage.getItem("cart")

if( checkedCart ){
  setCart( JSON.parse( localStorage.getItem("cart") ) )
}else{
  setCart([])
}
} , [])



function addToCart(pro){
  let productSelect = cart.find((product)=> product.title == pro.title )
  if( productSelect ){

    Swal.fire({
      title: "this product is already added",
      text: "You clicked the button!",
      icon: "info"
    });

  }else{

  Swal.fire({
    title: `Your Product (<span class='text-primary' > ${ pro.title.slice(0 , 10) } </span>) added Successfully!`,
    text: "You clicked the button!",  
    icon: "success" ,
    showConfirmButton : false ,
    timer:1000
  });
    setCart([...cart , {...pro , amount: 1}])
  } 

}

function deleteProductFromCart( index ){
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success" ,
        showConfirmButton:false , 
        timer :1000
      });
      cart.splice( index , 1 )
      setCart([...cart])
    }
  });

}

function increaseAmount(pro){
  ++pro.amount
  setCart([...cart])
}

function decreaseAmout(pro){
  if( pro.amount > 1 ){
    --pro.amount
  }else{
    deleteProductFromCart()
  }
  setCart([...cart])
 
}


useEffect(()=>{
  localStorage.setItem( "cart" , JSON.stringify(  cart ) )
} , [ cart ])





// ------- start DARKMOOD-------------------------------
let [dark , setDark ] = useState(false)

useEffect(()=>{
  let checkedColor = localStorage.getItem("color")
  if( checkedColor ){
    setDark( localStorage.getItem("color") )
    console.log( dark );
  }
} , [])

function DarkMood(){
  setDark(!dark)
  console.log( "hello" );
}


useEffect(()=>{
  localStorage.setItem("color" , dark)
} , [ dark ])




  return (
    <div className={ dark ? "dark BODY" : "BODY" } >


      <BrowserRouter>
      <Navbar  cart={cart} DarkMood={DarkMood} />
      
      <Routes>
        <Route path='' element={<Home addToCart={addToCart} />} /> 
        <Route path='about' element={ <About/> } />
        <Route path='shop' element={ <Shop/> } />
        <Route path='fakeapi' element={ <Outlet/> } >
          <Route path='' element={ <Fakeapi fakeApi={fakeApi}  addToCart={addToCart}  />  } />
          <Route path='products/:id' element={ <FakeDetails/> } />
        </Route>

        <Route path='dummyapi' element={ <Outlet/> } >
            <Route path='' element={ <Dummyapi dummyApi={dummyApi} addToCart={addToCart} /> } /> 
            <Route path='products/:id' element={ <DummyDetails/> } /> 
        </Route>
        <Route path='contact' element= { <Contact/> } />
        <Route path='cart' element={ <Cart  cart={cart} deleteProductFromCart={deleteProductFromCart}
        increaseAmount={increaseAmount} decreaseAmout={decreaseAmout} /> } />

      </Routes>
      <Footer/>
      </BrowserRouter>

      

     
    </div>
  )
}

export default App
