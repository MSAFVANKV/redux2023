import React from 'react'
import { Link, NavLink } from 'react-router-dom';


function navbar() {
    const menu = [
        {
            id: 1,
            name: 'HOME',
            path: '/'
        },
        {
            id: 2,
            name: 'STORE',
            path: '/store'
        },
        {
            id: 3,
            name: 'SETTINGS',
            path: '/settings'
        },
        ,
        {
            id: 4,
            name: 'LEBAL',
            path: '/lebel'
        },
        {
            id: 4,
            name: 'TEST',
            path: '/test'
        },
    ];

    return (

        <div className='flex justify-center bg-purple-500 h-[100px]'>
            <div className="hidden items-center  md:flex gap-14">
                {menu.map((item) => (
                    <div key={item.id} className="cursor-pointer hover:underline font-medium underline-offset-4">
                        <NavLink

                            to={item.path}
                            className={({ isActive }) =>
                                `font-bold text-[1.5rem] ${isActive ? 'text-black' : 'text-white'} hover:text-black`
                            }
                        >
                            {item.name}
                        </NavLink>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default navbar