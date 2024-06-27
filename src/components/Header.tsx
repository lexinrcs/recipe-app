'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Define the Header component
const Header = () => {
    return (
        <div className='fixed flex justify-between w-full items-center py-8 px-4 md:px-8 lg:px-12 xl:px-16 h-[100px] z-10 bg-white shadow-lg'>
            <h1 className='text-4xl font-playfair font-extrabold md:text-5xl'>GFGL</h1>
            <nav className='flex items-center space-x-6 font-lato md:space-x-8 lg:space-x-12 xl:space-x-16 md:text-lg'>
                <Link href={'/'} className={usePathname() === '/' ? 'font-bold underline hover:scale-105' : 'hover:scale-105'}>Home</Link>
                <Link href={'/'} className='hover:scale-105'>Contact Us</Link>
                <Link className='bg-black text-white px-4 py-2 hover:scale-105' href={'/'}>
                    Sign In
                </Link>
            </nav>
        </div>

    );
}

export default Header;