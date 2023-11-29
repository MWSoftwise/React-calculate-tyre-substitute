import {styled} from 'styled-components'

export const SizesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;

    @media(min-width: 1150px){
        flex-direction: row;
    }
`;

export const StyledSizeWrapper = styled.section`
    box-sizing: border-box;
    min-width: 550px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 50px;
    background-color: #fff;
    color: #000;
    padding: 30px;
    border-radius: 10px;
    -webkit-box-shadow: 0px 0px 32px -7px rgba(255, 255, 255, 0.8);
    -moz-box-shadow: 0px 0px 32px -7px rgba(255, 255, 255, 0.8);
    box-shadow: 0px 0px 32px -7px rgba(255, 255, 255, 0.8);

    & h2{
        margin-top: 0 !important;
    }
`;

export const StyledInputBox = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 0;

    & .input__number{
        min-width: 200px;
        background-color: #fff;
        color: #000;
        border: none;
        border-bottom: 1px solid #555;
        padding: 5px;
        outline: none;

        &:focus{
            border-bottom: 2px solid #555;
        }
    }
`;

export const StyledSubmit = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #555;
    background-color: #555;
    letter-spacing: 2px;
    cursor: pointer;
    transition: .2s;

    &:hover{
        background-color: #fff;
        color: #555;
        border: 1px solid #555;
    }
    &:focus{
        outline: none;
    }
`;

export const StyledDiameter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #555;
    color: #fff;
    padding: 10px;
    border-radius: 5px;

    & div{
        font-weight: 600;
        font-size: 32px;
    }
`;