import { EyeSlashIcon, EyeIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx'
import { motion } from 'framer-motion'

export const ShowPassword = (props) => {
	const { showPsw, setShowPsw } = props

	return (
		<div className='flex flex-row'>
			<motion.button
				animate={{ opacity: showPsw ? 0 : 1 }}
				onClick={(e) => {
					e.preventDefault(), setShowPsw(true)
				}}
			>
				<EyeIcon
					className={clsx(
						'w-5 h-auto text-md-grey',
						'transition-all duration-1000',
						showPsw ? 'hidden' : ''
					)}
				/>
			</motion.button>

			<motion.button
				animate={{ opacity: showPsw ? 1 : 0 }}
				onClick={(e) => {
					e.preventDefault(), setShowPsw(false)
				}}
			>
				<EyeSlashIcon
					className={clsx(
						'w-5 h-auto text-md-grey',
						'transition-all duration-1000',
						showPsw ? '' : 'hidden'
					)}
				/>
			</motion.button>
		</div>
	)
}

export const LoginButton = (props) => {
	const { onHandleSubmit, title } = props

	return (
		<div className='w-full'>
			<button
				onClick={(e) => {
					e.preventDefault(), onHandleSubmit()
				}}
				className={clsx(
					'bg-green rounded-full py-1 mt-3 w-full px-2',
					'text-white font-bold',
					'drop-shadow-xl'
				)}
			>
				{title}
			</button>
		</div>
	)
}

export const LoginGoogle = (props) => {
	const { signInWithGoogle } = props

	return (
		<div className='w-full'>
			<button
				onClick={signInWithGoogle}
				className={clsx(
					'bg-white rounded-full py-1 mt-5 w-full px-2',
					'flex justify-center space-x-3',
					'text-black font-bold',
					'drop-shadow-xl text-center'
				)}
			>
				<img className={clsx('w-6')} src='google.png' alt='googleIcon' />
			</button>
		</div>
	)
}
