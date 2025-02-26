import React, { useContext } from 'react'
import styles from './searchResult.module.css'
import SearchContext from '../Context/ContextSearch'


const SearchResult = () => {
  const {movieListLength}=useContext(SearchContext)
  return (
    <p className={styles.navbarsearchResult}>
    Found <span className={styles.navbarsearchResultCount}>{movieListLength}</span>
  </p>
  )
}

export default SearchResult