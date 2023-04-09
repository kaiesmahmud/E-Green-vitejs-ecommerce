import React, { useEffect } from 'react'
import { HeaderSection } from '../components';

const Product = () => {
  useEffect(()=>{
    window.scrollTo({top: 0,  behavior: 'smooth'});
  },[])
  
  return (
    <div className='min-h-[100vh]'>
      <HeaderSection title={"Buy Product Now"}/>

    </div>
  )
}

export default Product