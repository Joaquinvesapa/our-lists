import React, {useEffect, useState} from 'react'
import { Navigate } from 'react-router-dom/dist'
import {useNavigate} from 'react-router-dom'
import {supabase} from '../supabase/client.js'


const Login = () => {
    const [logged, setLogged] = useState(false);
    const [email, setEmail] = useState();
    const [psw, setPsw] = useState();

    const navigate = useNavigate();
  
    
    const onHandleSubmit = async (e) => {
      e.preventDefault()
      await supabase.auth.signInWithPassword({
        email: email,
        password: psw
      })
    }

    useEffect(() => {
      supabase.auth.onAuthStateChange((event, session) => {
        if(!session){
          navigate("/login")
        }else{
          navigate("/home")
        }
      })
    },[])
  
    return (
      <div className="bg-dark-grey min-h-screen">
        <form onSubmit={onHandleSubmit}>
        <label>
            Email:
            <input type="text" onChange={e => setEmail(e.target.value)} />
          </label>
          <label>
            PSW:
            <input type="text" onChange={e => setPsw(e.target.value)} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        
        {/* {logged && (<Navigate to="/home"/>)} */}
      </div>
    )
}

export default Login