import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import { useVotersContext } from '../hooks/useVotersContext'

const Navbar = () => {

    const { logout }= useLogout()
    const { admin } = useAuthContext() 
    const { voters } = useVotersContext()

    const handleClick = ()=>{
        logout()
    }

    const handleClick2 =()=>{
        voters()

    }
return (
    <header>
    <div className="container">
        <Link to="/">
            <h1>Candidates</h1>
        </Link>
        <nav>
            {admin && ( <div>
                <span>{admin.email}</span>
                <button onClick= {handleClick}>Log out</button>
            </div>
            )}
            {!admin && (<div>
                <Link to="/login">Login</Link>
            </div>
            )}
            {admin && (<div>
                <button onClick= {handleClick2}>Voters</button>
            </div>)}
        </nav>
    </div>
    </header>
)
}

export default Navbar