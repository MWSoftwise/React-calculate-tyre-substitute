import { styled } from 'styled-components'

export const ResultWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    box-sizing: border-box;
    min-width: 550px;
    background-color: #fff;
    color: #000;
    padding: 20px;
    border-radius: 10px;

    & p{
        margin: 0;
        font-size: 22px;
        font-weight: 600;
    }
`;

export const StyledResult = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background-color: ${({bg}) => bg ? 'green' : 'red'};
    color: #fff;
    padding: 10px 15px;
    border-radius: 5px;
`;