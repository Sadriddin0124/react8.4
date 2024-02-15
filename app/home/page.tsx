import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div className='w-[100%] flex flex-col items-center'>
      <h1 className='text-[90px] text-center'>Home</h1>
      <Link href="/home/login" className=" no-underline text-center px-[15px] py-[8px] bg-purple-600 text-white rounded-md">Go to log in</Link>
    </div>
  )
}

export default Home
