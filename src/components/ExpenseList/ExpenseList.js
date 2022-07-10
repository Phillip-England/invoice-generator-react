import Expense from "../Expense/Expense"
import styles from './ExpenseList.module.css'
import graphics from './Graphics.module.css'
import getAllProperties from '../../service/array/getAllProperties'
import { useState } from "react"

export default function ExpenseList({
    toggleDeleteBox
}) {

    let expenseData = [
        {id: 0, invoice: 'June #1 2022', date:'01/01/2022', vendor: 'WalMart', category: 'Kitchen Supplies', description: 'Gym membership for David', cost: 250, isComplete: false},
        {id: 1, invoice: 'June #1 2022', date:'01/01/2022', vendor: 'WalMart', category: 'Repairs', description: 'Phone bill', cost: 250, isComplete: false},
        {id: 2, invoice: 'June #1 2022', date:'01/01/2022', vendor: 'WalMart', category: 'Repairs', description: 'Balloon man Neil', cost: 250, isComplete: false},
        {id: 3, invoice: 'June #1 2022', date:'01/01/2022', vendor: 'WalMart', category: 'Cleaning Supplies', description: 'Party Supplies', cost: 250, isComplete: false},
        {id: 4, invoice: 'June #1 2022', date:'01/01/2022', vendor: 'WalMart', category: 'Kitchen Supplies', description: 'A storage container', cost: 250, isComplete: false},
        {id: 5, invoice: 'June #1 2022', date:'01/01/2022', vendor: 'WalMart', category: 'Cleaning Supplies', description: 'Wreches, bolts, nuts, and a screwdriver. Also bought some more stuff', cost: 250, isComplete: false},
        {id: 6, invoice: 'June #1 2022', date:'01/01/2022', vendor: 'WalMart', category: 'Other Team Member Benefits', description: 'Party Supplies', cost: 250, isComplete: false},
        {id: 7, invoice: 'June #1 2022', date:'01/01/2022', vendor: 'WalMart', category: 'Other Team Member Benefits', description: 'Party Supplies', cost: 250, isComplete: false},
        {id: 8, invoice: 'June #1 2022', date:'01/01/2022', vendor: 'WalMart', category: 'Office Supplies', description: 'Party Supplies', cost: 250, isComplete: false},
        {id: 9, invoice: 'June #1 2022', date:'01/01/2022', vendor: 'WalMart', category: 'Office Supplies', description: 'Party Supplies', cost: 250, isComplete: false},
    ]

    function getAllByProperty(array, propertyName, propertyValue){
        return array.filter((item) => 
            item[propertyName] === propertyValue
        )
    }

    function addActiveAndAnimate(arrayOfObjects){
        let copyOfArray = Object.assign([], arrayOfObjects)
        for (let x = 0; x < copyOfArray.length; x++){
            copyOfArray[x].animate = null
            copyOfArray[x].active = false
        }
        return copyOfArray
    }

    function activateExpense(key) {
        let copyOfExpenses = Object.assign([], expenses)
        copyOfExpenses.forEach(expense => {
            if (expense.id === key){
                expense.active = !expense.active
                if (expense.animate === null || expense.animate === false){
                    expense.animate = true
                } else {
                    expense.animate = !expense.animate
                }
            } else {
                expense.active = false
                expense.animate = false
            }
        })
        setExpenses(copyOfExpenses)
    }

    const [expenses, setExpenses] = useState(addActiveAndAnimate(expenseData))
    const [categories, setCategories] = useState(getAllProperties(expenses, 'category'))

    return(
        categories.map((category) => {
            return(
                <div key={category}>
                    <div className={styles.sortHeaderWrapper}>
                        <h2 className={styles.sortHeader}>{category}</h2>
                        <div className={graphics.sortHeaderDecal_1}></div>
                        <div className={graphics.sortHeaderDecal_2}></div>
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



        // <div>
        //     {expenses.map((expense) => 
        //         <Expense
        //             expense={expense}
        //             key={expense.id}
        //         />
        //     )}
        //     <div className={styles.spacer}></div>
        // </div>
}