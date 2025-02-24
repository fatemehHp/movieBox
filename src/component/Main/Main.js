import React from 'react';
import styles from './main.module.css'

function Main({children}) {
  return (
    <main className={styles.container}>
      {/* Movie Section */}
        {children}

      {/* Watched Movies Section */}
      <div className="watched-movies">
        


      </div>
    </main>
  );
}

export default Main;
