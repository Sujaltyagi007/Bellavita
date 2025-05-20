import React from 'react'
import Home from '@/Pages/Home'
import { redirect } from 'next/navigation'

export default function page() {
  redirect("/home")
  return (
    <div className=' w-full h-full'>
     <Home />
    </div>
  )
}
