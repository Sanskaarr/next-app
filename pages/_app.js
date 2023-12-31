import '@/styles/globals.css'
import { useEffect, useState } from 'react'
import NavBar from '/components/NavBar'
export default function App({ Component, pageProps }) {
  const [cart, setCart] = useState({})
  const [subTotal, setSubTotal] = useState(0)
  useEffect(() => {
    console.log("Hey I am using useEffect from app.js")
    try {
    if(localStorage.getItem("cart")){
      setCart(JSON.parse(localStorage.getItem("cart")))
      saveCart(JSON.parse(localStorage.getItem("cart")))
    } 
    } catch (error) {
      console.error(error)
      localStorage.clear()
    }
  }, [])
  

  const saveCart = (myCart)=>{
    localStorage.setItem('cart', JSON.stringify(myCart))
    let subt =0;
    let keys = Object.keys(myCart)
    for(let i=0; i<keys.length;i++){
      subt += myCart[keys[i]].price *  myCart[keys[i]].qty;
    }
    setSubTotal(subt)
    }



  const addToCart = (itemCode, qty, price, itemname, size)=>{
    let newCart = cart;
    if(itemCode in cart){
      newCart[itemCode].qty = cart[itemCode].qty + qty
    }
    else{
      newCart[itemCode] = {qty:1, price, itemname, size}
    }
    setCart(newCart)
    saveCart(newCart)
  }

  const clearCart = ()=>{
    setCart({})
    saveCart({})
  }

  const removeFromCart = (itemCode, qty, price, itemname, size)=>{
    let newCart = cart;
    if(itemCode in cart){
      newCart[itemCode].qty = cart[itemCode].qty - qty
    }
    if(newCart[itemCode]["qty"]<=0){
      delete newCart[itemCode]
    }
    setCart(newCart)
    saveCart(newCart)
  }

  return (
    <>
    <NavBar key={subTotal} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} />
    <Component cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} {...pageProps} />
    </>
  )
}
