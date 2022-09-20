import {Link} from "react-router-dom"
import { translationClearHistory } from "../../api/translate"
import { STORAGE_KEY_USER } from "../../const/storageKeys"
// import STORAGE_KEY_USER
import { useUser } from "../../context/UserContext"
import { storageDelete, storageSave } from "../../utils/storage"


const ProfileActions = ({logout}) => {

    const { user, setUser } = useUser()

    const handleLogoutClick = () => {
        if(window.confirm('Are you sure?')){
            storageDelete(STORAGE_KEY_USER)
            setUser(null)
        }
    }

    const handleClearHistoryClick = async () => {
        if(!window.confirm('Are you sure?\nThis cannot be undone!')){
            return
        }

        const [clearError] = await translationClearHistory(user.id)
        
        if(clearError !== null){
            return
        }
        
        const updateUser= {
            ...user,
            translations: [],
        }

        storageSave(STORAGE_KEY_USER, updateUser)
        setUser(updateUser)
    }

    return (
        <ul>
            <li><Link to="/translation">Translation</Link></li>
            <li><button onClick = {handleLogoutClick}>Logout</button></li>
            <li><button onClick={handleClearHistoryClick}>Clear History</button></li>
        </ul>
    )
}

export default ProfileActions