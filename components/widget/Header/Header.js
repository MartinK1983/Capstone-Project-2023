import React from 'react'
//
import Brand from '@components/Brand'
import Nav from './Nav'


const Header = () => {
  return (
    <div id='__header' >
      <div className='container' >
        <div className='flex justify-center md:justify-between items-center py-[16px]' >

          <Brand />

          <div className='hidden md:block' >
            <Nav />
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Header