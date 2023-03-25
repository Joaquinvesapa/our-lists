import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../supabase/client.js'

function Home () {
  const navigate = useNavigate()

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (!session) {
        navigate('/login')
      }
    })
  }, [])
  return (
    <div className='bg-dark-grey min-h-screen'>
      <h1>Home</h1>
      <button onClick={() => supabase.auth.signOut()}>LogOut</button>
    </div>
  )
}

export default Home
