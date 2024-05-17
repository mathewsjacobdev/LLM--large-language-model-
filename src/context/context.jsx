import { createContext } from "react";
import runChat from "../config/gemini"

export const Context = createContext()

const contextProvider = (props)=>{

    const onsent=async(prompt)=>{
        await runChat(prompt)
    }

    onsent("what is react")

    const contextValue={

    }

    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default contextProvider