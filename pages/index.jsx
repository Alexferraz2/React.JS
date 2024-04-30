import Head from "next/head";
import { Title } from "@/Components/title";
import { SubTitle, NewSubTitle } from "@/Components/subtitle/SubTitle";
import { Button } from "@/Components/ComponentButton/Button";
import { useState } from "react";


function Home() {

  const [click, setClick] = useState(0)

  const handleClick = () => {
    setClick(click + 1)
  }
  return (
    <>
      
      <div>
        <Title>Usando o children</Title>
        <Title text='Usando props'/>
        <Title texto='Usando propriedade'/>
        <SubTitle Newtext='Novo texto'/>
        <NewSubTitle/>
        <h1>Olá mundo!!!!!!!!</h1>
        <Button
          onClick={handleClick}
        >Botão teste</Button>

        <p>Cliques: {click}</p>
      </div>
    </>
    
  )
}

export default Home;