import styles from './Navtitle.module.css'
export default function Navtitle({animateNavbar, iconClass}) {


    return(
        <div className={styles.navtitle}>
            <i className={`${iconClass} ${styles.icon}`} onClick={animateNavbar}></i>
            <h1 className={styles.header}>Invoice Generator</h1>
        </div>
    )
}