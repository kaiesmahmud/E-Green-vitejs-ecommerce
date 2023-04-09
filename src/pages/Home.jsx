import React from 'react'

const Home = () => {
  return (
    <main>
      <section className='w-full relative h-[200px] md:h-[300px] overflow-hidden flex justify-center items-center bg-black/50' 
      // style={{background: url('https://images.unsplash.com/photo-1552761831-7ef8ec07adbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1002&q=80')}}
      >
      <p className='text-white text-2xl md:text-4xl lg:text-6xl'>Home</p>
      <img 
      src='https://images.unsplash.com/photo-1552761831-7ef8ec07adbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1002&q=80'
      alt="grass"
      className='w-full  absolute top-0 z-[-1]'
       />
      </section>
    </main>
  )
}

export default Home