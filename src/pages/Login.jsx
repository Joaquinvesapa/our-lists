import React, {useEffect, useState} from 'react'
import { createClient } from '@supabase/supabase-js'
import { Navigate } from 'react-router-dom/dist'


const Login = () => {
    const [logged, setLogged] = useState(false);
    const [email, setEmail] = useState('');
    const [psw, setPsw] = useState('');
    const [user, setUser] = useState();
  
     const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY, {auth:{persistSession: true, localStorage: true}} )
     const login = async (event) => {
      event.preventDefault()
  
      const {data, error} = await supabase.auth.signInWithPassword({
        email: email,
        password: psw,
      });
    //  console.log(data.session)
  
      data.user != null ? setLogged(true) : logged
    }

    supabase.auth.signOut()

    supabase.auth.onAuthStateChange((event, session) => {
        session != null ? setLogged(true) : logged;
      })

    
    const handleChangeEmail = (event) => {
        setEmail(event.target.value)
    }
    const handleChangePsw = (event) => {
        setPsw(event.target.value)
    }
    // supabase.auth.signOut();
    
  
    return (
      <div className="bg-dark-grey min-h-screen">
        <form onSubmit={login}>
        <label>
            Email:
            <input type="text" onChange={handleChangeEmail} />
          </label>
          <label>
            PSW:
            <input type="text" onChange={handleChangePsw} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        {logged && (<Navigate to="/home"/>)}
      </div>
    )
}

export default Login