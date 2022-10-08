import React from 'react'
import { FiSearch } from 'react-icons/fi'

import styles from './styles.module.css'

const SearchForm = () => {
  return (
    <form action="/" method="post" className={styles.form}>
      <input type="text" name="pesquisa" placeholder="Pesquisar..." />
      <button type="submit" className={styles.submitButton}>
        <FiSearch />
      </button>
    </form>
  )
}

export default SearchForm
