"use client"
import React from 'react'
import Topic from './_components/Topic'
import { useState } from 'react'
import VideoStyle from './_components/VideoStyle';
import Voice from './_components/Voice'
import Captions from './_components/Captions'
import Preview from './_components/Preview'
import { Button } from '@/components/ui/button'
import { Loader2Icon, WandSparkles } from 'lucide-react';
import axios from 'axios';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { useAuthContext } from '@/app/provider';



function CreateNewVideo() {
    const [formData, setFormData] = useState();
    const CreateInitialVideoRecord = useMutation(api.videoData.CreateVideoData);
    const {user} = useAuthContext();
    const [loading,setLoading] = useState(false);

    const onHandleInputChange = (fieldName, fieldValue) => {
        setFormData(prev => ({
            ...prev,
            [fieldName]: fieldValue
        }))
        console.log(formData);
    }
    const GenerateVideo = async() => {
        if(user?.credits <= 0) {
            toast("You don't have enough credits to create a video. Please purchase more credits.");
            return;
        }
        if(!formData?.topic || !formData?.script || !formData.videoStyle || !formData?.caption || !formData?.voice) {
            console.log("error enter all fields");
            return;
        }
        setLoading(true);
        // save video data first.....

        const resp = await CreateInitialVideoRecord({
             title:formData.title,
            topic:formData.topic,
            script:formData.script,
            videoStyle: formData.videoStyle,
            caption: formData.caption,
            voice:formData.voice,
            uid: user?._id,
            createdBy:user?.email,
            credits:user?.credits
            
        });
        console.log(resp);

        const result = await axios.post('/api/generate-video-data',{
            ...formData,
            recordId: resp,
        })
        console.log(result);
        setLoading(false);
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
                <Button className="w-full cursor-pointer mt-4 p-2" 
                disabled={loading}
                onClick={GenerateVideo}
                > {loading?<Loader2Icon className='animated-spin' />: <WandSparkles/>} Generate video </Button>
            </div>
            <div>
                <Preview formData={formData}/>
            </div>
        </div>
       
    </div>
  )
}

export default CreateNewVideo