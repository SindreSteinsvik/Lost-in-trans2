import TranslationPage from "../components/Translation/TranslationPage"
import withAuth from "../hoc/withAuth"

const Translation = () => {
    return (
        <>
            <h1>Translation</h1>
            <section id="translation-text">
                <TranslationPage />
            </section>
        </>
    )
}

export default withAuth(Translation)