import React from 'react'
import styles from './header.module.css'

const Header = () => {
  return (
<header>
  <nav className={styles.navbarContainer}>
    <div className={styles.navbarlogo}>
      <h1>Movie Box</h1>
    </div>
    <input type="text" className={styles.navbarSearch} placeholder="Search movies..." />
    <p className={styles.navbarsearchResult}>
      Found <span className={styles.navbarsearchResultCount}>0</span>
    </p>
  </nav>
</header>
  )
}

export default Header