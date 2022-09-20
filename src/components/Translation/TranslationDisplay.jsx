const TranslationDisplay = ({translationText}) => {

    const letterArray = translationText.split("")

    return (
        <>
            {letterArray.map((character) =>(
              <img src = {`../pictures/individual_signs${character}.png`}
              alt={character}/>
            ))}
        </>
      );
    };
    
export default TranslationDisplay