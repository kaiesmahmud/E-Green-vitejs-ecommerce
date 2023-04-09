import React, { useEffect } from 'react'
import { HeaderSection } from '../components';

const Shop = () => {
  useEffect(()=>{
    window.scrollTo({top: 0,  behavior: 'smooth'});
  },[])

  return (
    <div className='min-h-[100vh]'>
      <HeaderSection title={"Search This Shop"}/>
    </div>
  )
}

export default Shop