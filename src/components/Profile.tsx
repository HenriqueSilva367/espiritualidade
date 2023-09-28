'use client'
import img from '../../public/assets/photo-1494790108377-be9c29b29330.avif'
import { User } from "lucide-react";
import Image from "next/image";

export function Profile(){

    return (
        <div className="flex items-center gap-3 text-left ">
          <Image src={img} width={40} height={40} alt="" className="w-10 h-10 rounded-full"/>
          <p className="max-w-[140px] text-sm leading-snug">
            {'Rebeca'}
            <a href="" className="block text-red-400 hover:text-red-300">Quero sair</a>
          </p>
      </div>

    )
}