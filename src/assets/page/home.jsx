import React from 'react'
import { Link } from 'react-router-dom'
import { mockData } from './data'


const Home = () => {
    return (
        <div className='grid grid-cols-5 gap-2'>
            {mockData.map((i) => (
                <div key={i.id} className='border p-3 rounded-md'>
                   <img className='w-[300px] h-[200px] object-cover' src={i.img} alt={i.name} />
                    <Link to={`/products/${i.id}`} className='block text-blue-500 underline'>
                        {i.name}
                    </Link>
                    <p>{i.desc}</p>
                    <p>40$</p>
                </div>
            ))}
        </div>
    )
}

export default Home