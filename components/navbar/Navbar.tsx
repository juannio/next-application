import { HomeIcon } from '@primer/octicons-react'
import Link from 'next/link'
import React from 'react'
import { ActiveLink } from '../active-link/ActiveLink'

const navItems = [
    {
        path: '/about',
        name: 'Sysadmins',
    },
    {
        path: '/pricing',
        name: 'chebas',
    },
    {
        path: '/contact',
        name: 'no chamba?',
    },
]

export const NavBar = () => {
    return (
        <nav className='flex gap-2 bg-blue-800 bgopacity-30 m-2 rounded'>
            <Link href={'/'} className='flex items-center gap-1'>
                <HomeIcon />
                <span>Home</span>
            </Link>
            <div className='flex flex-1'></div>
            {
                navItems.map(item => (
                    <ActiveLink key={item.path} {...item} />
                ))
            }


        </nav>
    )
}
