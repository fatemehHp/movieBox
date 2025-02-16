import React from 'react'
import styles from './header.module.css'
import SearchInput from '../SearchInput/SearchInput'
import Logo from '../Logo/Logo'
import SearchResult from '../SearchResult/SearchResult'

const Header = () => {
  return (
<header>
  <nav className={styles.navbarContainer}>
    <Logo/>
    <SearchInput/>
    <SearchResult/>
  </nav>
</header>
  )
}

export default Header