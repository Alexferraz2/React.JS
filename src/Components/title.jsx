/*
    Exemplo de componentes react com childrens(filhos)
*/

import styles from '@/Components/Title.module.css'



const funcao = () => 'Função qualquer!!!'
const valor = 'Título'
export function Title( {text, texto, children}) {
    return(
        <div>
            <h1 className={styles.title}>
                {text}
                {texto}
                {children}
                
            </h1>
            {funcao()}
        </div>
    )
}

