import { addTranslation } from "../../api/translate"

const translateConfig = {
    required: true,
    minLength: 1,

}

const TranslationPage = ({name, image}) => {


        //event Handler
        const onSubmit = async ({translate}) => {
            setLoading(true)
            const[error, userResponse] = await addTranslation(translate)
            if(error !== null){
             setApiError(error)
            }
            if (userResponse !== null){
             storageSave(STORAGE_KEY_USER, userResponse)
             setUser(userResponse)
            }
            setLoading(false);
         }
     
         //render functions
         const errorMessage = (() => {
             if(!errors.translate){
                 return null;
             }
         })()


    return (
    <>
    <h2>What`s your name?</h2>
    <form onSubmit={handleSubmit(onSubmit) }>
        <fieldset>
            <label htmlFor="translate">Translate: </label>
            <input
                type="text" 
                {...register("translate", translateConfig)} 
             />
             { errorMessage}
        </fieldset>

        <button type="submit" disabled={ loading }>Continue</button>

        { loading && <p>Logging in... </p>}
        { apiError && <p>{apiError }</p>}
    </form>
</>
}

export default TranslationPage