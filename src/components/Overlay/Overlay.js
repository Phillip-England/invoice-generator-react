import styles from './Overlay.module.css'

export default function Overlay({overlayClass, clickEvent}) {
    return(
        <div className={styles.overlay + " " + styles[overlayClass]} onClick={clickEvent} ></div>
    )
}