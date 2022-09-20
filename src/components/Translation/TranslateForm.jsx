import { useForm } from "react-hook-form"


const translateConfig = {
    required: true,
    pattern: /^[a-zA-Z\\ ]+$/
}


const TranslateForm = ({onTranslate}) => {

    const { register, handleSubmit, formState: {errors}} = useForm()

    const onSubmit = ({word}) => { onTranslate(word) }

    const errorMessage = (() => {
        if(errors.word?.type === "pattern") {
            return <span> Error: only letters</span>
        }
    })()


return (
    <form onSubmit={ handleSubmit(onSubmit)}>
        <fieldset>
            <label className="font1" htmlFor="theWord">Type your word: </label>
            <input type="text" className="font1" {...register('word', translateConfig)} placeholder="Your word"></input>
            {errorMessage}
        </fieldset>

        <button type="submit" className="button">Translate</button>
    </form>
)

}

export default TranslateForm