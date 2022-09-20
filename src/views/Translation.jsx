
import TranslateForm from "../components/Translation/TranslateForm"
import withAuth from "../hoc/withAuth"

const Translation = () => {
    return (
        <>
            <h1>Translation</h1>
            <section id="translation-text">
                <TranslateForm />
            </section>
        </>
    )
}

export default withAuth(Translation)