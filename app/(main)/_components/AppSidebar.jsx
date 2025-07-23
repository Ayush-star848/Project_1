"use client"
import React from 'react'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { HomeIcon, LucideFile, LucideFileVideo, Search, WalletCards } from 'lucide-react'
import Link from 'next/link'
import { SidebarMenu } from '@/components/ui/sidebar'
import { usePathname } from 'next/navigation'
import { Gem } from 'lucide-react'
import { useAuthContext } from '@/app/provider'
// import { useAuthContext } from '../provider'



const MenuItems = [
    {
        title: 'Home',
        url: '/dashboard',
        icon: HomeIcon
    },
   {
     title: 'Create New Video',
    url: '/create-new-video',
    icon: LucideFileVideo
   },
    {
    title: 'Explore',
    url: '/dashboard',
    icon: Search
   },
    {
    title: 'Billing',
    url: '/billing',
    icon: WalletCards
   },
]

function AppSidebar() {
    const path = usePathname();
    const {user}  = useAuthContext();
  return (
    <Sidebar>
        <SidebarHeader>
        <div>
             <div className='flex items-center gap-3 w-full justify-center mt-4'>
                <Image src={'/logo.svg'} alt='logo' width={40} height={40} />
                <h2 className='font-bold text-2xl'>Mova</h2>
            </div>
            <h2 className='text-lg text-gray-500 text-center mt-2'>AI Short Video Generator</h2>
        </div>
           
        </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
           <SidebarGroupContent>
             <div className='mx-4 mt-4'>
                <Link href={'/create-new-video'}>
                    <Button className="w-full font-semibold cursor-pointer">+Create New Video</Button>
                </Link>
             </div> 
             <SidebarMenu>
                {MenuItems.map((menu, index) => (
                    <SidebarMenuItem key={index} className="mt-3 mx-2">
                        <SidebarMenuButton isActive={path==menu.url} className="p-5">
                            <Link href={menu?.url} className='flex items-center gap-4 p-3'>
                            <menu.icon />
                            <span>{menu?.title}</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}
             </SidebarMenu>
           </SidebarGroupContent>
         </SidebarGroup>   
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter>
                <div className='p-5 border rounded-lg mb-4 shadow-md bg-gray-600'>
                     <div className='flex items-center justify-between'>
                    <Gem className='text-gray-400'/>
                    <h2 className='text-gray-400'>{user?.credits} Credits Left</h2>
                    </div>
                    <Button className="cursor-pointer w-full mt-3 font-semibold">Buy More Credits</Button>
                </div>
                
      </SidebarFooter>
    </Sidebar>
  )
}

export default AppSidebar