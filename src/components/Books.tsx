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
  ]

return(
  <div className="">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-purple-400">Livros</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8">
          {livros.map((livro) => (
            <div key={livro.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <Image
                  src={paginaLivro}
                  alt=''
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href=''>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {livro.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{livro.author}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{livro.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}