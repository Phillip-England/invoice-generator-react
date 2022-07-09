import { NavLink } from "react-router-dom"
import styles from './Navmenu.module.css'


export default function Navmenu ({animateNavbar, menuClass}) {

    return(
            <ul className={styles.menu + ' ' + styles[menuClass]}>
                <li className={styles.topSpace}></li>
                <li className={styles.item}>
                    <NavLink 
                        to='/' 
                        className={({isActive}) => 
                            isActive ? styles['activeLink'] : styles['link']
                        } 
                        onClick={animateNavbar}>
                        Home
                    </NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink 
                        to='/categories' 
                        className={({isActive}) => 
                            isActive ? styles['activeLink'] : styles['link']
                        }  
                        onClick={animateNavbar}>
                        Categories
                    </NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink
                        to='/vendors' 
                        className={({isActive}) => 
                            isActive ? styles['activeLink'] : styles['link']
                        }
                        onClick={animateNavbar}>
                        Vendors
                    </NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink 
                        to='/settings' 
                        className={({isActive}) => 
                            isActive ? styles['activeLink'] : styles['link']
                        }
                        onClick={animateNavbar}>
                        Settings
                    </NavLink>
                </li>
            </ul>
    )
}