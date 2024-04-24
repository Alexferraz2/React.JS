import styles from  "@/Components/Title.module.css";


const funcao = () => 'Função qualquer!!!'
const valor = 'Título'
export function Title(props) {
    return(
        <div>
            <h1 className={styles.title}>
                {props.text}
                {props.children}
                
            </h1>
            {funcao()}
        </div>
    )
}

