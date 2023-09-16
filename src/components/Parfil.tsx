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
  <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
      <h2 className='mb-10 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>Leitores do mês</h2>
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-1">
      {perfils.map((perfil) =>{
        return (
            <div key={perfil.id} className='border border-gray-200 w-48 h-40 rounded-3xl ml-4 '>
              <Image src={img} alt='' className='mx-auto mt-4 rounded-full border-2 border-green-300 w-14'/>
              <span className='flex items-center justify-center'>{perfil.name}</span>
              <span className='flex items-center justify-center'>@Rebeca</span>
              <span className='flex items-center justify-center'>54 Livros</span>
            </div>
        )
      })}
    </div>
  </div>
  )
}