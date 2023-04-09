import React from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'

const RandomProducts = ({allProductsData}) => {
  return (
    <div className=' flex flex-wrap justify-center items-center gap-2 md:gap-5  p-2'>
        {
          allProductsData.map((cat,i)=> {
            const serial = Math.floor(Math.random()*(cat.products?.length || 5))
            return (
                <Card key={i} linkUrl={`/shop/${cat.categoryUrl}/${serial}`} product={cat.products[serial]} category={cat.category} />
            
          )}
          )
        }
        {
          allProductsData.map((cat,i)=> {
            const serial = Math.floor(Math.random()*(cat.products?.length || 5))
            return (
                <Card key={i} linkUrl={`/shop/${cat.categoryUrl}/${serial}`} product={cat.products[serial]} category={cat.category} />
          )}
          )
        }
      </div>
  )
}

export default RandomProducts