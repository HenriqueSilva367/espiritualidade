'use client'
import Image from 'next/image'
import img from '../../public/assets/photo-1494790108377-be9c29b29330.avif'

export default function CommunityCard(){

return (
  <div>
    <div className='mx-auto bg-white border-gray-200 border-2 shadow-violet-200 shadow-2xl my-10 w-80 md:w-4/5 lg:max-w-[75rem] lg:px-8 rounded-xl'>
      <div className='flex flex-col items-center md:flex-row py-7 '>
        <Image src={img} alt='' width={200} className='my-5 md:mx-4 rounded-md'/>
        <div className='ml-10'>
        <h1 className='font-bold text-1xl text-purple-400 mb-5 md:text-3xl'>Junte-se a nossa comunidade</h1>
        <span className='font-sans'>Lorem ipsum dolor sit amet consectetur. Iaculis vestibulum purus facilisi ultrices sed faucibus proin cum ut.Lorem ipsum dolor sit amet consectetur. Iaculis vestibulum purus facilisi ultrices sed faucibus proin cum ut.</span>
       </div>
      </div>
    </div>
  </div>
  )
}