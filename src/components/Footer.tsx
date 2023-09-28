'use cliient'
import Image from 'next/image'
import logo from '../../public/assets/logo.png'

export default function Footer(){

return (
  <div>
    <div className=' flex mx-auto w-full h-60 bg-black-150 '>
      <div className='flex'>
       <div className='flex flex-col '>
       <Image src={logo} alt='' width={50} className='my-5 md:mx-4 rounded-md'/>
        <span className="text-white">Lorem ipsum dolor sit amet consectetur. Iaculis vestibulum purus facilisi ultrices sed faucibus proin cum ut.Lorem ipsum dolor sit amet consectetur. Iaculis vestibulum purus facilisi ultrices sed faucibus proin cum ut.</span>
       </div>
      </div>
    </div>
  </div>
  )
}