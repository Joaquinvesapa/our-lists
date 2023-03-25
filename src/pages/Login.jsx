import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import {useNavigate } from 'react-router-dom/dist'
import {ShowPassword} from '../components/buttons/ShowPassword'

import { supabase } from '../supabase/client.js'

const Login = () => {
  const [email, setEmail] = useState()
  const [psw, setPsw] = useState()
  const [showPsw, setShowPsw] = useState(true)

  const navigate = useNavigate()

	const anashe = () => {
	}
		
  const signInWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google'
    })
  }
  const onHandleSubmit = async (e) => {
    e.preventDefault()
    await supabase.auth.signInWithPassword({
      email,
      password: psw
    })
  }

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (!session) {
        navigate('/login')
      } else {
        navigate('/')
      }
    })
  }, [])
  console.log(showPsw)

  return (
    <div className='bg-dark-grey min-h-screen'>
			<div className='grid place-content-center ali pt-44 gap-10'>
				<h1 className='text-white font-bold text-7xl text-center'>OurList</h1>
				<div className={clsx('w-96 h-96 pt-8',
															'bg-md-grey rounded-3xl',
															'flex flex-col items-center')}>
					<p className='text-white font-bold text-2xl'>Welcome</p>
          <div className='flex mt-3 bg-md2-grey rounded-full py-1 px-2'>
            <input placeholder='Password' 
                  type={showPsw ? 'password' : 'text'} 
                  onChange={e => setPsw(e.target.value)} 
                  className={clsx('bg-md2-grey pl-1',
                  'text-white',
                  'placeholder:font-bold',
                  'placeholder:text-gray-50',
                  'outline-none')}/>
            <ShowPassword showPsw={showPsw} setShowPsw={setShowPsw}/>
          </div>
				</div>
			</div>
      {/* <form onSubmit={onHandleSubmit}>
        <label>
          Email:
          <input type='text' onChange={e => setEmail(e.target.value)} />
        </label>
        <input type='submit' value='Submit' />
      </form>
      <button onClick={() => signInWithGoogle()}>GOOOOOOGLE</button> */}
    </div>
  )
}
export default Login
