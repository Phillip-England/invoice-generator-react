import Navbar from '../components/Navbar/Navbar'
import InvoiceHeader from '../components/InvoiceHeader/InvoiceHeader'
import CostPrint from '../components/CostPrint/CostPrint'
import ExpenseList from '../components/ExpenseList/ExpenseList'
import Spacer from '../components/Spacer/Spacer'
import Overlay from '../components/Overlay/Overlay'
import { useState } from 'react'

export default function SingleInvoice() {

    const [overlayClass, setOverlayClass] = useState('pause')

    function toggleDeleteBox() {
        if (overlayClass === 'pause'){
            setOverlayClass('animationOn')
        }
    }

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
        </>
    )
}