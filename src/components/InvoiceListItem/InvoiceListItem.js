import { Link } from "react-router-dom"


export default function InvoiceListItem({
    active,
    animate,
    styles,
    invoice,
    activateInvoice,
}) {

    function getClassName(){
        if (animate === false && active === false){
            return `${styles.itemWrapper}`
        }
        if (animate === true && active === true){
            return `${styles.itemWrapper} ${styles.itemWrapperAnimateOn}`
        }
        if (animate === true && active === false){
            return `${styles.itemWrapper} ${styles.itemWrapperAnimateOff}`
        }
    }

    return(
        <div 
            className={
                getClassName()
            }
        >
            <div className={styles.itemHeader} onClick={() => {activateInvoice(invoice.key)}}>
                <p className={active ? styles.dateActive : styles.date}>{invoice.date}</p>
                <p className={active ? styles.nameActive : styles.name}>{invoice.name}</p>
                <i className={active ? `fa-solid fa-caret-down ${styles.iconActive}` : `fa-solid fa-caret-up ${styles.icon}`}></i>
            </div>
            {active ? 
                <div className={styles.dropdown}>
                    <p className={styles.cost}>${invoice.cost}</p>
                    <p className={styles.description}>{invoice.description}</p>
                    <div className={styles.actions}>
                        <Link to={`invoice/${invoice.key}`} className={styles.actionLink}>
                            <i className={`fa-solid fa-magnifying-glass`}></i>
                        </Link>
                        <i className={`fa-solid fa-pen`}></i>
                        <i className={`fa-solid fa-trash`}></i>
                    </div>
                </div>
            : null}
        </div>

        


    )
}