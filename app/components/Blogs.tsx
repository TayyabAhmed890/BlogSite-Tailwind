import React from 'react'
import Image from 'next/image'

const Blogs = () => {
  return (
    <>
    <div className='flex gap-5 items-center justify-center p-6 flex-wrap'>
        <div className='bg-green-500 h-[300px] w-[300px] rounded-lg flex flex-col py-3 px-3 gap-5 items-center hover:scale-95 transition-[1s] hover:bg-green-600 hover:text-white cursor-pointer shadow-black shadow-md'>
            <Image src="/code.png" alt="" height={50} width={50}/>
            <h2 className='text-3xl font-bold'>Programming</h2>
            <p className='text-lg text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, impedit. Incidunt natus ea et consectetur quibusdam voluptates eligendi non harum.</p>
        </div>
        <div className='bg-green-500 h-[300px] w-[300px] rounded-lg flex flex-col py-3 px-3 gap-5 items-center hover:scale-95 transition-[1s] hover:bg-green-600 hover:text-white cursor-pointer shadow-black shadow-md'>
            <Image src="/ux.png" alt="" height={50} width={50}/>
            <h2 className='text-3xl font-bold'>UX/UI Design</h2>
            <p className='text-lg text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, impedit. Incidunt natus ea et consectetur quibusdam voluptates eligendi non harum.</p>
        </div>
        <div className='bg-green-500 h-[300px] w-[300px] rounded-lg flex flex-col py-3 px-3 gap-5 items-center hover:scale-95 transition-[1s] hover:bg-green-600 hover:text-white cursor-pointer shadow-black shadow-md'>
            <Image src="/pen.png" alt="" height={50} width={50}/>
            <h2 className='text-3xl font-bold'>Graphic Design</h2>
            <p className='text-lg text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, impedit. Incidunt natus ea et consectetur quibusdam voluptates eligendi non harum.</p>
        </div>
    </div>
    </>
  )
}

export default Blogs