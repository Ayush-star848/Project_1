import React,{useState} from 'react'


const options = [
    {
        name: 'Youtuber',
        style: 'text-yellow-400 text-3xl font-extrabold uppercase tracking-wide drop-shadow-md px-3 py-1 rounded-lg'
    },
    {
         name: 'Visionary',
         style: 'text-pink-500 text-3xl font-black italic uppercase tracking-tight shadow-lg bg-black/10 px-4 py-1 rounded-xl'
    },
    {
        name: 'Tech Guru',
        style: 'text-cyan-400 text-2xl font-semibold uppercase tracking-widest neon-glow px-3 py-1 rounded-full'
    },
    {
        name: 'Director’s Cut',
        style: 'text-red-600 text-4xl font-extrabold tracking-wider uppercase bg-gradient-to-r from-black to-transparent px-5 py-2 rounded-md'
    },
    {
        name: 'Volt Vibes',
        style: 'text-yellow-400 text-3xl font-black uppercase tracking-widest animate-pulse bg-yellow-100 px-4 py-2 rounded-full'
    },
    {
        name: 'Clean Slate',
        style: 'text-slate-700 text-xl font-medium tracking-normal bg-white shadow-sm px-3 py-1 rounded-md'
    },
    {
        name: 'Pixel Rebel',
        style: 'text-fuchsia-500 text-3xl font-extrabold uppercase tracking-wide bg-black px-4 py-2 rounded-lg border-2 border-fuchsia-500'
    },
    {
        name: 'Tale Spinner',
        style: 'text-amber-600 text-2xl font-semibold italic tracking-widest underline decoration-amber-400 px-3 py-1 rounded-sm'
    },
    {
        name: 'Dream Sketch',
        style: 'text-indigo-400 text-2xl font-medium tracking-wider bg-white/10 backdrop-blur-md px-4 py-1 rounded-2xl'
    },
    {
        name: 'Vibe Maker',
        style: 'text-green-400 text-xl font-bold tracking-tight bg-gray-800/60 px-3 py-1 rounded shadow-inner'
    }

]

function Captions({onHandleInputChange}) {
    const [selectedCaptionStyle,setSelectedCaptionStyle] = useState();
  return (
    <div>
        <h2 className='mt-6'>Caption Style</h2>
        <p className='text-sm text-gray-300 m-2'>Select caption Style</p>

        <div className='flex flex-wrap gap-4 mt-2'>
            {options.map((option,index) => (
                <div key={index} 
                onClick={() => {
                    setSelectedCaptionStyle(option.name)
                    onHandleInputChange('caption',option)
                }}
                className={`p-2 hover:border border-gray-200 cursor-pointer rounded-lg dark:bg-black 
                ${selectedCaptionStyle == option.name && 'border'}`}>
                    <h2 className={option.style}>
                        {option.name}
                    </h2>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Captions