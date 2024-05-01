//import styles from '@/Components/Header/Header.module'
import styles  from '@/Components/Header/Header.module.css'


export function Header({ children, image }) {
    return(
        <header
        className={styles.header}
        style={{
            background: `url('${image}')`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
        }}
        
        >
        <div className={styles.headerContent}>
            {children}
        </div>
            
        </header>
    )
}

Header.defaultProps = {
    image: 'https://sejadev-web-app-public-files.s3.amazonaws.com/courses/coffee1.jpg'
}