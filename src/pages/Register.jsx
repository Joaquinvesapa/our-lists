import clsx from 'clsx'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom/dist'
import { ShowPassword, LoginButton } from '../components/buttons/Buttons'
import { AnimatePresence, motion } from 'framer-motion'
import { supabase } from '../supabase/client.js'

export const Register = () => {
	const [showPsw, setShowPsw] = useState(true)
	const [psw, setPsw] = useState('')
	const [pswr, setPswR] = useState('')
	const [usrName, setUsrName] = useState()
	const [email, setEmail] = useState()
	const [pswError, setPswError] = useState(false)
	const [error, setError] = useState('')

	const navigate = useNavigate()

	const onHandleSubmit = async () => {
		if (psw.length < 6 || psw.length > 8) {
			setPswError(true)
			setError('Password must be between 6 and 8 characters')
		} else if (pswr !== psw) {
			setPswError(true)
			setError('Both passwords must match')
		} else {
			try {
				const { data, error } = await supabase.auth.signUp({
					email,
					password: psw,
					options: {
						data: {
							username: usrName,
						},
					},
				})
				const { user } = await supabase.auth.getSession()
				console.log(user)
				// if (data.user.aud !== null) {
				// 	setPswError(true)
				// 	setError('The user is already exist. Please Login')
				// 	return
				// } else if (data !== null) {
				// 	navigate('/verify-email')
				// }
			} catch (error) {
				console.log(error)
			}
		}
	}

	useEffect(() => {
		const { data, error } = supabase.from('paises').select()
		console.log(data)

		supabase.auth.onAuthStateChange((event, session) => {
			if (!session) {
				navigate('/register')
			} else {
				navigate('/')
			}
		})
	}, [])

	return (
		<div className='bg-dark-grey min-h-screen'>
			<div className='grid place-content-center ali pt-44 gap-10'>
				<h1 className='text-white font-bold text-7xl text-center drop-shadow-2xl'>
					OurList
				</h1>
				<div
					className={clsx(
						'w-96 h-auto pt-8',
						'bg-md-grey rounded-3xl',
						'flex flex-col items-center',
						'drop-shadow-2xl'
					)}
				>
					<p className='text-white font-bold text-2xl'>Register</p>
					<form
						className={clsx('flex flex-col items-center w-64')}
						onSubmit={(e) => onHandleSubmit}
					>
						<div className='flex mt-10 bg-md2-grey rounded-full w-full py-1 px-2'>
							<input
								placeholder='Username'
								onChange={(e) => setUsrName(e.target.value)}
								type='email'
								className={clsx(
									'bg-md2-grey pl-1',
									'text-white',
									'placeholder:font-bold',
									'placeholder:text-gray-50',
									'outline-none'
								)}
							/>
						</div>
						<div className='flex mt-6 bg-md2-grey rounded-full w-full py-1 px-2'>
							<input
								placeholder='Email'
								onChange={(e) => setEmail(e.target.value)}
								type='email'
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
								id='psw'
								placeholder='Password'
								onChange={(e) => setPsw(e.target.value)}
								type={showPsw ? 'password' : 'text'}
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
								placeholder='Repeat Password'
								onChange={(e) => setPswR(e.target.value)}
								type={showPsw ? 'password' : 'text'}
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
						<div className='h-auto flex text-center mt-2'>
							<AnimatePresence>
								{pswError ? (
									<motion.p
										initial={{ y: 40, opacity: 0 }}
										animate={{ y: 0, opacity: 1 }}
										exit={{ y: 40, opacity: 0 }}
										onAnimationComplete={() => {
											setTimeout(() => setPswError(false), 5000)
										}}
										className={clsx(' text-red-500 font-bold')}
									>
										{error}
									</motion.p>
								) : null}
							</AnimatePresence>
						</div>
						<LoginButton title='Register' onHandleSubmit={onHandleSubmit} />
					</form>
					<div className={clsx('flex space-x-1 mt-7')}>
						<p className={clsx('text-white mb-10')}>Do you have account?</p>
						<Link to='/login' className={clsx('text-green font-bold')}>
							Login
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
