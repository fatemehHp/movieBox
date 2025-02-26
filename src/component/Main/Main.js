import React from 'react';
import styles from './main.module.css'

function Main({children}) {
  return (
    <main className={styles.container}>
        {children}


    </main>
  );
}

export default Main;
