import { useContext, useEffect, useState } from 'react'
import { SubstituteContext } from '../../providers/SubstituteProvider'
import { ResultWrapper, StyledResult } from './ResultStyle'

const Result = () => {

    const { currentTyreDiameter, substituteTyreDiameter, validData }= useContext(SubstituteContext)
    const [substituteResult, setSubstituteResult] = useState(null);
    const [isValidSubstitute, setIsValidSubstitute] = useState(null)

    useEffect(() => {
        const calculatedResult =(1 - substituteTyreDiameter / currentTyreDiameter) * -1 * 100;

        if(substituteTyreDiameter >= currentTyreDiameter * 0.98 && substituteTyreDiameter <= currentTyreDiameter * 1.015){
            setIsValidSubstitute(true)
        }else{
            setIsValidSubstitute(false)
        }

        setSubstituteResult(calculatedResult)
    },[currentTyreDiameter, substituteTyreDiameter])

    return(
        <ResultWrapper>
            <p>Czy można zastosować zamiennik?</p>
            {validData && currentTyreDiameter && substituteTyreDiameter && <StyledResult bg={isValidSubstitute}>
                <span>{isValidSubstitute ? 'TAK' : 'NIE'}</span>
                <span>{Math.round(substituteResult * 100) / 100}%</span>
            </StyledResult>}
        </ResultWrapper>
    )
}

export default Result;