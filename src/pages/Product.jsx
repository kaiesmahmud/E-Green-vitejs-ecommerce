import React, { useEffect } from 'react'

const Product = () => {
  useEffect(()=>{
    window.scrollTo({top: 0,  behavior: 'smooth'});
  },[])
  
  return (
    <div className='min-h-[100vh]'>Product</div>
  )
}

export default Product