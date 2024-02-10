import { Button } from '@/components/ui/button'
import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import { AlignJustify } from 'lucide-react'
import Link from 'next/link'

const ActionButton = () => {
  return (
    <div>
        {/* <Button>Button</Button> */}
        <div className='md:hidden'> 
        <Sheet>
  <SheetTrigger>< AlignJustify/></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Menu</SheetTitle>
      <SheetDescription>
<div className='flex flex-col space-y-4 items-start w-full text-lg text-black mt-10'>
    <Link href="/">Sign In</Link>
    <Link href="/">Sign In</Link>

    <Link href="/">Sign In</Link>
    <Link href="/">Sign In</Link>
    <Link href="/">Sign In</Link>
    <Link href="/">Sign In</Link>
</div>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
        </div>
        <div className='hidden md:flex md:space-x-4'>
         <Button variant="ghost">Sign In</Button>
         <Button className='bg-blue-500'>Get started</Button>
        </div>

    </div>
  )
}

export default ActionButton