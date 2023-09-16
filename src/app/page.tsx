'use client'
import Books from "@/components/Books";
import Header from "@/components/Header";
import Perfil from "@/components/Parfil";
import Image from 'next/image'

export default function Home() {
  return (
  <div className="bg-[url('../../public/assets/Background.svg')] h-auto max-w-full bg-no-repeat bg-cover">
   
    <div className="">
      <Header />
      <Books /> 
      <Perfil />  
    </div>
  </div>
  )
}
