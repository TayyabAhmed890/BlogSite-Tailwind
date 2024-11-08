import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <>
            <nav className='flex justify-between items-center px-5 py-3 bg-green-500'>
                <div className='text-2xl font-black'>
                <Link href="/">BlogSite</Link>
                </div>
                <ul className='flex gap-8 items-center font-semibold' >
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/Blogs">Blogs</Link>
                    </li>
                    <li>
                        <Link href="/Contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar