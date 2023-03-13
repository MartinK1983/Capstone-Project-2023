import Image from 'next/image'
import React from 'react'
//
import { logo } from '@config/constants'


const Brand = () => {
  return (
    <div className='h-[22px] md:h-[40px] w-[100px] md:w-[140px]' >
      <Image src={logo} width={1} height={.220} layout='responsive' objectFit='contain' />  
    </div>
  )
}

export default Brand