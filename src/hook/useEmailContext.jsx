import { useContext } from "react";
import { EmailContext } from "../context/EmailContext";

const useEmailContext = () => {
    const value = useContext(EmailContext)
    return value;
}
 
export default useEmailContext;