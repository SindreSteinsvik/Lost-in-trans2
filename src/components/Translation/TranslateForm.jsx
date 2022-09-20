import { useForm } from "react-hook-form"

const TranslateForm = () => {
    const { register, handleSubmit} = useForm()

    const onSubmit = data => {
        console.log(data)
    }


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