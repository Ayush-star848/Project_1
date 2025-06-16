"use client"
import React from 'react'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { Textarea } from '@/components/ui/textarea'
import { Loader2Icon, SparklesIcon } from 'lucide-react'
import axios from 'axios'
// import { toast } from 'react-hot-toast'
import { useAuthContext } from '@/app/provider'


const suggestions = [
    "Historic Story",
    "Kids Story",
    "Movie Stories",
    "AI Innovations",
    "Space Mysteries",
    "Horror Stories",
    "Mythological Tales",
    "Tech Breakthroughs",
    "True Crime Stories",
    "Fantasy Adventures",
    "Science Experiments",
    "Motivational Stories",
   
]

function Topic({onHandleInputChange}) {
    const [selectedTopic, setSelectedTopic] = useState();
    const [selectedScriptIndex,setSelectedScriptIndex] = useState();
    const [scripts,setScripts] = useState();
    const [loading, setLoading] = useState(false);
    const {user} = useAuthContext();

    const GenerateScript= async () => {
         if(user?.credits <= 0) {
            toast("You don't have enough credits to create a video. Please purchase more credits.");
            return;
        }
        setLoading(true);
        setSelectedScriptIndex(null);
        try{
            const result = await axios.post('/api/generate-script',{
            topic: selectedTopic
        });
        console.log(result.data);
        setScripts(result.data?.scripts || []);
        }
        catch(e) {
            console.log(e);
            alert("Error generating script. Please try again later.");

        }
        setLoading(false);
    } 

  return (
    <div>
        <h2 className='mb-1'>Project Title</h2>
        <Input placeholder="Enter project Title" onChange={(event) =>onHandleInputChange('title',event?.target.value)}/>

        <div className='mt-5'>
            <h2>Video Topic</h2>
            <p className='text-sm text-gray-400'>Select topic for your video</p>
            <Tabs defaultValue="suggestion" className="w-full bg-gray-800 mt-2" >
             <TabsList>
             <TabsTrigger value="suggestion" className="cursor-pointer">Suggestions</TabsTrigger>
             <TabsTrigger value="your_topic" className="cursor-pointer">Your Topic</TabsTrigger>
             </TabsList>
             <TabsContent value="suggestion">
               <div className='flex flex-wrap'>
                 {suggestions.map((suggestion, index) => (
                  <Button varient="outline" key={index} className={`text-white bg-gray-700 shadow px-1 m-1.5 cursor-pointer ${suggestion == selectedTopic && 'bg-secondary'}`} onClick={() => {setSelectedTopic(suggestion)
                    onHandleInputChange("topic", suggestion)
                  }}>{suggestion}</Button>  
                ))}
               </div>
             </TabsContent> 
            <TabsContent value="your_topic">
                <div>
                    <h2>Enter your own topic here</h2>
                    <Textarea placeholder="Enter your topic..."
                    onChange={(event) => onHandleInputChange("topic",event.target.value)}/>
                </div>
            </TabsContent>
            </Tabs>

            {scripts?.length > 0 && 
            <div className='mt-3'>
                <h2>Select the Script</h2>
            <div className='grid grid-cols-2 gap-4 mt-1'>
                {scripts?.map((item,index) => (
                    <div key={index}
                     className={`p-2 border-2 rounded-lg cursor-pointer
                     ${selectedScriptIndex == index && 'border-white bg-secondary'}`}
                     onClick={() => {setSelectedScriptIndex(index);
                        onHandleInputChange('script',item?.content)
                     }}>
                        <h2 className='line-clamp-4 text-sm text-gray-400'>{item.content}</h2>
                    </div> 
                ))}
            </div>
        </div>
            }

        </div>    
               
       {!scripts &&  <Button className="mt-2 cursor-pointer" size="sm"
        disabled={loading} onClick={GenerateScript}> 
           {loading?<Loader2Icon className='animate-spin'/>: <SparklesIcon/>}Generate Script </Button>}
    </div>
  )
}

export default Topic