import Expense from "../Expense/Expense"
import styles from './ExpenseList.module.css'
import getAllProperties from '../../service/array/getAllProperties'
import getAllByProperty from '../../service/array/getAllByProperty'
import { useState } from "react"

export default function ExpenseList({
    toggleDeleteBox,
    expenses,
    activateExpense,
    sortedCategories,
    sortBy,
}) {
    
    const [categories, setCategories] = useState(getAllProperties(expenses, 'category'))

    return(

        sortedCategories.map((category) => {
            return(
                <div key={category}>
                    <div className={styles.sortHeaderWrapper}>
                        <h2 className={styles.sortHeader}>{category}</h2>
                    </div>
                    {getAllByProperty(expenses, sortBy, category).map((expense) => 
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