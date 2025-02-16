import React from 'react'
import styles from './searchResult.module.css'

const SearchResult = () => {
  return (
    <p className={styles.navbarsearchResult}>
    Found <span className={styles.navbarsearchResultCount}>0</span>
  </p>
  )
}

export default SearchResult