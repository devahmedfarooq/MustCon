"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { RxCross2 } from "react-icons/rx";
export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return <header className='sticky z-50 top-0 left-0 '>
        <header className='flex flex-row max-w-screen justify-between bg-white  px-6 md:px-16  py-4 bg-whtie'>
            <Link href={"/"} className='flex-1 flex flex-row justify-start items-start'>
                <Image width={64} height={64} src={"/logo.png"} className='w-12 md:w-12' />
            </Link>
            <nav className='flex-1  hidden lg:flex flex-row justify-between items-center ' >

                <div className='flex flex-row lg:gap-8 xl:gap-16 items-center text-slate-500 whitespace-nowrap'>
                    <Link href={'/'} className='cursor-pointer transition-all hover:text-slate-900'>Home</Link>
                    <Link href={'/about'} className='cursor-pointer transition-all hover:text-slate-900'>About</Link>
                    <Link href={'/events'} className='cursor-pointer transition-all hover:text-slate-900'>Events</Link>
                    {/*                     <Link href={'/ambassadors'} className='cursor-pointer transition-all hover:text-slate-900'>Ambassadors</Link>
 */}                    <Link href={'/contact'} className='cursor-pointer transition-all hover:text-slate-900'>Contact Us</Link>
                    <Link href={'https://registrations.mustcon.com.pk'} className='px-4 py-2 rounded-md transition-all duration-75 bg-slate-200  hover:bg-slate-900  hover:text-white cursor-pointer'>Register Now</Link>
                </div>


            </nav>

            <nav className='flex flex-row justify-end col-span-9 items-center lg:hidden'>
                <img onClick={() => { setMobileMenuOpen(true) }} src='/icons/burger.png' className='w-6 cursor-pointer' />
            </nav>


        </header>

        {mobileMenuOpen ? <>

            <div className='bg-white top-0 absolute z-10 left-0 w-screen h-screen px-4 py-6 flex flex-col items-start justify-start'>
                <div className='flex flex-row justify-end w-full'>
                    <RxCross2 onClick={() => { setMobileMenuOpen(false) }} size={24} />
                </div>

                <div className='w-full flex flex-col items-start gap-8 justify-start my-4 '>
                    <Link href={"/"} className='flex flex-col justify-center items-center'>
                        <Image width={64} height={64} src={"/logo.png"} className='w-16' />
                    </Link>

                    <div className='flex my-4 flex-col justify-start items-start gap-8'>
                        <Link onClick={() => setMobileMenuOpen(false)} href={"/"} className='text-xl font-medium active:text-slate-900 active:underline underline-offset-8' > Home </Link>
                        <Link onClick={() => setMobileMenuOpen(false)} href={"/about"} className='text-xl font-medium active:text-slate-900 active:underline underline-offset-8' > About </Link>
                        <Link onClick={() => setMobileMenuOpen(false)} href={"/events"} className='text-xl font-medium active:text-slate-900 active:underline underline-offset-8' > Events </Link>
                        {/*                         <Link onClick={() => setMobileMenuOpen(false)} href={"/ambassadors"} className='text-xl font-medium active:text-slate-900 active:underline underline-offset-8' > Ambassadors </Link>
 */}
                        <Link onClick={() => setMobileMenuOpen(false)} href={"/contact"} className='text-xl font-medium active:text-slate-900 active:underline underline-offset-8' > Contact </Link>
                        <Link onClick={() => setMobileMenuOpen(false)} href={"https://registrations.mustcon.com.pk/"} className='text-xl font-medium px-4 py-2 rounded-md transition-all duration-75 bg-slate-200  hover:bg-slate-900  hover:text-white' > Register Now </Link>
                    </div>
                </div>
            </div>

        </> : null}


    </header>
} 