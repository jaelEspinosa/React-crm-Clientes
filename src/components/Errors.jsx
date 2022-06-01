import React from 'react'

const Errors = ({children}) => {
  return (
    <div className='text-white bg-red-800 rounded-lg uppercase px-1 py-1 text-center my-1 '>
        {children}
    </div>
  )
}

export default Errors