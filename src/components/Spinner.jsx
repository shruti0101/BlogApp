import React from 'react'
import './Spinner.css'

const Spinner = () => {
  return (
    <div>
        <div className='flex justify-center items-center flex-col '>
      <div className='spinner'></div>
      <p className='font-bold text-lg'>Loading...</p>
    </div>
    </div>
  )
}

export default Spinner