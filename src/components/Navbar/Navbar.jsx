import Container from 'react-bootstrap/Container';

import { NavLink } from "react-router-dom"
import { useUser } from "../../context/UserContext"

const Navbar = () => {

    const { user } = useUser()

    return (
        <div className='heading'>
            <Container>
                <ul>
                <img
                  alt=""
                  src="/pictures/Logo.png"
                  width="100"
                  height="100"
                />
                </ul>
            <ul>
                <h1 className='heading'>Lost in Translation</h1>
            </ul>

            { user !== null &&
                <ul>
                    <li>
                    <NavLink to='/translation' className="navbar">Translation</NavLink>
                    </li>
                    <li>
                    <NavLink to='/profile' className="navbar">Profile</NavLink>
                    </li>
                </ul>
            }
            </Container>
            </div>
    )
}

export default Navbar