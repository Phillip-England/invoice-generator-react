import Navtitle from '../Navtitle/Navtitle'
import Overlay from '../Overlay/Overlay'
import Navmenu from '../Navmenu/Navmenu'
import {useState} from 'react'
import styles from './Navbar.module.css'

export default function Navbar(){

    const [menuClass, setMenuClass] = useState('pause')
    const [overlayClass, setOverlayClass] = useState('pause')

    function animateNavbar() {
        if (menuClass === 'pause' || menuClass === 'animationOff'){
            setMenuClass('animationOn')
            setOverlayClass('animationOn')
        } else {
            setMenuClass('animationOff')
            setOverlayClass('animationOff')
        }
    }

    return(
        <nav className={styles.navbar}>
            <div className={styles.spacer}></div>
            <Overlay
                overlayClass={overlayClass}
            />
            <Navtitle
                animateNavbar={animateNavbar}
            />
            <Navmenu
                animateNavbar={animateNavbar}
                menuClass={menuClass}
            /> 
        </nav>
    )
}