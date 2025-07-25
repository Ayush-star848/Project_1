"use client"
// import { useAuthContext } from '@/app/provider'
// import { useAuthContext } from '../provider'
// import { useAuthContext } from '@/app/(main)/provider'
import { useAuthContext } from '@/app/provider'


import { SidebarTrigger } from '@/components/ui/sidebar'
import Image from 'next/image'
import React from 'react'

function AppHeader() {
    const {user} = useAuthContext();
  return (
    <div className='p-3 flex justify-between items-center shadow-md'>
        <SidebarTrigger className="cursor-pointer block" />
        <Image src={user?.pictureURL || '/default-user.png'} alt='user' width={40} height={40} className='rounded-full'/>
        </div>
  )
}

export default AppHeader