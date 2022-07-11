import Navbar from '../components/Navbar/Navbar'
import InvoiceHeader from '../components/InvoiceHeader/InvoiceHeader'
import CostPrint from '../components/CostPrint/CostPrint'
import ExpenseList from '../components/ExpenseList/ExpenseList'
import Spacer from '../components/Spacer/Spacer'
import Overlay from '../components/Overlay/Overlay'
import DeleteExpensePopUp from '../components/DeleteExpensePopUp/DeleteExpensePopUp'

import addActiveAndAnimate from "../service/state/addActiveAndAnimate"
import sortArray from '../service/array/sortArray'

import { useState } from 'react'

export default function SingleInvoice() {

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

    function toggleDeleteBox(key) {
        if (overlayClass === 'pause' || overlayClass === 'animationOff'){
            setOverlayClass('animationOn')
            setPopupClass('animationOn')
            setExpenseToDelete(expenses[key])
        } else {
            setOverlayClass('animationOff')
            setPopupClass('animationOff')
            setExpenseToDelete(false)
        }
    }

    function deleteExpense(key) {
        let copyOfExpenses = Object.assign([], expenses)
        copyOfExpenses.forEach( (expense, index) => {
            if (expense.id === key){
                console.log(index)
                copyOfExpenses.splice(index, 1)
            }
        })
        setExpenses(copyOfExpenses)
        toggleDeleteBox(false)
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

    //sorting expense data
    let sortedExpenses = sortArray(addActiveAndAnimate(expenseData), 'category')

    const [overlayClass, setOverlayClass] = useState('pause')
    const [popupClass, setPopupClass] = useState('pause')
    const [expenses, setExpenses] = useState(addActiveAndAnimate(expenseData))
    const [expenseToDelete, setExpenseToDelete] = useState(false)


    return(
        <>
            <Navbar/>
            <InvoiceHeader
                name={'June #1 2022'}
                date={'01/01/2022'}
                cost={542}
                description={'This is an awesome invoice with a lot of info. It can inform us about June\'s expenses'}
            />
            <ExpenseList
                toggleDeleteBox={toggleDeleteBox}
                expenses={expenses}
                activateExpense={activateExpense}
            />
            <Spacer
                height={'60px'} //must be set to whatever height of CostPrint is equal to
            />
            <CostPrint
                cost={542}
            />
            <Overlay
                overlayClass={overlayClass}
            />
            <DeleteExpensePopUp
                popupClass={popupClass}
                toggleDeleteBox={toggleDeleteBox}
                expenseToDelete={expenseToDelete}
                deleteExpense={deleteExpense}
            />
        </>
    )
}