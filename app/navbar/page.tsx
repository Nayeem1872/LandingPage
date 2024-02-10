import React from 'react'
import ActionButton from './action-button'
import Logo from './logo'
import Navigation from './navigation-bar'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center h-20 px-10 border-b'>
        <Logo/>
        <Navigation/>
        <ActionButton/>

    </div>
  )
}

export default Navbar