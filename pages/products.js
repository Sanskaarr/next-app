import React from 'react'
import Link from 'next/link'

const Products = (props) => {
  return (
    <div>
  <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap w-full mb-20">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Karwaan - Shop</h1>
          <div className="h-1 w-20 bg-indigo-500 rounded"></div>
        </div>  
      </div>
      <div className="flex flex-wrap -m-4">
        {props.products.data.map((item)=>{
            return(
        <div key={item.attributes.slug} className="xl:w-1/4 md:w-1/2 p-4">
          <div className="bg-gray-100 p-6 rounded-lg">
            <img className="h-40 rounded w-full object-cover object-center mb-6" src={`${process.env.STRAPI_URL}${item.attributes.image.data.attributes.formats.small.url}`}/>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{item.attributes.title}</h2>
          <Link href={`/products/${item.attributes.slug}`}><button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Buy Now</button></Link>
          </div>
        </div>
  )
})}
      </div>
    </div>
  </section>
  </div>
  )
}

export async function getServerSideProps(){
  let headers = {Authorization: "Bearer f046d22e699d2d771eb0bccd40b67d7760a229ceb7afdbf6144e6f898878229f50c8c84fb40be800a838b1c80cca2ee6cdf606934c67e57a77cd01940e941d23f2585f8f50036aa42a01374ba3e71d695d243f19662963d9279739c0ae12c4a893ac11db26c5db8e4ef9e5d578610360f8e118c5d83387903be938948ce263f4"}
  let a = await fetch("http://localhost:1337/api/products?populate[0]=image",{headers:headers})
  let products = await a.json()
  console.log(products)
  return {
    props: {products},
  }
}

export default Products