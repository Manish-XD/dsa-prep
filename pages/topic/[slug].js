import React, { useState, useEffect } from "react";
import styles from "../../styles/Array.module.css";
import Sidebar from "../../components/sidebar";
import Script from "next/script";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProgressBar } from "react-bootstrap";
import { useRouter } from "next/router";
// import "../App.css";

const Arrays = ({ data }) => {
  const router = useRouter();
  const { slug } = router.query;
  
  useEffect(() => {
    try {
      if (localStorage.getItem("items")) {
        saveArray(JSON.parse(localStorage.getItem("items")));
        setArr(JSON.parse(localStorage.getItem("items")));
        
      }
    } catch (error) {
      console.error(error)
      localStorage.clear()
    }
  }, [])

  
  const saveArray = (items) => {
    localStorage.setItem("items", JSON.stringify(items));    
  } 
  
  const [arr,setArr]= useState(data.links);

  
  
    const deleteItem = (index) => {
        const updateditems = arr.filter((elem) => {
            return index !== elem.ques;
        });

        setArr(updateditems);
        saveArray(updateditems);
        console.log(arr);
        
    }
    
    return (
      <>
        <Script
          src="https://unpkg.com/react/umd/react.production.min.js"
          crossorigin
        ></Script>
        <Sidebar />
        <div className={styles.Array_body}>
          <h1>{slug}</h1>
          <ProgressBar
            style={{ fontSize: "1.5rem", height: "3rem", borderRadius: "10px" }}
            animated
          />
          <div className={styles.flex}>
          {
            arr.map((item) => {
            return (
              <div className={styles.flex_items} style = {{order: `${item.no}`}} id={item.no} key={item.no}>
                <span className={styles.sno}>{item.no}</span>
                <a className={styles.ques} target="_blank" href={`${item.link}`}>
                  {item.ques}
                </a>
                <button  onClick={()=>deleteItem(item.ques)}></button>
                <span style={{color: `${(item.level != "Hard")?((item.level != "Medium")?"yellow":"orange"):"red"}`}} className={styles.level}>{item.level}</span>
              </div>
            );
          })}
          </div>
        </div>
      </>
    );
}






export async function getServerSideProps(context) {
  const res = await fetch(
    `https://dsapppi.herokuapp.com/${context.query.slug}`
  );
  const data = await res.json();
  
  return {
    props:{data}, // will be passed to the page component as props
  };
}

export default Arrays;