import debica from '../../assets/debica.jpg'
import goodyear from '../../assets/goodyear.jpg'
import dunlop from '../../assets/dunlop.png'
import fulda from '../../assets/fulda.jpg'
import sava from '../../assets/sava.jpg'
import { styled } from 'styled-components'

const StyledHeader = styled.header`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;

    @media(min-width:700px){
        flex-direction: row;
    }

    & img{
        max-height: 26px;
    }
`;

const Header = () => {

    return(
        <StyledHeader>
            <img src={goodyear} alt="Logo Goodyear" />
            <img src={dunlop} alt="Logo Dunlop" />
            <img src={fulda} alt="Logo Fulda" />
            <img src={debica} alt="Logo Dębica" />
            <img src={sava} alt="Logo Sava" />
        </StyledHeader>
    )
}

export default Header;