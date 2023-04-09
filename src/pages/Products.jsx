import React, { useEffect } from 'react'

const Products = () => {
  useEffect(()=>{
    window.scrollTo({top: 0,  behavior: 'smooth'});
  },[])

  
  return (
    <div className=' min-h-screen'>Products</div>
  )
}

export default Products