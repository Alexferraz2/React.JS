import { Title } from "@/Components/title";
import { SubTitle, NewSubTitle } from "@/Components/subtitle/SubTitle";


function Home() {
  return (
    <div>
      <Title>Usando o children</Title>
      <Title text='Usando props'/>
      <Title texto='Usando propriedade'/>
      <SubTitle Newtext='Novo texto'/>
      <NewSubTitle/>
      <h1>Olá mundo!!!</h1>
    </div>
  )
}

export default Home;