import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlineShoppingCart, AiFillCloseCircle,  AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai';
import {BsBagCheck} from 'react-icons/bs';
import {MdAccountCircle} from 'react-icons/md';
import { useRef } from 'react';

function NavBar({cart, addToCart, removeFromCart, clearCart, subTotal}) {
  const toggleCart = ()=> {
      if (ref.current.classList.contains('translate-x-full')){
        ref.current.classList.remove('translate-x-full')
        ref.current.classList.add('translate-x-0')
      }
      else if (!ref.current.classList.contains('translate-x-full')){
        ref.current.classList.remove('translate-x-0')
        ref.current.classList.add('translate-x-full')
      }
      
  }
  const ref = useRef()
  return (
    <div>
      <div className="flex flex-col md:flex-row md:justify-start justify-center items-center py-2 shadow-md sticky top-0 bg-white z-10">
        <div className="logo mx-5">
          <Link legacyBehavior href="/"><Image src="/shop.png" width={40} height={40}></Image></Link>
        </div>
        <div className="nav">
          <ul className="flex items-center space-x-6 font-bold md:text-md">
            <Link href="/" legacyBehavior><a><li>Home</li></a></Link>
            <Link href="/about" legacyBehavior><a><li>About</li></a></Link>
            <Link href="/products" legacyBehavior><a><li>Products</li></a></Link>
            <Link href="/contact" legacyBehavior><a><li>Contact</li></a></Link>
          </ul>
        </div>

        <div  className="cursor-pointer cart absolute right-0 mx-5 top-4 flex">
        <Link href={`/login`}><MdAccountCircle className='text-xl md:text-2xl'/></Link>
          <AiOutlineShoppingCart onClick={toggleCart} className='text-xl md:text-2xl' />
        </div>

        <div ref={ref} className={`w-72 h-[100vh] sideCart absolute top-0 right-0 bg-pink-100 p-8 transition-transform ${Object.keys(cart).length !==0 ?'translate-x-0': 'translate-x-full'}`}>
          <h2 className='font-bold text-xl text-center'>Shopping Cart</h2>
          {/* <span onClick={toggleCart} className="absolute top-5 right-2 cursor-pointer text-xl text-black"><AiFillCloseCircle /></span>
          <ol className='list-decimal font-semibold'>
            {Object.keys(cart).length ==0 && <div className='my-4 font-normal'>Your Cart is Empty !!</div>}
           {Object.keys(cart).map((k)=>{ return <li key={k}>
              <div className="item flex my-5">
                <div className='w-2/3 font-semibold'>{cart[k].itemname}</div>
                <div className='flex items-center justify-center w-1/3 font-semibold text-l'><AiOutlineMinus onClick={()=>{removeFromCart(k,1,cart[k].price,cart[k].itemname,cart[k].size)}} className='cursor-pointer'/><span className='mx-2'>{cart[k].qty}</span><AiOutlinePlus onClick={()=>{addToCart(k,1,cart[k].price,cart[k].itemname,cart[k].size)}} className='cursor-pointer'/></div>
              </div>
            </li>})}

          </ol>
          <div className="total my-2">Sub Total: {subTotal}</div>
          <div className="flex">
          <Link href={`/checkout`}><button className="flex mr-2 text-white bg-indigo-500 border-0 py-2 px-2 focus:outline-none hover:bg-indigo-600 rounded text-sm"><BsBagCheck className='m-1'/> Checkout</button></Link>
          <button onClick={clearCart} className="flex mr-2 text-white bg-indigo-500 border-0 py-2 px-2 focus:outline-none hover:bg-indigo-600 rounded text-sm">Clear</button>
          </div>*/}
         </div> 
      </div>
    </div>

  )
}



export default NavBar