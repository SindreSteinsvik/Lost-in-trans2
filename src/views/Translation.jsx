import { useState } from "react"
import TranslateForm from "../components/Translation/TranslateForm"
import TranslationDisplay from "../components/Translation/TranslationDisplay"
import { useUser } from "../context/UserContext"
import withAuth from "../hoc/withAuth"

const Translation = () => {

    //const [user, setUser] = useUser()
    const [text, setText] = useState("")

    const handleTranslateClick = async (translationText) => {
        setText(translationText)

    }

    return (
        <>
            <h1>Translation</h1>
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