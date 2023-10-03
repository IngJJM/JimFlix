import React from 'react'
import SideBar from '../SideBar'
import Table2 from './../../../Components/Single/Table2';
import { UsersData } from './../../../Data/MovieData';

function Users() {
  return (
    <SideBar>
        <div className='flex flex-col gap-6'>
           
                <h2 className='text-xl font-bold'>Usuarios</h2>
                <Table2 data={UsersData} users={true}></Table2>
           

        </div>
    </SideBar>
  )
}

export default Users