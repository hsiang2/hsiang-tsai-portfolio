import { Link } from 'react-router-dom'
import styles from './header.module.css'
const Header = () => {
    return (
        <div className={styles.header}>
            <div className={`container ${styles.nav}`}>
                <Link to='/'>
                    <h1 className={styles.title}>HSIANG²</h1>
                </Link>
                <div className={styles.navRight}>
                    <Link to='/'>
                        <h3 className={styles.text}>作品</h3>
                    </Link>
                    <Link to='/about'>
                        <h3 className={styles.text}>關於我</h3>
                    </Link>         
                </div>
            </div>
            <hr color='#5D718E' size='50px' style={{marginTop: '0', marginBottom: '0.4rem'}} />
            <hr color='#5D718E' size='50px' style={{margin: '0'}}  />
        </div>
    )
    
}

export default Header