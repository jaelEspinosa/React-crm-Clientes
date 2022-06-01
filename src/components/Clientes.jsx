import React from 'react'
import { useNavigate } from 'react-router-dom'

const Clientes = ({cliente}) => {
  const{nombre, empresa, email, telefono, notas, id}= cliente
  const navigate = useNavigate()
  return (
      <tr className='border-b hover:bg-gray-200 transition duration-300'>
      <td className='p-3'>{nombre}</td>
      <td className='p-3'>
         <p><span className='text-gray-800 uppercase font-bold '>email: </span>{email}</p>
         <p><span className='text-gray-800 uppercase font-bold '>Tlf.: </span>{telefono}</p>
         

      </td>
      <td className='p-3'>{empresa}</td>
      <td className='p-3'>
      <button 
        type='button'
        className='bg-green-700 hover:bg-green-900 transition duration-300 block w-full text-white p-2 uppercase font-bold text-xs mt-3 rounded-md '
        onClick={()=>navigate(`/clientes/${id}`)}
        >Detalle</button>

        <button 
        type='button'
        className='bg-blue-600 hover:bg-blue-800 transition duration-300 block w-full text-white p-2 uppercase font-bold text-xs mt-3 rounded-md'
        >Editar</button>
       
       
        <button 
        type='button'
        className='bg-red-600 hover:bg-red-800 transition duration-300 selection:block w-full text-white p-2 uppercase font-bold text-xs mt-3 rounded-md'
        >Eliminar</button>  
      </td>
      </tr>
  )
}

export default Clientes 