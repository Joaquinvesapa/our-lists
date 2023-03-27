import React, { useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import { Register } from './pages/Register'
import { AnimatePresence } from 'framer-motion'

function App() {
	return (
		<div className='bg-dark-grey min-h-screen'>
			<AnimatePresence>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />
				</Routes>
			</AnimatePresence>
		</div>
	)
}

export default App
