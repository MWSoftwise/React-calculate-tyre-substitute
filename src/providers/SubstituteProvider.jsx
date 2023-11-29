import { createContext, useState } from "react";

export const SubstituteContext = createContext({
    currentTyreDiameter:null,
    updateCurrentTyreDiameter: () => {},
    substituteTyreDiameter: null,
    updateSubstituteTyreDiameter: () => {},
    validData: false,
    updateValidData:() => {}
})

const SubstituteProvider = ({children}) => {

    const [currentTyreDiameter, setCurrentTyreDiameter] = useState(null)
    const [substituteTyreDiameter, setSubstituteTyreDiameter] = useState(null)
    const [validData, setValidData] = useState(false)

    const updateCurrentTyreDiameter = (value) => {
        setCurrentTyreDiameter(value)
    }
    const updateSubstituteTyreDiameter = (value) => {
        setSubstituteTyreDiameter(value)
    }

    const updateValidData = (value) => {
        setValidData(value)
    }

    return(
        <SubstituteContext.Provider value={{
            currentTyreDiameter,
            updateCurrentTyreDiameter,
            substituteTyreDiameter,
            updateSubstituteTyreDiameter,
            validData,
            updateValidData

        }}>
            {children}
        </SubstituteContext.Provider>
    )
}

export default SubstituteProvider;