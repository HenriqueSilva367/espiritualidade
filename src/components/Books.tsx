'use client'
import Image from 'next/image'
import paginaLivro from '../../public/assets/paginaLivro.jpeg'

export default function Books(){

  interface infoLivros { 
    id: number; 
    name: string; 
    author: string; 
    year: number;
    
  }
  const livros: Array<infoLivros> = [
    { id: 1, name: 'Violetas na janela', author: 'Vera lúcia', year: 1993 },
    { id: 2, name: 'Nosso lar', author: 'Chico Chavier', year: 1993 },
    { id: 3, name: 'A casa do escritor', author: 'Vera lúcia', year: 1993 },
    { id: 4, name: 'Vivendo no mundo dos espiritos', author: 'Vera lúcia', year: 1993 },
    { id: 5, name: 'Violetas de patrícia', author: 'Vera lúcia', year: 1993 },
    { id: 6, name: 'O livro dos espiritos', author: 'Allan Kardec', year: 1993 },

 
  ]

return(
  <div className=''>
    <div className='flex'>
    <h1 className="mb-10 text-4xl text-violet-600 ">Livros</h1>
    </div>
    <div className="flex flex-col items-center justify-center sm md lg xl">
      
      <div className="flex">
          <div className="flex flex-row">
            {livros.map((livro) => {
              return(
                <div key={livro.id} className="flex flex-col border rounded-md bg-white border-slate-50 w-64 h-80 mb-10 mr-3">
                  <div className='flex flex-col items-center justify-center mt-2'>
                    <Image src={paginaLivro} className=' sm md lg xl border rounded-md bg-no-repeat bg-center' alt=""  />
                    <span>{livro.name}</span>
                  </div>
                </div>
              )
            })}
          </div>
      </div>
    </div>
  </div>
  )
}