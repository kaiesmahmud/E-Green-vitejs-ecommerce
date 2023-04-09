import React, { useEffect } from 'react'

const Contact = () => {
  useEffect(()=>{
    window.scrollTo({top: 0,  behavior: 'smooth'});
  },[])
  
  return (
    <div className='min-h-[100vh]'>Contact</div>
  )
}

export default Contact