import React from 'react'
import MainDrawer from './MainDrawer';
import { Link } from 'react-router-dom';
import { IoClose } from 'react-icons/io5';

function MenuDrawer({drawerOpen,toggleDrawer}) {
  return (
    <MainDrawer drawerOpen={drawerOpen} closeDrawer={toggleDrawer}>
<div className='flex flex-col w-full h-full justify-between items-center bg-main text-white rounded'>
    <div className='w-full flex-btn h-16 px-6 py-4 bg-dry'>
        <Link onClick={toggleDrawer} to="/">
            <img src="/images/log.png" alt='logo' className='w-28 h-28 object-contain'></img>
        </Link>
        <button
                onClick={toggleDrawer}
                type="button"
                className="
                transitions w-10 h-10 flex-colo text-base text-subMain bg-white rounded-full hover:bg-subMain hover:text-white"
              >
                <IoClose></IoClose>
              </button>
    </div>
</div>
    </MainDrawer>
  )
}

export default MenuDrawer
