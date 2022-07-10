import styles from './Expense.module.css'



export default function Expense({
    expense,
    activateExpense
}){

    return(
        <div className={styles.wrapper} onClick={() => {activateExpense(expense.id)}}>
            <div className={expense.active ? styles.showActive : styles.show}>
                <h2 className={ styles.date}>{expense.date}</h2>
                <p className={expense.active ? styles.vendorActive : styles.vendor}>{expense.vendor}</p>
                <p className={expense.active ? styles.costActive : styles.cost}>${expense.cost}</p>
                {expense.active
                    ? <i className={`fa-solid fa-caret-down ${styles.iconActive}`}></i>
                    : <i className={`fa-solid fa-caret-up ${styles.icon}`}></i>
                }
            </div>

            {expense.active
            ? 
                <div className={styles.hidden}>
                    <div className={styles.row}>
                        <p className={styles.detailName}>Invoice</p>
                        <p className={styles.detail}>{expense.invoice}</p>
                    </div>
                    <div className={styles.row}>
                        <p className={styles.detailName}>Date</p>
                        <p className={styles.detail}>{expense.date}</p>
                    </div>
                    <div className={styles.row}>
                        <p className={styles.detailName}>Vendor</p>
                        <p className={styles.detail}>{expense.vendor}</p>
                    </div>
                    <div className={styles.row}>
                        <p className={styles.detailName}>Category</p>
                        <p className={styles.detail}>{expense.category}</p>
                    </div>
                    <div className={styles.row}>
                        <p className={styles.detailName}>Description</p>
                        <p className={styles.detail}>{expense.description}</p>
                    </div>
                    <div className={styles.row}>
                        <p className={styles.detailName}>Cost</p>
                        <p className={styles.detail}>${expense.cost}</p>
                    </div>
                </div>
            : null}



        </div>
    )
}