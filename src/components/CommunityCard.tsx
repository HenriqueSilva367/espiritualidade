'use client'
import Image from 'next/image'
import img from '../../public/assets/photo-1494790108377-be9c29b29330.avif'

export default function CommunityCard(){

return (
  <div>
    <div className='mx-auto flex shadow-2xl shadow-violet-200 h-60 my-10 max-w-2xl sm:px-6 lg:max-w-7xl lg:px-8 bg-white rounded-md'>
      <div className='flex items-center'>
        <Image src={img} alt='' width={180} className='rounded-md'/>
       <div className='ml-10'>
       <h1 className='text-3xl font-bold text-purple-400'>Junte-se a nossa comunidade</h1>
        <span>Lorem ipsum dolor sit amet consectetur. Iaculis vestibulum purus facilisi ultrices sed faucibus proin cum ut.Lorem ipsum dolor sit amet consectetur. Iaculis vestibulum purus facilisi ultrices sed faucibus proin cum ut.</span>
       </div>
      </div>
    </div>
  </div>
  )
}