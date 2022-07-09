import { useState } from "react"

export default function Form({
    styles,
    title,
    inputs,
}) {


    const [myInputs, setMyInputs] = useState(Object.assign([], inputs))

    function animateInput(key) {
        let inputsCopy = Object.assign([], inputs)
        inputsCopy.map((input) => 
            input.key === key ? input.active = true : input.active = false
        )
        setMyInputs(inputsCopy)
    }

    function resetInput(key) {
        let inputsCopy = Object.assign([], inputs)
        inputsCopy.map((input) => 
            input.active = ''
        )
        setMyInputs(inputsCopy)
    }


    return(
        <form className={styles.form}>
            <h1 className={styles.header}>{title}</h1>
            <div className={styles.errorWrapper}>
                <div className={styles.iconWrapper}>
                    <i className={`fa-solid fa-exclamation-circle fa-md ${styles.icon}`}></i>
                </div>
                <p className={styles.errorMessage}>Username cannot contain any symbossd sds sds sd sar signs</p>
            </div>
            <div className={styles.inputSection}>
                {myInputs.map((myInput) => 
                    <div key={myInput.key} className={styles.inputWrapper}>
                        <label 
                            className={styles.label} 
                            htmlFor={myInput.name}>
                            {myInput.name}
                        </label>
                        <input className={styles.input + ' ' + (myInput.active ? styles.inputAnimationOn : styles.inputAnimationOff)} 
                                name={myInput.name} 
                                onClick={() => {animateInput(myInput.key)}}
                                onFocus={() => {animateInput(myInput.key)}}
                                onBlur={() => {resetInput(myInput.key)}}>
                        </input>              
                    </div>
                )}
            </div>
            <button className={styles.submit} type='button'>Add Invoice</button>
        </form>
    )
}