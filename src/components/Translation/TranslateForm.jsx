import { useForm } from "react-hook-form"

/*
const translateConfig = {
    required: true,
    minLength: 1,
    regex: /^[a-zA-Z]+$/,
    fix: (text) => text.toLowerCase().trim()
}
*/


const TranslateForm = ({onTranslate}) => {

    const { register, handleSubmit} = useForm()

    const onSubmit = ({word}) => { onTranslate(word) }

return (
    <form onSubmit={ handleSubmit(onSubmit)}>
        <fieldset>
            <label htmlFor="word">Translation: </label>
            <input type="text" {...register('word')} placeholder="Type your word"></input>
        </fieldset>

        <button type="submit">Translate</button>
    </form>
)

}

export default TranslateForm