import Expense from "../Expense/Expense"
import styles from './ExpenseList.module.css'
import getAllProperties from '../../service/array/getAllProperties'
import { useState } from "react"



let expenseData = [
    {id: 1, invoice: 'June #1 2022', date:'01/01/2022', vendor: 'WalMart', category: 'Kitchen Supplies', description: 'Gym membership for David', cost: 250, isComplete: false},
    {id: 2, invoice: 'June #1 2022', date:'01/01/2022', vendor: 'WalMart', category: 'Repairs', description: 'Phone bill', cost: 250, isComplete: false},
    {id: 3, invoice: 'June #1 2022', date:'01/01/2022', vendor: 'WalMart', category: 'Repairs', description: 'Balloon man Neil', cost: 250, isComplete: false},
    {id: 4, invoice: 'June #1 2022', date:'01/01/2022', vendor: 'WalMart', category: 'Cleaning Supplies', description: 'Party Supplies', cost: 250, isComplete: false},
    {id: 0, invoice: 'June #1 2022', date:'01/01/2022', vendor: 'WalMart', category: 'Kitchen Supplies', description: 'A storage container', cost: 250, isComplete: false},
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

export default function ExpenseList() {

    const [expenses, setExpenses] = useState(expenseData)
    const [categories, setCategories] = useState(getAllProperties(expenses, 'category'))

    return(
        categories.map((category) => {
            return(
                <div key={category}>
                    <h2 className={styles.sortHeader}>{category}</h2>
                    {getAllByProperty(expenses, 'category', category).map((expense) => 
                        <Expense
                            expense={expense}
                            key={expense.id}
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