import TranslationForm from "../components/Translation/TranslationForm"
import withAuth from "../hoc/withAuth"

const Translation = () => {
    return (
        <>
            <h1>Translation</h1>
            <section id="translation-text">
                <TranslationForm />
            </section>
        </>
    )
}

export default withAuth(Translation)