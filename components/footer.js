import React from 'react'
import styles from '../styles/footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_left}>
          <div className={styles.footer_links}>
            <span>375 DSA</span>
            <a href="/">About</a>
          </div>
          <div className={styles.footer_links}>
            <span>Social</span>
            <a href="/">LinkedIn</a>
            <a href="/">Github</a>
          </div>
        </div>
        <div className={styles.footer_right}>
          <div className={styles.footer_logo}>
            {/* <CodeIcon style={{fontSize: "5rem"}}/> */}
          </div>
          <div className={styles.footer_content}>
            <h1>375 DSA Questions</h1>
            <p>© 2022 - Aman Dhattarwal & Shradha di</p>
          </div>
        </div>
      </div>
  )
}

export default Footer