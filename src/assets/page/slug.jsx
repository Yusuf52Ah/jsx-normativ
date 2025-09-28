import React from 'react'
import { mockData } from './data'
import { useParams, Link } from 'react-router-dom'

const Slug = () => {
  const { id } = useParams()
  const product = mockData.find(i => i.id === +id)

  if (!product) {
    return <h2 className='text-red-500 text-2xl'>404 Not Found</h2>
  }

  return (
    <div className='p-5'>
      <img src={product.img} alt={product.name} className='w-[300px] h-[300px]' />
      <h2 className='text-xl font-bold'>{product.name}</h2>
      <p>{product.desc}</p>
      <p className='font-semibold text-green-600'>40$</p>

      <Link
        to="/"
        className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
      >
         Orqaga
      </Link>
    </div>
  )
}

export default Slug
