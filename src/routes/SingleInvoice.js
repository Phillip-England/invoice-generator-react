import Navbar from '../components/Navbar/Navbar'
import InvoiceHeader from '../components/InvoiceHeader/InvoiceHeader'
import CostPrint from '../components/CostPrint/CostPrint'
import ExpenseList from '../components/ExpenseList/ExpenseList'
import Spacer from '../components/Spacer/Spacer'

export default function SingleInvoice() {
    return(
        <>
            <Navbar/>
            <InvoiceHeader
                name={'June #1 2022'}
                date={'01/01/2022'}
                cost={542}
                description={'This is an awesome invoice with a lot of info. It can inform us about June\'s expenses'}
            />
            <ExpenseList/>
            <Spacer
                height={'60px'} //must be set to whatever height of CostPrint is equal to
            />
            <CostPrint
                cost={542}
            />
        </>
    )
}