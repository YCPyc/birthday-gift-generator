import React, { createContext, useEffect, useState } from 'react'
import Header from '../Header'
import { Outlet } from 'react-router-dom'
import { Session } from '@supabase/supabase-js'
import { supabase } from '../../lib/supabase-client';
export const SessionContext = createContext({session:null});
function ApplicationShell(props) {
const[session, setSession] = useState(null);
    useEffect(()=>{
        supabase.auth.getSession().then(({data: session})=>{
            setSession(session)
        })
        supabase.auth.onAuthStateChange((event,session)=>{setSession(session)})
    },[])
  return (

    <SessionContext.Provider value = {{session}}>
    <Header/>
    <div>{props.children}</div>
    </SessionContext.Provider>

  )
}

export default ApplicationShell