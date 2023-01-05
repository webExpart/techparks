import { createContext, useState, useEffect } from "react";

export const LanguageContaxt = createContext();

export const LanguageContaxtProvider = ({ children }) => {
    const [IsBangla, setIsBangla] = useState(
        JSON.parse(localStorage.getItem("IsBangla")) || false
        );
const languageToggle = () => {
    setIsBangla(!IsBangla);
}
useEffect(()=>{
    localStorage.setItem("IsBangla", IsBangla);
},[IsBangla]);

return (
    <LanguageContaxt.Provider value={{ languageToggle, IsBangla }}>
        {children}
    </LanguageContaxt.Provider>
)


}
