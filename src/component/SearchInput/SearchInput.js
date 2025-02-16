import React from 'react'
import styles from './searchInput.module.css'

const SearchInput = () => {
  return (
    <input type="text" className={styles.navbarSearch} placeholder="Search movies..." />

  )
}

export default SearchInput