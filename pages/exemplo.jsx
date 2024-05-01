import { Header } from "@/Components/Header/Header";
import { SubTitle } from "@/Components/subtitle/SubTitle";
import { Title } from "@/Components/title";


function Exemplopage({Newtext}) {
    return(
        <>
            <Header>
                <Title>Café Dev</Title>
                <SubTitle Newtext="O melhor café para Devs"/>
            </Header>
            
        </>
    )
}

export default Exemplopage;