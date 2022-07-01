import React from 'react';
import styles from '../styles/sidebar.module.css';
import { useState } from 'react';
import { useRouter } from "next/router";

const Sidebar = ({data}) => {
  const router = useRouter();
  const [link, setlink] = useState('');
  const linkGenerate = () =>{
    if(router.pathname === "/"){
      const rand = Math.floor(Math.random() * data.length);
      setlink(data[rand].links[Math.floor(Math.random() * data[rand].links.length)].link);
    }else{
      setlink(data.links[Math.floor(Math.random() * data.links.length)].link);
    }
  }
  return (
    <div className={styles.sidebar}>
        <h1>375 DSA Questions</h1>
        <span className={styles.cc}>By Aman Dhattarwal & Shradha di</span>
      <div className={styles.btn}>
        {/* <Link href="/Arrays"> */}
          <a target="_blank" rel="noreferrer" onClick={linkGenerate} href={link}><span>Pick Random</span></a>
        {/* </Link> */}
      </div>
    </div>
  )
}

export default Sidebar;