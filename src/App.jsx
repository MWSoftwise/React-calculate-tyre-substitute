import { useContext } from 'react'
import { SubstituteContext } from './providers/SubstituteProvider'
import Wrapper from './components/Wrapper'
import Header from './components/Header/Header'
import Size from './components/Size/Size'
import Result from './components/Result/Result'
import { SizesWrapper } from './components/Size/SizeStyle'


function App() {

  const { updateCurrentTyreDiameter, updateSubstituteTyreDiameter} = useContext(SubstituteContext)

  return (
    <Wrapper>
        <Header />
        <SizesWrapper>
          <Size title='Rozmiar opony' setDiameter={updateCurrentTyreDiameter} />
          <Size title='Rozmiar zamiennika' setDiameter={updateSubstituteTyreDiameter} />
        </SizesWrapper>
        <Result />
    </Wrapper>
  )
}

export default App
