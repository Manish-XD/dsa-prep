import React, { useState, useEffect } from "react";
import styles from "../styles/Array.module.css";
import Sidebar from "../components/sidebar";
import Script from "next/script";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProgressBar } from "react-bootstrap";

const BST = ({data}) => {
    const [bst_todo, setbst_todo] = useState(data.links);
  const [bst_done, setbst_done] = useState([]);
  const [bst_now, setbst_now] = useState(0);

  useEffect(() => {
    try {
      if (localStorage.getItem("bst_todo")) {
        savebst_todo(JSON.parse(localStorage.getItem("bst_todo")));
        setbst_todo(JSON.parse(localStorage.getItem("bst_todo")));
      }
      else{
        localStorage.setItem("bst_todo", JSON.stringify(bst_todo));
      }
      if (localStorage.getItem("bst_done")) {
        savebst_done(JSON.parse(localStorage.getItem("bst_done")));
        setbst_done(JSON.parse(localStorage.getItem("bst_done")));
      }
      else{
        localStorage.setItem("bst_done", JSON.stringify(bst_done));
      }
      if(localStorage.getItem("bst_now")){
        setbst_now(JSON.parse(localStorage.getItem("bst_now")));
        savebst_now(JSON.parse(localStorage.getItem("bst_now")));
      }
      else{
        localStorage.setItem("bst_now", JSON.stringify(bst_now));
      }
    } catch (error) {
      console.error(error);
    }
  }, []);
  const savebst_todo = (items) => {
    localStorage.setItem("bst_todo", JSON.stringify(items));
  };
  const savebst_done = (items) => {
    localStorage.setItem("bst_done", JSON.stringify(items));
  };
  const savebst_now = (items) => {
    localStorage.setItem("bst_now", JSON.stringify(items));
  };
  const deleteItem = (index) => {
    const updateditems = bst_todo.filter((elem) => {
      return index !== elem.ques;
    });
    const temp = bst_todo.filter((elem) => {
      return index == elem.ques;
    });
    setbst_done([...bst_done, temp[0]]);
    savebst_done([...bst_done, temp[0]]);
    setbst_todo(updateditems);
    savebst_todo(updateditems);
    setbst_now(bst_done.length + 2);
    savebst_now(bst_done.length + 2);
  };
  const deleteItem2 = (index) => {
    const updateditems = bst_done.filter((elem) => {
      return index !== elem.ques;
    });
    const temp = bst_done.filter((elem) => {
      return index == elem.ques;
    });
    setbst_todo([...bst_todo, temp[0]]);
    savebst_todo([...bst_todo, temp[0]]);
    setbst_done(updateditems);
    savebst_done(updateditems);
    setbst_now(bst_done.length - 1);
    savebst_now(bst_done.length - 1);
  };
//   console.log(bst_done);
  return (
    <>
      <Script
        src="https://unpkg.com/react/umd/react.production.min.js"
        crossorigin
      ></Script>
      <Sidebar data={data} />
      <div className={styles.Array_body}>
        <h1>Binary Search Tree</h1>
        <ProgressBar
          style={{ fontSize: "1.5rem", height: "3rem", borderRadius: "10px" }}
          animated
          now={(bst_now / (data.links.length + 1)) * 100}
          label={parseInt((bst_now / (data.links.length + 1)) * 100) + "%"}
          variant="success"
        />
        <div className={styles.flex}>
          {bst_todo.map((item) => {
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
        {bst_done.length != 0 && <h2 className={styles.complete}>Questions Completed:</h2>}
        <div className={styles.flex2}>
          {bst_done.length != 0 && bst_done.map((item) => {
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
      'https://dsapppi.herokuapp.com/Binary-Search-Tree'
    );
    const data = await res.json();
  
    return {
      props: { data }, // will be passed to the page component as props
    };
  }

export default BST