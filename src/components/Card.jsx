import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({linkUrl,product,category}) => {
    
  return (
    <Link  to={linkUrl}  className='w-[48%] md:w-[30%] lg:w-[20%] '>
              <div className=' rounded-lg  bg-black/10 overflow-hidden '>
                <div className=' overflow-hidden'>
                  <img 
                    src={ product.imgURL || "https://media.istockphoto.com/id/502377899/photo/landscaping-tools-with-room-for-copy.jpg?b=1&s=170667a&w=0&k=20&c=BiHPpQruhwgpjhjdWVRvWJfVgvmu92ZWNmi7bZZQWSo="}
                    alt={product.name}
                    className='w-full hover:scale-110 transition-all ease-in'
                    />
                </div>
                <div className='p-2 md:p-4 lg:p-6'>
                  <p className='text-xs md:text-sm'>{category}</p>
                  <p className='lg:text-xl py-2'>{product.name}</p>
                  <p className='text-xs md:text-sm py-2'>{product.usage}</p>
                  <hr className='border-black/50 ' />
                  <p className='text-xs md:text-sm font-light py-2'>{product.details}</p>
                  <hr className='border-black/50' />
                  <p className='py-2 font-bold text-lg'>$ {product.price}</p>
                  <p className='text-center bg-black/30 hover:bg-black/70 hover:text-white/90 py-2 rounded transition-all ease-in'>View Details</p>
                </div>
              </div>
            </Link>
  )
}

export default Card