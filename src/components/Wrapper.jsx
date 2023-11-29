import bgImg from '../assets/bg.jpeg'
import { styled } from 'styled-components'

const StyledWrapper = styled.div`
    width: 100vw;
    min-height: 100vh;
    overflow-x: hidden;
    background-image: url(${bgImg});
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
    padding: 30px;
    box-sizing: border-box;
`;

const Wrapper = ({children}) => {

    return(
        <StyledWrapper>
            {children}
        </StyledWrapper>
    )
}

export default Wrapper