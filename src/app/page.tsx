'use client'
import Books from "@/components/Books";
import Header from "@/components/Header";
import Image from 'next/image'

export default function Home() {
  return (
  <div className="bg-[url('../../public/assets/Background.svg')] bg-fixed sm:bg-local md:bg-scroll lg:bg-local xl:bg-fixed">
   
    <div className="">
      <Header />
      <Books />    
    </div>
  </div>
  )
}
