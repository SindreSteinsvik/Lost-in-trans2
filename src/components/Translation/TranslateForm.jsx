import { useForm } from "react-hook-form"


const translateConfig = {
    required: true,
    regex: /^[a-zA-Z]+$/,
    fix: (text) => text.trim()
}


const TranslateForm = ({onTranslate}) => {

    const { register, handleSubmit, formState: {errors}} = useForm()

    const onSubmit = ({word}) => { onTranslate(word) }

    const errorMessage = (() => {
        if(errors.word?.type === "regex") {
            return <span> Error: only letters</span>
        }
    })()


return (
    <form onSubmit={ handleSubmit(onSubmit)}>
        <fieldset>
            <label htmlFor="theWord">Type your word: </label>
            <input type="text" {...register('word', translateConfig)} placeholder="Your word"></input>
            {errorMessage}
        </fieldset>

        <button type="submit">Translate</button>
    </form>
)

}

export default TranslateForm