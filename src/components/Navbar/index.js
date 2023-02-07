import React from 'react'
import styles from '../../components/Navbar/styles/style.module.css'
import { Outlet, Link } from "react-router-dom";
import logo from '../../assets/logo.png'

function index() {
    return (
        <>
            <div className={styles.overlay}></div>
            <div className={styles.main}>
                <div className={styles.navbar}>
                    <nav id={styles.nav}>
                        <img id={styles.munlogo} src={logo} alt="MUN logo" />
                        <ul>
                            <li><Link to="/" className={styles.nav_a}>Home</Link></li>
                            <li><Link to="/about" className={styles.nav_a}>About</Link></li>
                            <li><Link to="/applications" className={styles.nav_a}>Apply</Link></li>
                            <li><Link to="/commitees" className={styles.nav_a}>Commitee</Link></li>
                            <li><Link to="/secretarait" className={styles.nav_a}>Secretarait</Link></li>
                        </ul>
                    </nav>
                </div>


                <div className={styles.mobile_navbar}>
                    <nav id={styles.mobile_nav}>
                        <div className={styles.mobile_wrapper}>
                            <div className={styles.mobile_logo}>
                                <img id={styles.mobile_munlogo} src={logo} alt="MUN logo" />
                            </div>
                            <div className={styles.mobile_menu}>
                                <i className="fa-solid fa-bars more"></i>
                                <i className="fa-solid fa-xmark cancel"></i>
                            </div>
                        </div>
                        <div className={styles.mobile_nav_ele}>
                            <ul>
                                <li><Link to="/" className={styles.nav_a}>Home</Link></li>
                                <li><Link to="/about" className={styles.nav_a}>About</Link></li>
                                <li><Link to="/applications" className={styles.nav_a}>Apply</Link></li>
                                <li><Link to="/commitees" className={styles.nav_a}>Commitee</Link></li>
                                <li><Link to="/secretarait" className={styles.nav_a}>Secretarait</Link></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default index