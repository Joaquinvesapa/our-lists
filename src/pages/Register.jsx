import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom/dist'
import {
	ShowPassword,
	LoginGoogle,
	LoginButton,
} from '../components/buttons/Buttons'

import { supabase } from '../supabase/client.js'

export const Register = () => {
	return (
		<div className='bg-dark-grey min-h-screen'>
			<div className='grid place-content-center ali pt-44 gap-10'>
				<h1 className='text-white font-bold text-7xl text-center drop-shadow-2xl'>
					OurList
				</h1>
				<div
					className={clsx(
						'w-96 h-96 pt-8',
						'bg-md-grey rounded-3xl',
						'flex flex-col items-center',
						'drop-shadow-2xl'
					)}
				>
					<p className='text-white font-bold text-2xl'>Welcome</p>
					<form
						onSubmit={(e) => onHandleSubmit}
						className={clsx('flex flex-col items-center')}
					>
						<div className='flex mt-10 bg-md2-grey rounded-full w-full py-1 px-2'>
							<input
								placeholder='Email'
								type='email'
								onChange={(e) => setEmail(e.target.value)}
								className={clsx(
									'bg-md2-grey pl-1',
									'text-white',
									'placeholder:font-bold',
									'placeholder:text-gray-50',
									'outline-none'
								)}
							/>
						</div>
						<div className='flex mt-6 bg-md2-grey w-full rounded-full py-1 px-2'>
							<input
								placeholder='Password'
								type={showPsw ? 'password' : 'text'}
								onChange={(e) => setPsw(e.target.value)}
								className={clsx(
									'bg-md2-grey pl-1',
									'text-white',
									'placeholder:font-bold',
									'placeholder:text-gray-50',
									'outline-none'
								)}
							/>
							<ShowPassword showPsw={showPsw} setShowPsw={setShowPsw} />
						</div>
						<LoginButton onHandleSubmit={onHandleSubmit} />
						<LoginGoogle signInWithGoogle={signInWithGoogle} />
					</form>
					<div className={clsx('flex space-x-1 mt-7')}>
						<p className={clsx('text-white')}>Do you have account?</p>
						<Link to='/register' className={clsx('text-green font-bold')}>
							Register
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
