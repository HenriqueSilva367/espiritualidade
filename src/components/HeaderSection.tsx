'use client'
import Image from 'next/image'
import Hero from '../../public/assets/hero.svg'
export default function HeaderSerction(){
return(
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <Image src={Hero} className='h-full w-full object-cover object-center lg:h-full lg:w-full' alt="" />
    </div>
  )
}