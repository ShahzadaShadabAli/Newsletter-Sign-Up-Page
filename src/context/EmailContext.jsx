import { useReducer } from "react";
import { createContext } from "react";
export const EmailContext = createContext()

const reducer = (state, action) => {
    if (action.type == "add") {
        return { email: action.payload }
    } else if (action.type == "remove") {
        return { email: null }
    } else {
        return state
    }
}

const EmailContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, {
        email: null
    })
    return (
        <EmailContext.Provider value={{state, dispatch}}>
            {children}
        </EmailContext.Provider>
    );
}
 
export default EmailContextProvider;