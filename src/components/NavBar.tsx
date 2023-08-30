'use client'
import Image from 'next/image'
import Logo from '../../public/assets/logo.png'
export default function NavBar(){
  return(
    <nav className="">
      <div className='max-w-7x1 mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-around h-16'>
          <div className='flex items-center justify-center'>
            <a href="">
            <Image src={Logo} alt="Logo" className='h-10 w-10 rounded-full'  />
            </a>
            <div className='hidden md:block justify-center '>
              <div className='ml-10 flex items-certer space-x-4'>
                <a href="#" className='cursor-pointer'>Home</a>
                <a href="#" className='cursor-pointer'>Livros</a>
                <a href="#" className='cursor-pointer'>AudioBook</a>
                <a href="#" className='cursor-pointer'>Filmes</a>
                <a href="#" className='cursor-pointer'>Sobre nós</a>
              </div>
            </div>
          </div>
          <div>Menu</div>
        </div>
      </div>
    </nav>    
  )
}