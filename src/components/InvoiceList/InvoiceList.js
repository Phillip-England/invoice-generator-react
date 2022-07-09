import { useState } from "react"
import styles from './InvoiceList.module.css'
import InvoiceListItem from "../InvoiceListItem/InvoiceListItem"

export default function InvoiceList() {

    let invoiceData = [
        {key:0, date:'01/01/2022', name:'June 2022 #1', description:'This is an invoice and all our expenses are on here', cost:578},
        {key:1, date:'01/01/2022', name:'June 2022 #2', description:'This is an invoice', cost:578},
        {key:2, date:'01/01/2022', name:'June 2022 #3', description:'This is an invoice', cost:578},
        {key:3, date:'01/01/2022', name:'June 2022 #4', description:'This is an invoice', cost:578},
    ]

    function modifyInvoices() {
        let modifiedInvoices = Object.assign([], invoiceData)
        for (let x = 0; x < modifiedInvoices.length; x++) {
            modifiedInvoices[x].active = false
            modifiedInvoices[x].animate = false
        }
        return modifiedInvoices //data now has active and animate properties
    }

    const [invoices, setInvoices] = useState(modifyInvoices())

    function activateInvoice(key){
        let copyOfInvoices = Object.assign([], invoices)
        copyOfInvoices.forEach(invoice => {
            if (invoice.key === key) {
                invoice.animate = true
                invoice.active = !invoice.active
            } else {
                invoice.active = false
            }
            setInvoices(copyOfInvoices)
        })
    }

    return(
        <ul className={styles.list}>
            {invoices.map(invoice => 
                <InvoiceListItem
                    key={invoice.key}
                    active={invoice.active}
                    styles={styles}
                    invoice={invoice}
                    activateInvoice={activateInvoice}
                    animate={invoice.animate}
                />
            )}
        </ul>
    )
} 