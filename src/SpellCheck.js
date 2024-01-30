import React,{useState} from 'react';
const customDictionary={
    teh: "the",
    wrok: "work",  
    fot: "for",  
    exampl: "example"
};
export default function SpellCheck(){
    const [text,setText]=useState("");
    const [suggestedText,setSuggestedText]=useState("");
    const handleInputChange=(e)=>{
        const text1 =e.target.value;
        setText(text1);
        const words=text.split(" ");
        const correctedWords=words.map((word)=>{
            const correctedWord=customDictionary[word.toLoweCase()];
            return correctedWord||word;
        });
        const correctedText=correctedWords.join(" ");
        const firstCorrection=correctedWords.find((word,idx)=>word!==words[idx]);
        setSuggestedText(firstCorrection||"");
        };
    return(
        <div>
            <h1>Spell Check and Auto-Correction</h1>
            <textarea value={text} onChange={handleInputChange} placeholder='Enter text...' rows={5} cols={40}/>
            {suggestedText && (<p>Did you mean: <strong>{suggestedText}</strong></p>)}

        </div>

    )
}