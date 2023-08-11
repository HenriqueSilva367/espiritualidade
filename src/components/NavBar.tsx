
export default function NavBar(){
  return(
    <div className="flex w-screen justify-around">
      <div className="flex flex-1 justify-end md:justify-center">
        <div className="pointer-events-auto md:hidden">
          <div className="flex">
          <button className="flex rounded-full px-4 py-2 bg-gray-400 mt-5 mr-10">
            Menu
          </button>
          </div>
        </div>
        <div className="pointer-events-auto hidden md:block mt-5">
          <nav className="flex items-center justify-center rounded-md w-25">
            <ul className="flex items-center  rounded-full py-2 ">
              <li className="cursor-pointer"><a className="relative block px-3 py-2" href="">Home</a></li>
              <li className="cursor-pointer"><a className="relative block px-3 py-2" href="">Livros</a></li>
              <li className="cursor-pointer"><a className="relative block px-3 py-2" href="">ÁudioBooks</a></li>
              <li className="cursor-pointer"><a className="relative block px-3 py-2" href="">Autores</a></li>
              <li className="cursor-pointer"><a className="relative block px-3 py-2" href="">Sobre nós</a></li>
              
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}