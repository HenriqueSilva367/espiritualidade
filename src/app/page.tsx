'use client'
import Header from "@/components/Header";
import Image from 'next/image'
import Logo from '../assets/arvore-da-vida.png'
export default function Home() {
  return (
  <div className='flex w-full h-full'>
    <div className="flex flex-col justify-center">
      <Header/>    
    </div>
  </div>
  )
}
