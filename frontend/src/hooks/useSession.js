import React, { useContext } from 'react'
import { SessionContext } from '../components/Layout/ApplicationShell'

function useSession() {
    const {session} = useContext(SessionContext);
    const isAuthenticated = session?.user != null;
    console.log(session)
  return ({session, isAuthenticated}
  )
}

export default useSession