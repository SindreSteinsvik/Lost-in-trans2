import { translationClearHistory } from "../../api/translate"
import { STORAGE_KEY_USER } from "../../const/storageKeys"
import { useUser } from "../../context/UserContext"
import { storageDelete, storageSave } from "../../utils/storage"

const ProfileActions = () => {

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

        console.log(user.id)
        const [clearError] = await translationClearHistory(user.id)
        
        if(clearError !== null){
            return
        }
        
        const updateUser = {
            ...user,
            translations: [],
        }

        storageSave(STORAGE_KEY_USER, updateUser)
        setUser(updateUser)
    }

    return (
        <ul>
            <li><button className="button2" onClick = {handleClearHistoryClick}>Clear History</button></li>
            <li><button className="button2" onClick = {handleLogoutClick}>Logout</button></li>
           
        </ul>
    )
}

export default ProfileActions