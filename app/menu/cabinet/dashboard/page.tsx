import { Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const Dashboard = () => {
  return (
    <div className='w-[100%] h-[100vh] flex justify-center flex-col items-center'>
        <h1 className='text-[40px]'>Dashboard</h1>
      <Link href="/menu/cabinet/dashboard/balance">
        <Button variant="contained" className="bg-blue-400">Go to Balance</Button>
      </Link>
    </div>
  )
}

export default Dashboard
