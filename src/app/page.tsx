'use client'
import AudioBooks from "@/components/AudioBooks";
import Books from "@/components/Books";
import CommunityCard from "@/components/CommunityCard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProfileAvatar from "@/components/ProfileAvatar";
import Image from 'next/image'

export default function Home() {
  return (
  <div className="bg-[url('../../public/assets/Background.svg')] h-auto max-w-full bg-no-repeat bg-cover">
   
    <div className="flex flex-col">
      <Header />
      <Books /> 
      <ProfileAvatar />
      <AudioBooks />  
      <CommunityCard/>
      <Footer/>
    </div>
  </div>
  )
}
