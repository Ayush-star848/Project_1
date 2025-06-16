import { ArrowLeft, DownloadIcon } from 'lucide-react'
import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

function VideoInfo({videoData}) {
  return (
    <div className='p-5 border rounded-lg shadow-lg'>
        <Link href={'/dashboard'}>
            <h2 className='text-2xl font-semibold flex gap-2 items-center'>
            <ArrowLeft />
            Back to Dashboard
            </h2>
        </Link>
       <div className='flex flex-col gap-3'>
        <h2 className='mt-5'>Project Title: {videoData?.title}</h2>
        <p className='text-gray-600'>Script: {videoData?.script}</p>
        <h2>Project style: {videoData?.videoStyle}</h2>

        <Button className='cursor-pointer'> <DownloadIcon/> Export and Download</Button>
       </div>
    </div>
  )
}

export default VideoInfo