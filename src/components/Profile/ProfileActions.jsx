import {Link} from "react-router-dom"
import { STORAGE_KEY_USER } from "../../const/storageKeys"
// import STORAGE_KEY_USER
import { useUser } from "../../context/UserContext"
import { storageDelete } from "../../utils/storage"


const ProfileActions = ({logout}) => {

    const { setUser } = useUser()

    const handleLogoutClick = () => {
        if(window.confirm('Are you sure?')){
            storageDelete(STORAGE_KEY_USER)
            setUser(null)
        }
    }

    return (
        <ul>
            <li><Link to="/translation">Translation</Link></li>
            <li><button onClick = {handleLogoutClick}>Logout</button></li>
        </ul>
    )
}

export default ProfileActions