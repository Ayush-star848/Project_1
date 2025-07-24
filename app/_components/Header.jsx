"use client";
import Link from 'next/link';
import Image from 'next/image'
import React from 'react'
import { Button } from '@/components/ui/button'
import Authentication from './Authentication';
// import { useAuthContext } from '../provider';
import { useAuthContext } from '@/app/(main)/provider'

 
function Header() {
    const {user}=useAuthContext();
  return (
   <div className='p-4 shadow-md flex items-center justify-between'>
            <div className='flex items-center gap-3'>
        <Image src={'/logo.svg'} alt='logo' width={30} height={30} />
        <h2 className='text-2xl font-bold'>Mova</h2>
            </div>
    <div>

        {!user?    <Authentication>
                <Button className="bg-white text-black font-bold border border-black px-4 py-2 rounded-sm cursor-pointer">Get started</Button>  
            </Authentication>
             :<div className='flex items-center gap-3'>
                <Link href={'/dashboard'}>
                     <Button className="bg-white text-black font-bold border border-black px-4 py-2 rounded-sm cursor-pointer">Dashboard</Button>
                </Link >
               
                {(user?.pictureURL)&& <Image src={user?.pictureURL} alt='userImg' width={40} height={40} className='rounded-full'/>}
             </div>} 
        </div>    
   </div>
  );
}

export default Header