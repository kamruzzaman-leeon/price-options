import { list } from 'postcss';
import React, { useState } from 'react';
import Link from '../Link/Link';
import { HiMenuAlt1, HiOutlineX } from 'react-icons/hi';
const Nav = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { path: '/', id: 'home', name: 'Home' },
        { path: '/about', id: 'about', name: 'About' },
        { path: '/products', id: 'products', name: 'Products' },
        { path: '/contact', id: 'contact', name: 'Contact' },
        { path: '/dashboard', id: 'dashboard', name: 'Dashboard' },
    ];

    return (

        <nav className='text-black bg-yellow-200 p-6 '>
            <div className='text-2xl md:hidden' onClick={() => setOpen(!open)}>
                {
                    open === true ? <HiOutlineX></HiOutlineX> : <HiMenuAlt1 ></HiMenuAlt1>
                }
            </div>

            <ul className={`md:flex duration-1000 absolute md:sticky ${open ? 'top-12' : '-top-60'} bg-yellow-200 px-6`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>

        </nav>


    );
};

export default Nav; 