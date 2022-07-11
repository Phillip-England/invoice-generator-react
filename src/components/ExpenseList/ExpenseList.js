import Expense from "../Expense/Expense"
import styles from './ExpenseList.module.css'
import graphics from './Graphics.module.css'
import getAllProperties from '../../service/array/getAllProperties'
import getAllByProperty from '../../service/array/getAllByProperty'
import { useState } from "react"

export default function ExpenseList({
    toggleDeleteBox,
    expenses,
    activateExpense,
}) {
    
    const [categories, setCategories] = useState(getAllProperties(expenses, 'category'))

    return(
        categories.map((category) => {
            return(
                <div key={category}>
                    <div className={styles.sortHeaderWrapper}>
                        <h2 className={styles.sortHeader}>{category}</h2>
                        {/* <div className={graphics.sortHeaderDecal_1}></div> */}
                        {/* <div className={graphics.sortHeaderDecal_2}></div> */}
                    </div>
                    {getAllByProperty(expenses, 'category', category).map((expense) => 
                        <Expense
                            expense={expense}
                            key={expense.id}
                            activateExpense={activateExpense}
                            toggleDeleteBox={toggleDeleteBox}
                        /> 
                    )}
                </div>
            )
        })
    )
}