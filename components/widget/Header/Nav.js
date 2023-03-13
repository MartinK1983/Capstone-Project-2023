import React from 'react'
//
import { icons } from '@libs/Icons'
import { cx } from '@config/constants'


const Nav = ({ bottom }) => {
  return (
    <div className={cx('gap-3 flex', bottom && "justify-between text-[14px]")} >

        <div className='flex items-center justify-center cursor-pointer gap-2 bg-primary hover:bg-primary/80 transition-all text-white px-[12px] py-[5px] rounded-[4px] font-[500] uppercase' >
            <span>{icons.plus}</span>
            <span> Hinzufügen </span>
        </div>

        <div className={
            cx(
                'flex items-center justify-center cursor-pointer gap-2 bg-[#dedede] hover:!bg-[#2d2d2d] hover:!text-white transition-all duration-300 text-black px-[12px] py-[5px] rounded-[4px] font-[500] uppercase',
                bottom && "!bg-white"
            )
        } >
            <span>{icons.bookmark}</span>
            <span> Bookmark </span>
        </div>

    </div>
  )
}

export default Nav