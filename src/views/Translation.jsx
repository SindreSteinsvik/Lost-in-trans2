import { useState } from "react"
import TranslateForm from "../components/Translation/TranslateForm"
import TranslationDisplay from "../components/Translation/TranslationDisplay"
import { useUser } from "../context/UserContext"
import withAuth from "../hoc/withAuth"
import {addTranslation} from "../api/translate"
import { storageSave } from "../utils/storage"
import { STORAGE_KEY_USER } from "../const/storageKeys"

const Translation = () => {

    const {user, setUser}= useUser()
    const [text, setText] = useState("")

    const handleTranslateClick = async (translationText) => {
        setText(translationText)

        const [error, updateUser] = await addTranslation(user, translationText)

        if(error !== null) {
            return
        }

        storageSave(STORAGE_KEY_USER, updateUser)
        setUser(updateUser)
    }


    return (
        <>
            <h1 className="font1">Translation</h1>
            <section id="translationText">
                <TranslateForm onTranslate={handleTranslateClick} />
            </section>
            <section>
                <TranslationDisplay translationText={text} />
            </section>
        </>
    )
}

export default withAuth(Translation)