import styles from './DeleteExpensePopUp.module.css'

export default function DeleteExpensePopUp({
    popupClass,
    toggleDeleteBox,
    expenseToDelete,
}) {

    console.log(expenseToDelete)

    return(
        <div className={`${styles.wrapper} ${styles[popupClass]}`}>
            <h2 className={`${styles.header}`}>Are you sure you want to delete this expense?</h2>
            <p className={styles.detail}>{expenseToDelete.date}</p>
            <p className={styles.detail}>{expenseToDelete.description}</p>
            <p className={styles.detail}>{expenseToDelete.vendor}</p>
            <p className={styles.detail}>${expenseToDelete.cost}</p>
            <div className={styles.buttonWrapper}>
                <button className={`${styles.delete} ${styles.button}`}>Delete</button>
                <button className={`${styles.cancel} ${styles.button}`} onClick={() => {toggleDeleteBox(false)}}>Cancel</button>
            </div>
        </div>
    )
}