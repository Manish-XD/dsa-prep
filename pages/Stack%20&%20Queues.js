import React, { useState, useEffect } from "react";
import styles from "../styles/Array.module.css";
import Sidebar from "../components/sidebar";
import Script from "next/script";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProgressBar } from "react-bootstrap";

const stackqueue = ({data}) => {
    const [sq_todo, setsq_todo] = useState(data.links);
  const [sq_done, setsq_done] = useState([]);

  useEffect(() => {
    try {
      if (localStorage.getItem("sq_todo")) {
        savesq_todo(JSON.parse(localStorage.getItem("sq_todo")));
        setsq_todo(JSON.parse(localStorage.getItem("sq_todo")));
      }
      else{
        localStorage.setItem("sq_todo", JSON.stringify(sq_todo));
      }
      if (localStorage.getItem("sq_done")) {
        savesq_done(JSON.parse(localStorage.getItem("sq_done")));
        setsq_done(JSON.parse(localStorage.getItem("sq_done")));
      }
      else{
        localStorage.setItem("sq_done", JSON.stringify(sq_done));
      }
    } catch (error) {
      console.error(error);
    }
  }, []);
  const savesq_todo = (items) => {
    localStorage.setItem("sq_todo", JSON.stringify(items));
  };
  const savesq_done = (items) => {
    localStorage.setItem("sq_done", JSON.stringify(items));
  };
  const deleteItem = (index) => {
    const updateditems = sq_todo.filter((elem) => {
      return index !== elem.ques;
    });
    const temp = sq_todo.filter((elem) => {
      return index == elem.ques;
    });
    setsq_done([...sq_done, temp[0]]);
    savesq_done([...sq_done, temp[0]]);
    setsq_todo(updateditems);
    savesq_todo(updateditems);
  };
  const deleteItem2 = (index) => {
    const updateditems = sq_done.filter((elem) => {
      return index !== elem.ques;
    });
    const temp = sq_done.filter((elem) => {
      return index == elem.ques;
    });
    setsq_todo([...sq_todo, temp[0]]);
    savesq_todo([...sq_todo, temp[0]]);
    setsq_done(updateditems);
    savesq_done(updateditems);
  };
//   console.log(sq_done);
  return (
    <>
      <Script
        src="https://unpkg.com/react/umd/react.production.min.js"
        crossorigin
      ></Script>
      <Sidebar data={data} />
      <div className={styles.Array_body}>
        <h1>Stack & Queues</h1>
        <ProgressBar
          style={{ fontSize: "1.5rem", height: "3rem", borderRadius: "10px" }}
          animated
        />
        <div className={styles.flex}>
          {sq_todo.map((item) => {
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
        {sq_done.length != 0 && <h2 style={{marginLeft: "4rem"}}>Questions Completed:</h2>}
        <div className={styles.flex2}>
          {sq_done.length != 0 && sq_done.map((item) => {
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
      'https://dsapppi.herokuapp.com/Stack%20&%20Queues'
    );
    const data = await res.json();
  
    return {
      props: { data }, // will be passed to the page component as props
    };
  }

export default stackqueue;