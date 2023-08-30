'use client'
import Image from 'next/image'
import Hero from '../../public/assets/hero.svg'
export default function HeaderSerction(){
return(
    <div className="flex items-center justify-center mt-20 px-10 ">
      <Image src={Hero} className='' alt="" />
    </div>
  )
}