import React from 'react'
import Image from 'next/image'
//
import Button from '@components/Button'


const Home = () => {
  return (
    <div id='__home' >
      <div className='container' >
         
         <div className='mt-[12px] md:mt-[25px] relative' >
            <div className='flex flex-col w-[150px] gap-3 absolute z-20 top-[30px] left-[50%] translate-x-[-50%]' >
               <Button> Best Places </Button>
               <Button> Favoriten </Button>
            </div>
            
            <div className={`h-[calc(100vh-145px)] md:h-[600px] w-full relative rounded-[15px] overflow-hidden mb-4`} >
               <Image src='/images/bg/hero-bg.png' layout='fill' objectFit='cover'  />
            </div>
         </div>
         
      </div>
    </div>
  )
}

export default Home