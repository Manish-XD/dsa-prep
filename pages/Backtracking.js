import React, { useState, useEffect } from "react";
import styles from "../styles/Array.module.css";
import Sidebar from "../components/sidebar";
import Script from "next/script";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProgressBar } from "react-bootstrap";

const Backtracking = ({data}) => {
    const [back_todo, setback_todo] = useState(data.links);
  const [back_done, setback_done] = useState([]);
  const [back_now, setback_now] = useState(0);

  useEffect(() => {
    try {
      if (localStorage.getItem("back_todo")) {
        saveback_todo(JSON.parse(localStorage.getItem("back_todo")));
        setback_todo(JSON.parse(localStorage.getItem("back_todo")));
      }
      else{
        localStorage.setItem("back_todo", JSON.stringify(back_todo));
      }
      if (localStorage.getItem("back_done")) {
        saveback_done(JSON.parse(localStorage.getItem("back_done")));
        setback_done(JSON.parse(localStorage.getItem("back_done")));
      }
      else{
        localStorage.setItem("back_done", JSON.stringify(back_done));
      }
      if(localStorage.getItem("back_now")){
        setback_now(JSON.parse(localStorage.getItem("back_now")));
        saveback_now(JSON.parse(localStorage.getItem("back_now")));
      }
      else{
        localStorage.setItem("back_now", JSON.stringify(back_now));
      }
    } catch (error) {
      console.error(error);
    }
  }, []);
  const saveback_todo = (items) => {
    localStorage.setItem("back_todo", JSON.stringify(items));
  };
  const saveback_done = (items) => {
    localStorage.setItem("back_done", JSON.stringify(items));
  };
  const saveback_now = (items) => {
    localStorage.setItem("back_now", JSON.stringify(items));
  };
  const deleteItem = (index) => {
    const updateditems = back_todo.filter((elem) => {
      return index !== elem.ques;
    });
    const temp = back_todo.filter((elem) => {
      return index == elem.ques;
    });
    setback_done([...back_done, temp[0]]);
    saveback_done([...back_done, temp[0]]);
    setback_todo(updateditems);
    saveback_todo(updateditems);
    setback_now(back_done.length + 2);
    saveback_now(back_done.length + 2);
  };
  const deleteItem2 = (index) => {
    const updateditems = back_done.filter((elem) => {
      return index !== elem.ques;
    });
    const temp = back_done.filter((elem) => {
      return index == elem.ques;
    });
    setback_todo([...back_todo, temp[0]]);
    saveback_todo([...back_todo, temp[0]]);
    setback_done(updateditems);
    saveback_done(updateditems);
    setback_now(back_done.length - 1);
    saveback_now(back_done.length - 1);
  };
//   console.log(back_done);
  return (
    <>
      <Script
        src="https://unpkg.com/react/umd/react.production.min.js"
        crossorigin
      ></Script>
      <Sidebar data={data} />
      <div className={styles.Array_body}>
        <h1>Backtracking</h1>
        <ProgressBar
          style={{ fontSize: "1.5rem", height: "3rem", borderRadius: "10px", margin: "3rem 0" }}
          animated
          now={(back_now / (data.links.length + 1)) * 100}
          label={parseInt((back_now / (data.links.length + 1)) * 100) + "%"}
          variant="success"
        />
        <div className={styles.flex}>
          {back_todo.map((item) => {
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
        {back_done.length != 0 && <h2 className={styles.complete}>Questions Completed:</h2>}
        <div className={styles.flex2}>
          {back_done.length != 0 && back_done.map((item) => {
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
      'https://dsapppi.herokuapp.com/Backtracking'
    );
    const data = await res.json();
  
    return {
      props: { data }, // will be passed to the page component as props
    };
  }

export default Backtracking;