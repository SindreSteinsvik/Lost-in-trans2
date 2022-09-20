import { nanoid } from "nanoid";

const TranslationDisplay = ({translationText}) => {

    const letterArray = translationText.replace(/\s+/g, "").split("")

    return (
        <>
            {letterArray.map((character) =>(
              <img src = {`/pictures/individual_signs/${character}.png`}
              alt={character}
              width="80px"
              key={nanoid()}
              />
            ))}
        </>
      );
    };
    
export default TranslationDisplay