import styles from './SortInput.module.css'
import Spacer from '../Spacer/Spacer'

export default function SortInput({
    options
}) {
    return(
        <div className={styles.wrapper}>
            <h3 className={styles.header}>Sort Expenses By:</h3>
            <select className={styles.input}>
                {options.map(option => 
                    <option>{option}</option>
                )}
            </select>
        </div>
    )
}