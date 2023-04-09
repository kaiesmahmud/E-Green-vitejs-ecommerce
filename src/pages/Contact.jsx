import React, { useEffect } from 'react'
import { HeaderSection } from '../components';

const Contact = () => {
  useEffect(()=>{
    window.scrollTo({top: 0,  behavior: 'smooth'});
  },[])

  return (
    <div className='min-h-[100vh]'>
      <HeaderSection title={"Contact Us"}/>

    </div>
  )
}

export default Contact