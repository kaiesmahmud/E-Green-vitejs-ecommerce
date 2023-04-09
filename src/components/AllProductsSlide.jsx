import React from 'react'
import { Link } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
//utils
import { allProductsData } from '../utils/data';


const AllServicesSlides = () => {
    
  return (
    <section className='capitalize'>
        <div className='p-5 hidden lg:block'>
          <Swiper
            slidesPerView={5}
            centeredSlides={false}
            spaceBetween={20}
            loop={true}
            grabCursor={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="w-[80%]"
          >
            {
              allProductsData.map(i=>(
                <SwiperSlide key={i.category} className='p-5 bg-black bg-opacity-10 rounded hover:bg-opacity-5 transition-all ease-in duration-150 '>
                  <Link to={`shop/${i.category}`} >
                    <div>
                      <p> {i.category}</p>
                      <p className='text-xs font-semibold py-3'>Available products : {i.products?.length}</p>
                    </div>
                    </Link>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
        {/* ================= M e d i u m ===================== */}
        <div className='p-5 hidden md:block lg:hidden'>
          <Swiper
            slidesPerView={3}
            centeredSlides={false}
            spaceBetween={20}
            grabCursor={true}
            loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
            className="mySwiper"
          >
            {
              allProductsData.map(i=>(
                <SwiperSlide key={i.category} className='p-2 bg-black bg-opacity-10 rounded hover:bg-opacity-5 transition-all ease-in duration-150 '>
                  <Link to={`shop/${i.category}`} >
                    <div>
                      <p> {i.category}</p>
                      <p className='text-xs font-light py-3'>Available products : {i.products?.length}</p>
                    </div>
                    </Link>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
        {/* ================= S m a l l ===================== */}
        <div className='p-3 md:hidden'>
          <Swiper
            slidesPerView={2}
            centeredSlides={false}
            spaceBetween={10}
            grabCursor={true}
            loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
          >
            {
              allProductsData.map(i=>(
                <SwiperSlide key={i.category} className='p-2 bg-black bg-opacity-10 rounded hover:bg-opacity-5 transition-all ease-in duration-150 '>
                  <Link to={`shop/${i.category}`} >
                    <div>
                      <p className='text-xs'> {i.category}</p>
                      <p className='text-xs font-light  py-1'>Available products : {i.products?.length}</p>
                    </div>
                    </Link>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
    </section>
  )
}

export default AllServicesSlides