import styles from './Overlay.module.css'

export default function Overlay({overlayClass}) {
    return(
        <div className={styles.overlay + " " + styles[overlayClass]}></div>
    )
}