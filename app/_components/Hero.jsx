import React from 'react'
import {Button} from "@/components/ui/button";
import Authentication from './Authentication';

function Hero() {
  return (
    <div className='p-10 flex flex-col items-center justify-center mt-24'>
        <h2 className='font-bold text-5xl text-center  '>AI Short Video Generator</h2>
        <p className='mt-4 text-2xl text-center text-2xl text-gray-500'>Mova is an AI-powered 🤖 platform that lets you create stunning short video reels 🎬 in seconds.
Just give a prompt 💡 — and let Mova work its magic with smart edits ✂️, music 🎵, and smooth transitions 🎞️.
Perfect for creators 🧑‍🎨, marketers 📈, and storytellers 📖 looking to stand out effortlessly 🌟.</p>

        <div className='mt-7 gap-8 flex'>
            <Button className="bg-gray-600 text-white font-bold border border-black px-6 py-4 rounded-sm">Explore
             </ Button >

             <Authentication>
             <Button className="bg-white text-black font-bold border border-black px-4 py-2 rounded-sm cursor-pointer">Get started</Button>
             </Authentication>
        </div>
    </div>
  )
}

export default Hero