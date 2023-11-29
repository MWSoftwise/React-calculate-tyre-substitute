import { StyledSizeWrapper, StyledInputBox, StyledSubmit, StyledDiameter } from './SizeStyle'
import { useState, useContext } from 'react';
import { SubstituteContext } from '../../providers/SubstituteProvider'

const Size = ({title, setDiameter}) => {

    const { validData, updateValidData} = useContext(SubstituteContext)

    const [tyreData, setTyreData] = useState({
        tyreWidth:null,
        tyreProfile:null,
        tyreInches:null
    });
    const [tyreDiameter, setTyreDiameter] = useState(null);

    const handleWidthChange= (e) => {
        setTyreData((prevState) => {
            return{
                ...prevState,
                tyreWidth: e.target.value
            }
        })
    }
    const handleProfileChange= (e) => {
        setTyreData((prevState) => {
            return{
                ...prevState,
                tyreProfile: e.target.value
            }
        })
    }

    const handleInchesChange= (e) => {
        setTyreData((prevState) => {
            return{
                ...prevState,
                tyreInches: e.target.value
            }
        })
    }

    const calculateDiameter = (width, profile, inches) => {
        if(width && profile && inches){
            updateValidData(true)
            const diameterResult = ((width * profile/100*2)*1.04+25.4*inches);
            setTyreDiameter(Math.round(diameterResult))
            setDiameter(diameterResult)
        }else{
            updateValidData(false);
            alert('WPISZ POPRAWNE DANE')
        }

    }



    const handleTyreDiameter = (event) => {
        event.preventDefault();
        calculateDiameter(+tyreData.tyreWidth, +tyreData.tyreProfile, +tyreData.tyreInches)
    }

    return(
        <StyledSizeWrapper>
           <div>
                <h2>{title}</h2>
                <form>
                    <StyledInputBox>
                        <input className="input__number" placeholder="Podaj szerokość opony(mm)" type="number" onChange={handleWidthChange}/>
                    </StyledInputBox>
                    <StyledInputBox>
                        <input className="input__number" placeholder="Podaj profil opony(%)" type="number" onChange={handleProfileChange} />
                    </StyledInputBox>
                    <StyledInputBox>
                        <input className="input__number" placeholder="Podaj średnice opony(cale)" type="number"  onChange={handleInchesChange} />
                    </StyledInputBox>
                    <StyledSubmit onClick={handleTyreDiameter}>Przelicz</StyledSubmit>
                </form>
           </div>
            <StyledDiameter>
                <p>Średnica opony (mm)</p>
                <div>
                    {validData ? tyreDiameter : ' - '}
                </div>
            </StyledDiameter>
        </StyledSizeWrapper>
    )
}

export default Size;