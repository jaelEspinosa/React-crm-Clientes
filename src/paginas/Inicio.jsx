import { useEffect, useState } from 'react'
import Clientes from '../components/Clientes'
import Spinner from '../components/spinner'

const inicio = () => {
const [clientes,setClientes]= useState([])
const [cargando, setCargando]=useState(false)
  useEffect(()=>{
      
      

      const obtenerClientesAPI= async ()=>{
        setCargando(true)
        
        try {
          const url = 'http://localhost:4000/clientes'
          const respuesta = await fetch(url)
          const resultado = await respuesta.json()

          setClientes(resultado)
                 
        }catch (error){
          console.log(error)
        }
        setCargando(false)
      }
      obtenerClientesAPI()
     
      
  },[])

  return (
    <div >
    {cargando ? <Spinner/> : (
      <>
      <h1 className='font-black text-4xl text-blue-900'>Clientes</h1>
        <p className = 'mt-3 text-2xl text-gray-600'>Administra tus clientes</p>
        
        
        <table className='w-full mt-5 table-auto shadow bg-white'>
              <thead className='bg-blue-800 text-white'>
                    <tr>
                      <th className='p-2'>Nombre</th>
                      <th className='p-2'>Contacto</th>
                      <th className='p-2'>Empresa</th>
                      <th className='p-2'>Acciones</th>
                    </tr>

              </thead>
        <tbody>
                    {clientes.map(cliente=>(
                <Clientes cliente ={cliente}
                  key={cliente.id}
                />
                ))}
        </tbody>
           
        </table>
      </>
    )}
     
   
    </div>
  )
}

export default inicio