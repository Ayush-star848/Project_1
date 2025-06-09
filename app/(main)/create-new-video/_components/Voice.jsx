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
    "value": "af_matt",
    "name": "🇺🇸 Matt (Male)"
  },
  {
    "value": "af_john",
    "name": "🇺🇸 John (Deep Male)"
  },
  {
    "value": "in_aisha",
    "name": "🇮🇳 Aisha (Indian Female)"
  },
  {
    "value": "in_raj",
    "name": "🇮🇳 Raj (Indian Male)"
  },
  {
    "value": "uk_charlotte",
    "name": "🇬🇧 Charlotte (UK Female)"
  },
  {
    "value": "hi_ravi",
    "name": "🇮🇳 Ravi (Male - Hindi)"
  },
  {
    "value": "hi_ananya",
    "name": "🇮🇳 Ananya (Female - Hindi)"
  },
  {
    "value": "en_ind_amit",
    "name": "🇮🇳 Amit (Male - Indian English)"
  },
  {
    "value": "en_ind_priya",
    "name": "🇮🇳 Priya (Female - Indian English)"
  },
  {
    "value": "ta_karthik",
    "name": "🇮🇳 Karthik (Male - Tamil)"
  },
  {
    "value": "fr_luc",
    "name": "🇫🇷 Luc (French Male)"
  }
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