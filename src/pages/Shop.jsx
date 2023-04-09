import React, { useEffect } from 'react'

const Shop = () => {
  useEffect(()=>{
    window.scrollTo({top: 0,  behavior: 'smooth'});
  },[])

  return (
    <div className='min-h-[100vh]'>Shop</div>
  )
}

export default Shop