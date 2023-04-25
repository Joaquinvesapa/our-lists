import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../supabase/client.js'

function Home() {
	const navigate = useNavigate()

	useEffect(() => {
		const { data, error } = supabase.from('auth.user').select()
		console.log(data, error)

		supabase.auth.onAuthStateChange((event, session) => {
			if (!session) {
				navigate('/login')
			}
		})
	}, [])
	return (
		<div className='bg-dark-grey min-h-screen flex flex-col space-y-4 justify-center items-center'>
			<h1 className='text-white font-bold text-6xl'>Home</h1>
			<button
				className='font-bold text-2xl'
				onClick={() => supabase.auth.signOut()}
			>
				LogOut
			</button>

			<button onClick={() => console.log(supabase.from('users').select())}>
				Ver users
			</button>
		</div>
	)
}

export default Home
