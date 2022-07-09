import styles from './InvoiceHeader.module.css'

export default function InvoiceHeader({
    name,
    date,
    description,
    cost,
}){
    return(

            <div className={styles.header}>
                <h1 className={styles.headerName}>{name}</h1>
                <p className={styles.headerDate}>{date}</p>
                <p className={styles.headerDescription}>{description}</p>
            </div>

    )
}