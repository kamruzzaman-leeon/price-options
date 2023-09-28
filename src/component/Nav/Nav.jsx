import { list } from 'postcss';
import React from 'react';
import Link from '../Link/Link';

const Nav = () => {
    const routes = [
        { path: '/', id: 'home', name: 'Home' },
        { path: '/about', id: 'about', name: 'About' },
        { path: '/products', id: 'products', name: 'Products' },
        { path: '/contact', id: 'contact', name: 'Contact' },
        { path: '/dashboard', id: 'dashboard', name: 'Dashboard' },
      ];
      
    return (
      
        <nav>
            <ul className='md:flex'>
            {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
            </ul>
        </nav>
           
           
    );
};

export default Nav; 