import { createContext, useState } from "react";
import runChat from "../config/gemini"

export const Context = createContext()

const contextProvider = (props)=>{

    const [input,setInput]=useState("");
    const [recentPrompt,setRecentPrompt]=useState("");
    const [prevPrompts,setPrevPrompt]=useState([]);
    const [showResult,setShowResult]=useState(false);
    const [loading,setLoading]=useState(false);
    const [resultData,setResultData]=useState("");

    const onSent=async(prompt)=>{
        console.log("helloo clicked");
        setResultData("")
        setLoading(true)
        setShowResult(true)
        setRecentPrompt(input)

        const response=await runChat(input)
        
        setResultData(response)
        setLoading(false)
        setInput("")

    }


    const contextValue={
        prevPrompts,
        setPrevPrompt,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput

    }

    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default contextProvider