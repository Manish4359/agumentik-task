import React from 'react'
import styles from './navbar.module.css'
import {AiOutlineDown} from 'react-icons/ai'
import logo from './../logo.png'

function Navbar() {
  return (
    <div className={styles.nav}>
        <div className={styles.navItems}>

        <div >
        <NavItem item={'Templates'} dropdown={true}/>
        <NavItem item={'Integrations'} dropdown={true}/>
        <NavItem item={'Product'}/>
        <NavItem item={'Pricing'}/>
        </div>
        <img src={logo} className={styles.logo}/>
        <div >

        <NavItem item={'Support'}/>
        <NavItem item={'Login'}/>
        <NavItem item={'Get Started'} active={styles.active}/>
        </div>
        </div>

    </div>
  )
}

function NavItem({item,dropdown,active}){

    return (
        <div className={`${styles.navItem} ${active}`}>
            <span className={styles.itemName}>{item}</span>
            {dropdown?<span  style={{height:'5px'}}><AiOutlineDown/></span>:<></>}
        </div>
    )
}
export default Navbar