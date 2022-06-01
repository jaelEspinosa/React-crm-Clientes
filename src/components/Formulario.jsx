import React from 'react'
import {Formik, Form, Field} from 'formik'
import * as Yup from 'yup'
import Errors from './Errors'
import { useNavigate } from 'react-router-dom'

const Formulario = () => {

    const navigate = useNavigate()

    const nuevoClienteSchema = Yup.object().shape({
                 nombre: Yup.string()
                 .required('El Nombre es Obligatorio')
                 .min(3, 'nombre demasiado corto')
                 .max(40, 'nombre demasiado largo'),
                 empresa: Yup.string()
                           .required('Nombre de la empresa obligatorio'),
                 email: Yup.string()
                           .email('e-mail no válido')
                           .required('El email es obligatorio'),
                 telefono: Yup.number()
                              .integer('Número no válido')
                              .positive('Número no válido')
                              .typeError('Número no válido'),
                 notas:'', 
    }) 

    const handleSubmit = async (valores)=>{
        try{
           const url= 'http://localhost:4000/clientes'

           const respuesta = await fetch(url, {
               method:'POST',
               body: JSON.stringify(valores),
               headers:{
                   'Content-Type': 'application/json'
               }
           })
           console.log('respuesta',respuesta)
           const resultado = await respuesta.json()
           /* console.log(resultado) */
           navigate('/clientes')
        }catch(error){
           console.log ('resultado',error)
        }
    }
  return (
      
    <div className='bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto'>
       <h1 className='text-gray-600 font-bold text-xl uppercase text-center '>Agregar Cliente</h1>

       <Formik
             initialValues={{
                 nombre: '',
                 empresa: '',
                 email: '',
                 telefono: '',
                 notas:'',
             }}
             onSubmit={async (values,{resetForm})=>{
                 await handleSubmit(values)

                 resetForm()
             }}
             validationSchema={nuevoClienteSchema}
             >
             {({errors, touched})=>{
              {/* console.log('errores',errors,'touched', touched) */}
             return(
            <Form
            className='mt-10'
            >
            <div className='mb-4'>
                <label
                className='text-gray-800'
                htmlFor='nombre'
                >Nombre:</label>
                <Field
                    id='nombre'
                    type='text'
                    className="mt-2 block w-full p-3 bg-gray-200 "
                    placeholder='Nombre del Cliente'
                    name='nombre'
                />
                {errors.nombre && touched.nombre ? (
                    <Errors>
                        {errors.nombre}
                    </Errors>
                ): null}
            </div>
            <div className='mb-4'>
                <label
                className='text-gray-800'
                htmlFor='empresa'
                >Empresa:</label>
                <Field
                    id='empresa'
                    type='text'
                    className="mt-2 block w-full p-3 bg-gray-200 "
                    placeholder='Nombre de la Empresa'
                    name='empresa'
                />
                {errors.empresa && touched.empresa ? (
                    <Errors>
                        {errors.empresa}
                    </Errors>
                ): null}
            </div>
            <div className='mb-4'>
                <label
                className='text-gray-800'
                htmlFor='email'
                >E-mail:</label>
                <Field
                    id='email'
                    type='email'
                    className="mt-2 block w-full p-3 bg-gray-200 "
                    placeholder='Email del cliente'
                    name='email'
                />
                {errors.email && touched.email ? (
                    <Errors>
                        {errors.email}
                    </Errors>
                ): null}
            </div>
            <div className='mb-4'>
                <label
                className='text-gray-800'
                htmlFor='telefono'
                >Teléfono:</label>
                <Field
                    id='telefono'
                    type='tel'
                    className="mt-2 block w-full p-3 bg-gray-200 "
                    placeholder='Teléfono del Cliente'
                    name='telefono'
                />
                 {errors.telefono && touched.telefono ? (
                    <Errors>
                        {errors.telefono}
                    </Errors>
                ): null}
            </div>
            <div className='mb-4'>
                <label
                className='text-gray-800'
                htmlFor='notas'
                >Notas:</label>
                <Field
                    as="textarea"
                    id='notas'
                    type='text'
                    className="mt-2 block w-full p-3 bg-gray-200 h-40 "
                    placeholder='Notas del Cliente'
                    name='notas'
                />
            </div>
             <input
                 type="submit"
                 value="Agregar Cliente"
                 className='mt-5 w-full bg-gray-700 text-white uppercase font-bold text-lg '
             />
            </Form>
            )}}
       </Formik>

    </div>
  )
}

export default Formulario