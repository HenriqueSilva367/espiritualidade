'use client'
import { Search } from 'lucide-react'
import Image from 'next/image'
import Logo from '../../public/assets/logo.png'
export default function NavBar(){
  return(
    <nav className="">
      <div className='max-w-7x1 mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-around h-24 mt-3'>
          <div className='flex items-center justify-center'>
            <a href="">
              <Image src={Logo} alt="Logo" className='h-10 w-10 rounded-full'  />
            </a>
            <div className='flex items-center bg-gray-100 ml-5 p-1 w-72 rounded-md'>
            <Search color="#6F4FF2" />
              <input type="text" placeholder='Buscar' className='font-norma focus:outline-none bg-gray-100 p-2 w-60'/>
            </div>
          </div>
          <div className='hidden md:block justify-center '>
              <div className='ml-10 flex items-certer space-x-4'>
                <a href="#" className='cursor-pointer hover:text-purple-400'>Home</a>
                <a href="#" className='cursor-pointer hover:text-purple-400'>Livros</a>
                <a href="#" className='cursor-pointer hover:text-purple-400'>AudioBook</a>
                <a href="#" className='cursor-pointer hover:text-purple-400'>Filmes</a>
                <a href="#" className='cursor-pointer hover:text-purple-400'>Sobre nós</a>
              </div>
            </div>
          <div className=' md:hidden lg:hidden'>Menu</div>
        </div>
      </div>
    </nav>    
  )
}