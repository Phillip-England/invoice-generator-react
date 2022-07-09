import styles from './CostPrint.module.css'

export default function CostPrint({
    cost
}){
    return(
        <div className={styles.costPrintWrapper}>
            <p className={styles.cost}>${cost}</p>
            <div className={styles.printWrapper}>
                <i className={`fa-solid fa-print fa-lg ${styles.print}`}></i>
            </div>
        </div>
    )
}