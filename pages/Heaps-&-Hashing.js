import React, { useState, useEffect } from "react";
import styles from "../styles/Array.module.css";
import Sidebar from "../components/sidebar";
import Script from "next/script";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProgressBar } from "react-bootstrap";

const Heap = ({data}) => {
    const [heap_todo, setheap_todo] = useState(data.links);
  const [heap_done, setheap_done] = useState([]);

  useEffect(() => {
    try {
      if (localStorage.getItem("heap_todo")) {
        saveheap_todo(JSON.parse(localStorage.getItem("heap_todo")));
        setheap_todo(JSON.parse(localStorage.getItem("heap_todo")));
      }
      else{
        localStorage.setItem("heap_todo", JSON.stringify(heap_todo));
      }
      if (localStorage.getItem("heap_done")) {
        saveheap_done(JSON.parse(localStorage.getItem("heap_done")));
        setheap_done(JSON.parse(localStorage.getItem("heap_done")));
      }
      else{
        localStorage.setItem("heap_done", JSON.stringify(heap_done));
      }
    } catch (error) {
      console.error(error);
    }
  }, []);
  const saveheap_todo = (items) => {
    localStorage.setItem("heap_todo", JSON.stringify(items));
  };
  const saveheap_done = (items) => {
    localStorage.setItem("heap_done", JSON.stringify(items));
  };
  const deleteItem = (index) => {
    const updateditems = heap_todo.filter((elem) => {
      return index !== elem.ques;
    });
    const temp = heap_todo.filter((elem) => {
      return index == elem.ques;
    });
    setheap_done([...heap_done, temp[0]]);
    saveheap_done([...heap_done, temp[0]]);
    setheap_todo(updateditems);
    saveheap_todo(updateditems);
  };
  const deleteItem2 = (index) => {
    const updateditems = heap_done.filter((elem) => {
      return index !== elem.ques;
    });
    const temp = heap_done.filter((elem) => {
      return index == elem.ques;
    });
    setheap_todo([...heap_todo, temp[0]]);
    saveheap_todo([...heap_todo, temp[0]]);
    setheap_done(updateditems);
    saveheap_done(updateditems);
  };
//   console.log(heap_done);
  return (
    <>
      <Script
        src="https://unpkg.com/react/umd/react.production.min.js"
        crossorigin
      ></Script>
      <Sidebar data={data} />
      <div className={styles.Array_body}>
        <h1>Heaps & Hashing</h1>
        <ProgressBar
          style={{ fontSize: "1.5rem", height: "3rem", borderRadius: "10px" }}
          animated
        />
        <div className={styles.flex}>
          {heap_todo.map((item) => {
            return (
              <div
                className={styles.flex_items}
                style={{ order: `${item.no}` }}
                id={item.no}
                key={item.no}
              >
                <button onClick={() => deleteItem(item.ques)}></button>
                <span className={styles.sno}>{item.no}</span>
                <a
                  className={styles.ques}
                  target="_blank"
                  href={`${item.link}`}
                  rel="noreferrer"
                >
                  {item.ques}
                </a>
                <span
                  style={{
                    color: `${
                      item.level != "Hard"
                        ? item.level != "Medium"
                          ? "yellow"
                          : "orange"
                        : "red"
                    }`,
                  }}
                  className={styles.level}
                >
                  {item.level}
                </span>
              </div>
            );
          })}
        </div>
        {heap_done.length != 0 && <h2 className={styles.complete}>Questions Completed:</h2>}
        <div className={styles.flex2}>
          {heap_done.length != 0 && heap_done.map((item) => {
            return (
              <div
                className={styles.flex2_items}
                style={{ order: `${item.no}` }}
                id={item.no}
                key={item.no}
              >
                <button onClick={() => deleteItem2(item.ques)}></button>
                <span className={styles.sno2}>{item.no}</span>
                <a
                  className={styles.ques2}
                  target="_blank"
                  href={`${item.link}`}
                  rel="noreferrer"
                >
                  {item.ques}
                </a>
                <span
                  style={{
                    color: `${
                      item.level != "Hard"
                        ? item.level != "Medium"
                          ? "yellow"
                          : "orange"
                        : "red"
                    }`,
                  }}
                  className={styles.level2}
                >
                  {item.level}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps(context) {
    const res = await fetch(
      'https://dsapppi.herokuapp.com/Heaps-&-Hashing'
    );
    const data = await res.json();
  
    return {
      props: { data }, // will be passed to the page component as props
    };
  }

export default Heap