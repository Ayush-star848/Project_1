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
            <Button>Explore
             </ Button >

             <Authentication>
             <Button>Get started</Button>
             </Authentication>
        </div>
    </div>
  )
}

export default Hero