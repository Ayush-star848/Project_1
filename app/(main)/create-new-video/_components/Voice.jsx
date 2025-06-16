import React from 'react'
import {useState} from 'react'
import { ScrollArea } from "@/components/ui/scroll-area"
// import Image from "/lucide-react"

const voiceOptions = [
  {
    "value": "af_sarah",
    "name": "🇺🇸 Sarah (Female)"
  },
  {
    "value" : "af_alloy",
    "name":  "🇺🇸 Alloy (Female)"
  },
  {
    "value": "hf_alpha",
    "name" : "🇮🇳 Alpha (Female)"
  },
   {
    "value": "hf_beta",
    "name" : "🇮🇳 Beta (Female)"
  },
   {
    "value": "bm_lewis",
    "name" : "🇬🇧 Lewis (Male)"
  },
   {
    "value": "bm_daniel",
    "name" : "🇬🇧 Daniel (Male)"
  },
   {
    "value": "hm_psi",
    "name" : "🇮🇳 Psi (Male)"
  },
   {
    "value": "ff_siwis",
    "name" : "🇫🇷 Siwis (Female)"
  },
   {
    "value": "am_echo",
    "name" : "🇺🇸 Echo (Male) "
  },
   {
    "value": "hm_omega",
    "name" : "🇮🇳 Omega (Male)"
  },
   {
    "value": "am_liam",
    "name" : "🇺🇸 Liam(Male)"
  },
   
]

function Voice({onHandleInputChange}) {
  const [selectedVoice,setSelectedVoice] = useState();
  return (
    <div className='mt-5'>
        <h2>Video Voice</h2>
        <p className='text-sm text-gray-300 mb-2' >Select voice for your video</p>

        <ScrollArea className="h-[200px] w-full">
          <div className='grid grid-cols-2 gap-3'>
            {voiceOptions.map((voice,index) => (
                    <h2 className={`cursor-pointer p-3 dark:bg-black rounded-lg dark:border-white hover:border ${voice.name == selectedVoice && 'border'}`}
                    onClick={() => {setSelectedVoice(voice.name);
                      onHandleInputChange('voice',voice.value)
                    }}
                     key={index}>{voice.name}</h2>               
            ))}
        </div>
        </ScrollArea>
    </div>
  )
}

export default Voice