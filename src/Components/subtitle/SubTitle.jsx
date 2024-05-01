/*
    Exemplo de componentes react com props(atributos)
*/

export function SubTitle({Newtext}) {
    return(
        <div>
            
            <p>{Newtext}</p>
        </div>
        
    )
}

export function NewSubTitle() {
    return(
        <h5>Novo subtítulo</h5>
    )
}