import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage, useForm, Link } from '@inertiajs/react';
import React from 'react';
import { router } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    const {clientes}=usePage().props;
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">CLIENTES REGISTRADOS</h2>}
        >
            <Head title="ANDES" />
            <div className="py-12">
                <table className='table-fixed w-full'>
                    <thead>
                        <tr className='px-4 py-2 w-20'>
                            <th className='px-4 py-2 w-5 text-white bg-blue-500 focus:outline-none'>ID</th>
                            <th className='px-4 py-2 w-20 text-white bg-blue-500 focus:outline-none'>CI</th>
                            <th className='px-4 py-2 w-20 text-white bg-blue-500 focus:outline-none'>NOMBRES</th>
                            <th className='px-4 py-2 w-20 text-white bg-blue-500 focus:outline-none'>APELLIDOS</th>
                            <th className='px-4 py-2 w-20 text-white bg-blue-500 focus:outline-none'>NACIONALIDAD</th>
                            <th className='px-4 py-2 w-20 text-white bg-blue-500 focus:outline-none'>PROCEDENCIA</th>
                            <th className='px-4 py-2 w-20 text-white bg-blue-500 focus:outline-none'>OCUPACION</th>
                            <th className='px-4 py-2 w-10 text-white bg-blue-500 focus:outline-none'>GENERO</th>
                            <th className='px-4 py-2 w-20 text-white bg-green-500 focus:outline-none'>ACCION</th>
                        </tr>
                    </thead>
                    <tbody>
                        { clientes.map(({id,ci,nombres,apellidos,nacionalidad,lugar_procedencia,ocupacion,genero})=>(
                            <tr>
                                <td className='border px-4 py-2'>{ id }</td>
                                <td className='border px-4 py-2'>{ ci }</td>
                                <td className='border px-4 py-2'>{ nombres }</td>
                                <td className='border px-4 py-2'>{ apellidos }</td>
                                <td className='border px-4 py-2'>{ nacionalidad }</td>
                                <td className='border px-4 py-2'>{ lugar_procedencia }</td>
                                <td className='border px-4 py-2'>{ ocupacion }</td>
                                <td className='border px-4 py-2'>{ genero }</td>
                                <td className='border px-4 py-2'>
                                    <Link tabIndex="1"
                                    className='text-blue-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'

                                    >EDITAR
                                    </Link>
                                    <Link tabIndex="1"
                                    className='text-blue-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'

                                    >ELIMINAR
                                    </Link>
                                </td>
                            </tr>
                        )) }
                    </tbody>
                </table>

                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">

                        <nav className='bg-gray-800'>
                        <div class="hidden sm:ml-6 sm:block">
          <div class="flex space-x-4">
            <a href="#" class="bg-gray-500 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Crear Registro</a>

            <a href="#" class="text-gray-500 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Calendario</a>
          </div>
        </div>
                        </nav>

                    </div>
                    <div className="p-6 text-gray-900">!Ya a Iniciado Secion</div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
