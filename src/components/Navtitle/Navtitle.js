import styles from './Navtitle.module.css'
export default function Navtitle({animateNavbar}) {


    return(
        <div className={styles.navtitle}>
            <i className={`fa-solid fa-bars fa-xl ${styles.icon}`} onClick={animateNavbar}></i>
            <h1 className={styles.header}>Invoice Generator</h1>
        </div>
    )
}