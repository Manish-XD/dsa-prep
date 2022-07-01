import React from 'react';
import styles from '../styles/sidebar.module.css';
import Link from 'next/link';
import { useRouter } from "next/router";
import { useState } from 'react';

const Sidebar = ({data}) => {
  const router = useRouter();
  const { slug } = router.query;
  const [randLink, setRandLink] = useState('');
  // console.log(slug);
  // console.log(data);
  const linkgenerate = () => {
    if(slug === undefined){
    const rand = Math.floor(Math.random() * 7);
    const randLength = data[rand].links.length;
    setRandLink(data[rand].links[Math.floor(Math.random() * randLength)].link);
  }
  else{
    const randLength = data.links.length;
    setRandLink(data.links[Math.floor(Math.random() * randLength)].link);
    console.log(randLink);
  }
  }
  return (
    <div className={styles.sidebar}>
        <h1>375 DSA Questions</h1>
        <span className={styles.cc}>By Aman Dhattarwal & Shradha di</span>
      <div className={styles.btn}>
        {/* <Link href="/Arrays"> */}
          <a target="_blank" href={randLink} onClick={linkgenerate}><span>Start Random</span></a>
        {/* </Link> */}
      </div>
    </div>
  )
}

export default Sidebar;