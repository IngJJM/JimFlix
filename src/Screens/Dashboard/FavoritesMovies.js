import React from 'react'
import SideBar from './SideBar'
import Table from '../../Components/Single/Table'
import { Movies } from './../../Data/MoviesData';

function FavoritesMovies() {
  return (
    <SideBar>
        <div className='flex flex-col gap-6'>
            <div className='flex-btn gap-2'>
                <h2 className='text-xl font-bold'>Peliculas Favoritas</h2>
                <button className='bg-main font-medium transitions hover:bg-subMain border border-subMain text-white py-3 px-6 rounded'>
                    Eliminar todo
                </button>
            </div>
<Table data={Movies} admin={false}></Table>
        </div>
    </SideBar>
  )
}

export default FavoritesMovies
