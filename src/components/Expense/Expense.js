import styles from './Expense.module.css'
import animations from './Animations.module.css'



export default function Expense({
    expense,
    activateExpense,
    toggleDeleteBox
}){

    function getWrapperCss(){
        if (expense.active === false && expense.animate === null){
            return `${styles.wrapper} ${animations.pause}`
        }
        if (expense.active === true && expense.animate === true){
            return `${styles.wrapper} ${animations.play} ${animations.wrapperAnimationOn}`
        }
        if (expense.active === false && expense.animate === false){
            return `${styles.wrapper} ${animations.play} ${animations.wrapperAnimationOff}`
        }
    }

    function getHiddenCss(){
        if (expense.active === false && expense.animate === null){
            return `${styles.hidden} ${animations.pause}`
        }
        if (expense.active === true && expense.animate === true){
            return `${styles.hidden} ${animations.play} ${animations.hiddenAnimationOn}`
        }
        if (expense.active === false && expense.animate === false){
            return `${styles.hidden} ${animations.play} ${animations.hiddenAnimationOff}`
        }
    }

    function getShowCss(){
        if (expense.active === false && expense.animate === null){
            return `${styles.show} ${animations.pause}`
        }
        if (expense.active === true && expense.animate === true){
            return `${styles.show} ${animations.play} ${animations.showAnimationOn}`
        }
        if (expense.active === false && expense.animate === false){
            return `${styles.show} ${animations.play} ${animations.showAnimationOff}`
        }
    }


    return(
        <div className={getWrapperCss()}>
            <div className={getShowCss()} onClick={() => {activateExpense(expense.id)}}>
                <h2 className={ styles.date}>{expense.date}</h2>
                <p className={expense.active ? styles.vendorActive : styles.vendor}>{expense.vendor}</p>
                <p className={expense.active ? styles.costActive : styles.cost}>${expense.cost}</p>
                {expense.active
                    ? <i className={`fa-solid fa-caret-down fa-sm ${styles.iconActive}`}></i>
                    : <i className={`fa-solid fa-caret-up fa-sm ${styles.icon}`}></i>
                }
            </div>

            {expense.active
            ? 
                <div className={getHiddenCss()}>
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
                    <div className={styles.actions}>
                        <i className={`fa-solid fa-pen ${styles.actionIcon}`}></i>
                        <i className={`fa-solid fa-trash ${styles.actionIcon}`} onClick={() => {toggleDeleteBox(expense.id)}}></i>
                    </div>
                </div>
            : null}



        </div>
    )
}