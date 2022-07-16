import React, { useState, useEffect } from "react";
import styles from "../styles/Array.module.css";
import Sidebar from "../components/sidebar";
import Script from "next/script";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProgressBar } from "react-bootstrap";

const Binary = ({data}) => {
    const [bt_todo, setbt_todo] = useState(data.links);
  const [bt_done, setbt_done] = useState([]);
  const [bt_now, setbt_now] = useState(0);

  useEffect(() => {
    try {
      if (localStorage.getItem("bt_todo")) {
        savebt_todo(JSON.parse(localStorage.getItem("bt_todo")));
        setbt_todo(JSON.parse(localStorage.getItem("bt_todo")));
      }
      else{
        localStorage.setItem("bt_todo", JSON.stringify(bt_todo));
      }
      if (localStorage.getItem("bt_done")) {
        savebt_done(JSON.parse(localStorage.getItem("bt_done")));
        setbt_done(JSON.parse(localStorage.getItem("bt_done")));
      }
      else{
        localStorage.setItem("bt_done", JSON.stringify(bt_done));
      }
      if(localStorage.getItem("bt_now")){
        setbt_now(JSON.parse(localStorage.getItem("bt_now")));
        savebt_now(JSON.parse(localStorage.getItem("bt_now")));
      }
      else{
        localStorage.setItem("bt_now", JSON.stringify(bt_now));
      }
    } catch (error) {
      console.error(error);
    }
  }, []);
  const savebt_todo = (items) => {
    localStorage.setItem("bt_todo", JSON.stringify(items));
  };
  const savebt_done = (items) => {
    localStorage.setItem("bt_done", JSON.stringify(items));
  };
  const savebt_now = (items) => {
    localStorage.setItem("bt_now", JSON.stringify(items));
  };
  const deleteItem = (index) => {
    const updateditems = bt_todo.filter((elem) => {
      return index !== elem.ques;
    });
    const temp = bt_todo.filter((elem) => {
      return index == elem.ques;
    });
    setbt_done([...bt_done, temp[0]]);
    savebt_done([...bt_done, temp[0]]);
    setbt_todo(updateditems);
    savebt_todo(updateditems);
    setbt_now(bt_done.length + 2);
    savebt_now(bt_done.length + 2);
  };
  const deleteItem2 = (index) => {
    const updateditems = bt_done.filter((elem) => {
      return index !== elem.ques;
    });
    const temp = bt_done.filter((elem) => {
      return index == elem.ques;
    });
    setbt_todo([...bt_todo, temp[0]]);
    savebt_todo([...bt_todo, temp[0]]);
    setbt_done(updateditems);
    savebt_done(updateditems);
    setbt_now(bt_done.length - 1);
    savebt_now(bt_done.length - 1);
  };
//   console.log(bt_done);
  return (
    <>
      <Script
        src="https://unpkg.com/react/umd/react.production.min.js"
        crossorigin
      ></Script>
      <Sidebar data={data} />
      <div className={styles.Array_body}>
        <h1>Binary Tree</h1>
        <ProgressBar
          style={{ fontSize: "1.5rem", height: "3rem", borderRadius: "10px", margin: "3rem 0" }}
          animated
          now={(bt_now / (data.links.length + 1)) * 100}
          label={parseInt((bt_now / (data.links.length + 1)) * 100) + "%"}
          variant="success"
        />
        <div className={styles.flex}>
          {bt_todo.map((item) => {
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
        {bt_done.length != 0 && <h2 className={styles.complete}>Questions Completed:</h2>}
        <div className={styles.flex2}>
          {bt_done.length != 0 && bt_done.map((item) => {
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
      'https://dsapppi.herokuapp.com/Binary-Tree'
    );
    const data = await res.json();
  
    return {
      props: { data }, // will be passed to the page component as props
    };
  }

export default Binary