'use client'
import Image from 'next/image'
import img from '../../public/assets/photo-1494790108377-be9c29b29330.avif'

export default function Perfil(){

  interface infoLivros { 
    id: number; 
    name: string; 
    year: number;
       
  }
  const perfils: Array<infoLivros> = [
    { id: 1, name: 'Joao Silva', year: 1993  },
    { id: 2, name: 'Carlos Cesar',  year: 1993  },
    { id: 3, name: 'Henrique Silva',  year: 1993  },
    { id: 4, name: 'Rebeca Vieira',  year: 1993 },
    { id: 5, name: 'Pedro Vieira',  year: 1993 }, 
  ]

return (
  <div>
    <div className='mx-auto my-10 max-w-2xl sm:px-6 lg:max-w-7xl lg:px-8'>
      <h2 className='text-3xl ml-4 font-bold tracking-tight sm:text-4xl text-black'>Leitores do mês</h2>
      <div className="mt-6 grid grid-cols-2 gap-y-5 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 xl:gap-x-1">
        {perfils.map((perfil) =>{
          return (
            <div key={perfil.id} className='border border-gray-200 w-44 h-40 rounded-3xl ml-1'>
                <Image src={img} alt='' className='mx-auto mt-4 rounded-full border-2 border-green-300 w-14'/>
                <span className='flex items-center justify-center'>{perfil.name}</span>
                <span className='flex items-center justify-center'>@Rebeca</span>
                <span className='flex items-center justify-center text-purple-300'>54 Livros</span>
              </div>
          )
        })}
      </div>
    </div>
  </div>
  )
}