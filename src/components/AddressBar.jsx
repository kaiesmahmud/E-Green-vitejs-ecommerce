import React from 'react'
import {BiPhoneCall} from 'react-icons/bi';
import {BsFacebook, BsInstagram, BsTwitter, BsPinterest, BsReddit} from 'react-icons/bs';

const AddressBar = () => {
  return (
    <div className='md:py-2 p-1'>
         <div className='header text-xs md:text-sm  font-light flex justify-between'>
              <div className='flex flex-wrap justify-start md:justify-center items-center gap-3'>
                <address>RoseLands, Sydney, Australia</address>
                <div className='flex justify-center items-center gap-2'>
                  <BiPhoneCall className='text-base'/>
                  <p>0402342345</p>
                </div>
              </div>
              <div className='flex justify-center items-center gap-2 lg:gap-5 text-lg px-2 cursor-pointer'>
                <BsFacebook className='hover:text-blue-500'/>
                <BsInstagram className='hover:text-pink-500'/>
                <BsTwitter className='hover:text-blue-400'/>
                <BsPinterest className='hover:text-red-500'/>
                <BsReddit className='hover:text-orange-500'/>

              </div>
            </div>
            <hr />
    </div>
  )
}

export default AddressBar