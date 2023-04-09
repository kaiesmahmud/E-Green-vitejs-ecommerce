import React, { useEffect } from 'react'
import { AllServicesSlides, HeaderSection, RandomProducts } from '../components'
import { allProductsData } from '../utils/data'

const Home = () => {
  useEffect(()=>{
    window.scrollTo({top: 0,  behavior: 'smooth'});
  },[])
  return (
    <main className='min-h-[100vh]'>
      <HeaderSection title={'Buy Gardening Tools'} />
      <h2 className='p-2 md:p-5 md:text-xl lg:text-3xl'>See Products Category:</h2>
      <AllServicesSlides/>
      <h2 className='p-2 md:p-5 md:text-xl lg:text-3xl'>See Our Products:</h2>
      <RandomProducts allProductsData={allProductsData} />
    </main>
  )
}

export default Home