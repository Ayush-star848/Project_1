"use client"
import React from 'react'
import Topic from './_components/Topic'
import { useState } from 'react'
import VideoStyle from './_components/VideoStyle';
import Voice from './_components/Voice'
import Captions from './_components/Captions'
import Preview from './_components/Preview'
import { Button } from '@/components/ui/button'
import { WandSparkles } from 'lucide-react';


function CreateNewVideo() {
    const [formData, setFormData] = useState();

    const onHandleInputChange = (fieldName, fieldValue) => {
        setFormData(prev => ({
            ...prev,
            [fieldName]: fieldValue
        }))
        console.log(formData);
    }
  return (
    <div>
        <h2 className='text-3xl shadow-2xs mt-2'>Create New Video</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 mt-8 gap-7'>
            <div className='col-span-2 p-7 border rounded-xl mt-8 shadow-md bg-gray-800 h-[72vh] overflow-auto'>
                 {/* topic and script */}
                    <Topic onHandleInputChange={onHandleInputChange}/>
                {/* video image style */}
                <VideoStyle onHandleInputChange={onHandleInputChange}/>
                {/* voice */}
                <Voice onHandleInputChange={onHandleInputChange}/>
                {/* captions */}
                <Captions onHandleInputChange={onHandleInputChange}/>
                <Button className="w-full cursor-pointer mt-4 p-2" > <WandSparkles/> Generate video </Button>
            </div>
            <div>
                <Preview formData={formData}/>
            </div>
        </div>
       
    </div>
  )
}

export default CreateNewVideo