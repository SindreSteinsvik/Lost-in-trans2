const TranslationDisplay = ({character}) => {
    return(
        <>
        <section>
            <img src = {`../pictures/individual_signs${character}.png`} alt={character}> </img>
        </section>
        </>
    )
}

export default TranslationDisplay