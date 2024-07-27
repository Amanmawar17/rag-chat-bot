import { signup } from '../action'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'


export default function LoginPage() {
  return (
    <div className='bg-card text-card-foreground p-10 shadow-2xl max-w-md'>
    <form className='grid place-content-center'>
      <label htmlFor="email">Email:</label>
      <Input id="email" placeholder='joe@doe.com' className='bg-input p-2 w-96' name="email" type="email" required />
      <label htmlFor="name" className='mt-3'>Username</label>
      <Input id="name" placeholder='starman' className='bg-input p-2 w-96' name="name" type="name" required />
      <label htmlFor="password" className='mt-3'>Password:</label>
      <Input id="password" placeholder='..........' className='bg-input p-2 w-96' name="password" type="password" required />
      <Button className='bg-primary text-primary-foreground p-2 mt-4 w-40 place-self-center' formAction={signup}>Register</Button>
    </form>
    <div className='text-center'>
      <h3 className='mt-4'>Are you a registered User? <Link href="/login" className='font-semibold text-foreground hover:text-primary ml-2'>Login</Link></h3>
    </div>
  </div>
  )
}