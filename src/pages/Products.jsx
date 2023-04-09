import React, { useEffect } from 'react'
import { HeaderSection } from '../components';

const Products = () => {
  useEffect(()=>{
    window.scrollTo({top: 0,  behavior: 'smooth'});
  },[])


  return (
    <div className=' min-h-screen'>
            <HeaderSection title={"Similar Products"}/>

    </div>
  )
}

export default Products