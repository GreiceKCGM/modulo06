import styled from 'styled-components'
import Button from '@greicekcgm/ui/src/components/Button'

const Title = styled.h1`
  color: red;
  font-size: 50px;
`

export default function Home() {
  return(
    <div>
      <Button/>
      {/* <Button>
        Adicionando o children onde estamos usando o componente
      </Button> */}

      <Title>Nosso site que usa lib de components local</Title>
    </div>

    )


    
}
