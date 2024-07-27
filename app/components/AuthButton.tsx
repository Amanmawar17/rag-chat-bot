import { Button } from '@/components/ui/button'
import React from 'react'
import { IoLogOutOutline } from 'react-icons/io5'
import Logout from './Logout'

export default function AuthButton() {
  return (
    <form action={Logout}><Button type='submit'>Logout<IoLogOutOutline className='ml-2' /></Button></form>
  )
}
