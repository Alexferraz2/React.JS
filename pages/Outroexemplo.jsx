import { Header } from "@/Components/Header/Header";
import { SubTitle } from "@/Components/subtitle/SubTitle";
import { Title } from "@/Components/title";

function OutroExemplo(){
    return(
        <>
            <Header image={'https://sejadev-web-app-public-files.s3.amazonaws.com/courses/coffee2.jpg'}>
                <Title>Outro Café Dev</Title>
                <SubTitle Newtext="O segundo melhor café para Devs"/>
            </Header>
            
        </>
    )
}


export default OutroExemplo;

