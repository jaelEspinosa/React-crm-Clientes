import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../components/Spinner'

const VerCliente = () => {
    const { id } = useParams()
    const [cliente, setCliente] = useState({})
    const [cargando, setCargando] = useState(false)

useEffect(()=>{  
    setCargando(true)
    const obtenerCliente = async ()=>{

        try{
           const url = `${import.meta.env.VITE_API_URL}/${id}`
           const respuesta = await fetch(url)
           const resultado = await respuesta.json()
           setCliente(resultado)
           
           
        }catch(error){
            console.log(error)
        }
        
        setCargando(false) 
    }
   obtenerCliente()
   
   
},[])    
    
  return (
    
<div>
   {cargando ? <Spinner/> : 
   Object.keys(cliente).length === 0 ? 
   <p className = 'mt-3 text-2xl text-gray-600 underline mb-20 font-bold '>NO HAY RESULTADOS</p> : 
   (
   <>
    <h1 className='mt-10 font-black text-4xl text-blue-900'>Detalle del cliente: {cliente.nombre}</h1>
        
    <div className='border rounded-lg shadow-lg shadow-slate-800 py-10 px-5 mt-40 bg-slate-200 w-full overflow-x-scroll '>
          <p className = 'mt-3 text-2xl text-gray-600 underline mb-20 '>Información del Cliente: </p>
          <p className='text-2xl text-gray-600 mt-5 '>
          <span className='text-gray-700 uppercase font-bold text-xl '>Nombre: </span>
          {cliente.nombre}</p>

          <p className='text-2xl text-gray-600 mt-5 '>
          <span className='text-gray-700 uppercase font-bold text-xl '>Empresa: </span>
          {cliente.empresa}</p>

          <p className='text-xl text-gray-600 mt-5 '>
          <span className='text-gray-700 uppercase font-bold text-xl '>Email: </span>
          {cliente.email}</p>

          {cliente.telefono && <p className='text-2xl text-gray-600 mt-5 '>
          <span className='text-gray-700 uppercase font-bold text-xl '>Teléfono: </span>
          {cliente.telefono}</p>}  

          {cliente.notas && <p className='text-2xl text-gray-600 mt-5 '>
          <span className='text-gray-700 uppercase font-bold text-xl '>Notas: </span>
          {cliente.notas}</p>}
     </div>
  </> )}
</div>
   
    
  )
}

export default VerCliente