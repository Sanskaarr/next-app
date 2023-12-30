import React from 'react'
import { AiOutlineShoppingCart, AiFillCloseCircle,  AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai';
import {BsBagCheck} from 'react-icons/bs';
import Head from 'next/head';
import Script from 'next/script';

import Link from 'next/link';

const Checkout = ({cart,addToCart,removeFromCart,subTotal}) => {
   
    return (
        <div className='container m-auto'>
            <h1 className='font-bold text-3xl my-8 text-center'>Checkout</h1>
            <h2 className='font-semibold text-xl'>1. Delivery Details</h2>
            <div className="mx-auto flex my-2">
                <div className="px-2 w-1/2">
                    <div className="mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                        <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                </div>
                <div className="px-2 w-1/2">
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                </div>
            </div>
                <div className="px-2 w-full">
                    <div className="relative mb-2">
                        <label htmlFor="address" className="leading-7 text-sm text-gray-600">Address</label>
                        <textarea id="address" name="adress" rows="4" cols={20} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></textarea>
                    </div>
                </div>
                <div className="mx-auto flex my-2">
                <div className="px-2 w-1/2">
                    <div className="mb-4">
                        <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone</label>
                        <input type="phone" id="phone" name="phone" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                </div>
                <div className="px-2 w-1/2">
                    <div className="relative mb-4">
                        <label htmlFor="city" className="leading-7 text-sm text-gray-600">City</label>
                        <input type="text" id="city" name="city" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                </div>
            </div>
            <div className="mx-auto flex my-2">
                <div className="px-2 w-1/2">
                    <div className="mb-4">
                        <label htmlFor="state" className="leading-7 text-sm text-gray-600">State</label>
                        <input type="text" id="state" name="state" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                </div>
                <div className="px-2 w-1/2">
                    <div className="relative mb-4">
                        <label htmlFor="pincode" className="leading-7 text-sm text-gray-600">Pincode</label>
                        <input type="text" id="pincode" name="pincode" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                </div>
            </div>

            <h2 className='font-semibold text-xl'>2. Review Cart Items</h2>
            <div className="sideCart bg-pink-100 p-6 m-2">
          <ol className='list-decimal font-semibold'>
            {cart.map((item))}
            {Object.keys(cart).length ==0 && <div className='my-4 font-normal'>Your Cart is Empty !!</div>}
           {Object.keys(cart).map((k)=>{ return <li key={k}>
              <div className="item flex my-5">
                <div className='font-semibold'>{cart[k].itemname}</div>
                <div className='flex items-center justify-center w-1/3 font-semibold text-l'><AiOutlineMinus onClick={()=>{removeFromCart(k,1,cart[k].price,cart[k].itemname,cart[k].size)}} className='cursor-pointer'/><span className='mx-2'>{cart[k].qty}</span><AiOutlinePlus onClick={()=>{addToCart(k,1,cart[k].price,cart[k].itemname,cart[k].size)}} className='cursor-pointer'/></div>
              </div>
            </li>})}

          </ol>
             <span className="total">Sub Total: {subTotal}</span>
         </div>
         <div className="mx-4">
         <Link href={`/checkout`}><button className="flex mr-2 text-white bg-indigo-500 border-0 py-2 px-2 focus:outline-none hover:bg-indigo-600 rounded text-sm"><BsBagCheck className='m-1'/> Pay ₹ {subTotal}</button></Link>
         </div>

        </div>
    )
}

export default Checkout