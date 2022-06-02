import React, { useEffect, useState } from 'react'
import { Outlet, useParams } from 'react-router-dom'
import Formulario from '../components/Formulario'

const EditarCliente = () => {
  const { id } = useParams()
  
  const [cargando, setCargando]= useState(false)
  const [cliente, setCliente]=useState({})
  useEffect(()=>{  
    setCargando(true)
    const obtenerCliente = async ()=>{

        try{
           const url = `http://localhost:4000/clientes/${id}`
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
        {Object.keys(cliente).length === 0 ? 
   <p className = 'mt-3 text-2xl text-gray-600 underline mb-20 font-bold '>ESTE ID DE CLIENTE NO EXISTE</p> :(
     <>
        <h1 className='font-black text-4xl text-blue-900'>Editar Cliente</h1>
            <p className = 'mt-3 text-2xl text-gray-600'>Cambia los datos para guardarlos</p>
            <Formulario
              cliente = {cliente}
              cargando = {cargando}
            />
     </>   
   )}
        
    </div>
  )
}
 
export default EditarCliente