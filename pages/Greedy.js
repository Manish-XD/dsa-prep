import React, { useState, useEffect } from "react";
import styles from "../styles/Array.module.css";
import Sidebar from "../components/sidebar";
import Script from "next/script";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProgressBar } from "react-bootstrap";

const Greedy = ({data}) => {
    const [greedy_todo, setgreedy_todo] = useState(data.links);
  const [greedy_done, setgreedy_done] = useState([]);

  useEffect(() => {
    try {
      if (localStorage.getItem("greedy_todo")) {
        savegreedy_todo(JSON.parse(localStorage.getItem("greedy_todo")));
        setgreedy_todo(JSON.parse(localStorage.getItem("greedy_todo")));
      }
      else{
        localStorage.setItem("greedy_todo", JSON.stringify(greedy_todo));
      }
      if (localStorage.getItem("greedy_done")) {
        savegreedy_done(JSON.parse(localStorage.getItem("greedy_done")));
        setgreedy_done(JSON.parse(localStorage.getItem("greedy_done")));
      }
      else{
        localStorage.setItem("greedy_done", JSON.stringify(greedy_done));
      }
    } catch (error) {
      console.error(error);
    }
  }, []);
  const savegreedy_todo = (items) => {
    localStorage.setItem("greedy_todo", JSON.stringify(items));
  };
  const savegreedy_done = (items) => {
    localStorage.setItem("greedy_done", JSON.stringify(items));
  };
  const deleteItem = (index) => {
    const updateditems = greedy_todo.filter((elem) => {
      return index !== elem.ques;
    });
    const temp = greedy_todo.filter((elem) => {
      return index == elem.ques;
    });
    setgreedy_done([...greedy_done, temp[0]]);
    savegreedy_done([...greedy_done, temp[0]]);
    setgreedy_todo(updateditems);
    savegreedy_todo(updateditems);
  };
  const deleteItem2 = (index) => {
    const updateditems = greedy_done.filter((elem) => {
      return index !== elem.ques;
    });
    const temp = greedy_done.filter((elem) => {
      return index == elem.ques;
    });
    setgreedy_todo([...greedy_todo, temp[0]]);
    savegreedy_todo([...greedy_todo, temp[0]]);
    setgreedy_done(updateditems);
    savegreedy_done(updateditems);
  };
//   console.log(greedy_done);
  return (
    <>
      <Script
        src="https://unpkg.com/react/umd/react.production.min.js"
        crossorigin
      ></Script>
      <Sidebar data={data} />
      <div className={styles.Array_body}>
        <h1>Greedy</h1>
        <ProgressBar
          style={{ fontSize: "1.5rem", height: "3rem", borderRadius: "10px" }}
          animated
        />
        <div className={styles.flex}>
          {greedy_todo.map((item) => {
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
        {greedy_done.length != 0 && <h2 className={styles.complete}>Questions Completed:</h2>}
        <div className={styles.flex2}>
          {greedy_done.length != 0 && greedy_done.map((item) => {
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
      'https://dsapppi.herokuapp.com/Greedy'
    );
    const data = await res.json();
  
    return {
      props: { data }, // will be passed to the page component as props
    };
  }

export default Greedy