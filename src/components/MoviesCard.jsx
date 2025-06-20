import React from 'react'
import { API_IMAGE_URL } from '../utils/constants';
const MoviesCard = ({moviescard}) => {
  return (
        <div className='p-2 rounded-lg shadow-lg bg-[0000]'>
            <img src={API_IMAGE_URL + moviescard.poster_path} alt={moviescard.title} className='w-full h-auto rounded-lg mb-2' />
            <h2 className='text-white text-sm font-semibold text-left'>{moviescard.title}</h2>
        </div>
    )
}

export default MoviesCard