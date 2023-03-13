import React from 'react'
//
import Nav from './Nav'


const BottomNav = () => {
  return (
    <div className='container md:hidden' >
       <div className='fixed right-0 bottom-0 left-0 bg-[#dbdbdb] p-[13px]' >   
           <Nav bottom /> 
       </div> 
    </div>
  )
}

export default BottomNav