import React from 'react';
import styles from '../styles/sidebar.module.css';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
        <h1>375 DSA Questions</h1>
      <div className={styles.btn}>
        <Link href="/Arrays">
          <a><span>Start Practicing</span></a>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar