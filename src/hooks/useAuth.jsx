
import { useContext } from 'react'
import { UserContext } from '../shared/contextProvider/Authcontext'

const useAuth = () => {
    const { user, logOut } = useContext(UserContext)
    return { user, logOut }
}

export default useAuth