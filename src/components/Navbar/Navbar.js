import Navtitle from '../Navtitle/Navtitle'
import Overlay from '../Overlay/Overlay'
import Navmenu from '../Navmenu/Navmenu'
import {useState} from 'react'
import styles from './Navbar.module.css'

export default function Navbar(){

    const [menuClass, setMenuClass] = useState('pause')
    const [overlayClass, setOverlayClass] = useState('pause')
    const [iconClass, setIconClass] = useState('fa-solid fa-bars fa-lg')

    function animateNavbar() {
        if (menuClass === 'pause' || menuClass === 'animationOff'){
            setMenuClass('animationOn')
            setOverlayClass('animationOn')
            setIconClass('fa-solid fa-x fa-lg')
        } else {
            setMenuClass('animationOff')
            setOverlayClass('animationOff')
            setIconClass('fa-solid fa-bars fa-lg')
        }
    }

    return(
        <nav className={styles.navbar}>
            <div className={styles.spacer}></div>
            <Overlay
                overlayClass={overlayClass}
                clickEvent={animateNavbar}
            />
            <Navtitle
                animateNavbar={animateNavbar}
                iconClass={iconClass}
            />
            <Navmenu
                animateNavbar={animateNavbar}
                menuClass={menuClass}
            /> 
        </nav>
    )
}