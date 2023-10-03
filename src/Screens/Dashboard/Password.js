import React from 'react'
import SideBar from './SideBar';
import { Input } from './../../Components/Home/UsedInputs';

function Password() {
    return (
        <SideBar>
            <div className='flex flex-col gap-6'>
                <h2 className='text-xl font-bold'>Cambiar contraseña</h2>
                <Input
                label="Contraseña anterior"
                placeholder="**********"
                type="password"
                bg={true}
                ></Input>
                <Input
                label="Nueva contraseña"
                placeholder="**********"
                type="password"
                bg={true}
                ></Input>
                <Input
                label="Confirmar contraseña"
                placeholder="**********"
                type="password"
                bg={true}
                ></Input>
                <div className='flex justify-end items-center my-4'>
                    <button className='bg-subMain font-medium transitions hover:bg-main border border-subMain text-white py-3 px-6 rounded w-full sm:w-auto'>
                        Cambiar contraseña
                    </button>
                </div>
            </div>
        </SideBar>
          )
}

export default Password
