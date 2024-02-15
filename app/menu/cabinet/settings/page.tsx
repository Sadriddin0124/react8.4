import React from 'react'
import SettingsIcon from '@mui/icons-material/Settings';
import Link from 'next/link';
import { Button } from '@mui/material';
const Settings = () => {
  return (
    <div className='w-[100%] h-[100vh] flex justify-center items-center'>
        <div className='w-[100%] flex gap-[40px] justify-center flex-col items-center'>
        <SettingsIcon className='text-[260px] animate-spin'/>
      <h1 className='text-[30px]'>Settings</h1>
    <Link  href="/menu/cabinet/settings/details">

      <Button variant='contained' className='bg-blue-500'>Go to Details</Button>
    </Link>
        </div>
    </div>
  )
}

export default Settings
