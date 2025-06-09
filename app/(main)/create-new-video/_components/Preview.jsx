// import Image from 'next/image'
// import React from 'react'
// import {options} from './VideoStyle'



// function Preview({formData}) {
//     const selectVideoStyle= formData&&options.find((item=>item?.name==formData?.videoStyle));
//   return (
//     <div>
//         <Image src={selectVideoStyle?.image} alt={selectVideoStyle?.name} width={1000} height={600} />
//     </div>
//   )
// }

// export default Preview

// copied from gpt
import Image from 'next/image'
import React from 'react'
import { options } from './VideoStyle'

function Preview({ formData }) {
  const selectVideoStyle = formData && options.find(item => item?.name === formData?.videoStyle);

  return (
    <div className='relative'>
        <p className='mb-3 text-2xl shadow-2xs'>Preview</p>
      {selectVideoStyle?.image ? (
        <Image
          src={selectVideoStyle.image}
          alt={selectVideoStyle?.name || 'Preview'}
          width={1000}
          height={300}
          className='w-full h-[70vh] object-cover rounded-xl'
        />
      ) : (
        <p className="text-gray-500 italic">🎬 Select a video style to preview it here</p>
      )}
      <h2 className={`${formData?.caption?.style} absolute bottom-8 text-center w-full`}>{formData?.caption?.name}</h2>
    </div>
  );
}

export default Preview;
