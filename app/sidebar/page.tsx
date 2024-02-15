import Link from 'next/link'
import React from 'react'

const SideBar = () => {
  return (
    <div className=' top-0 w-[100%] bg-white shadow-md fixed z-30 flex py-[20px] items-center justify-evenly'>
      <h1 className='text-[30px] font-[600]'>Product</h1>
      <div className='flex gap-[20px]'>
      <Link className='text-[16px]' href="/menu/product">Product</Link>
      <Link className='text-[16px]' href="/menu/cabinet">Cabinet</Link>
      </div>
    </div>
  )
}

export default SideBar
