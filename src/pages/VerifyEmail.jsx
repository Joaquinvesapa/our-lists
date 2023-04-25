import clsx from 'clsx'
import { Link } from 'react-router-dom'

export const VerifyEmail = () => {
	return (
		<div className={clsx('flex flex-col h-screen justify-center items-center')}>
			<p
				className={clsx(
					'text-white font-bold text-xl text-center mx-10 md:px-0 md:text-3xl'
				)}
			>
				Enviamos un correo de verificacion a el email que ingreso en el
				Registro!
			</p>
			<p
				className={clsx(
					'text-white font-bold text-md text-center mx-10 md:px-0 md:text-2xl mt-4'
				)}
			>
				Confirme la verificacion para{' '}
				<Link className='text-green' to='/login'>
					Ingresar
				</Link>
			</p>
		</div>
	)
}
