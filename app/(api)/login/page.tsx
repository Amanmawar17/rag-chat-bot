import { login } from '../action'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'

export default function LoginPage() {
  return (
    <div className='bg-card text-card-foreground p-10 shadow-2xl max-w-md'>
      <div className='grid place-content-start mb-3'>
        <h3>If you are the recuitor then use below credentials.</h3>
        <li>email: test1234@gmail.com</li>
        <li>username: test1234</li>
        <li>email: 123456</li>
      </div>
      <form className='grid place-content-center'>
        <label htmlFor="email">Email:</label>
        <Input id="email" placeholder='joe@doe.com' autoComplete='test1234@gmail.com' className='bg-input p-2 w-96' name="email" type="email" required />
        <label htmlFor="name" className='mt-3'>Username</label>
        <Input id="name" placeholder='starman' autoComplete='test1234' className='bg-input p-2 w-96' name="name" type="name" required />
        <label htmlFor="password" className='mt-3'>Password:</label>
        <Input id="password" placeholder='..........' autoComplete='123456' className='bg-input p-2 w-96' name="password" type="password" required />
        <Button className='bg-primary text-primary-foreground p-2 mt-4 w-40 place-self-center' formAction={login}>Log in</Button>
      </form>
      <div className='text-center'>
        <h3 className='mt-4'>Are you a New User? <Link href="/signup" className='font-semibold text-foreground hover:text-primary ml-2'>Sign Up</Link></h3>
      </div>
    </div>
  )
}