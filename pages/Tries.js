import React, { useState, useEffect } from "react";
import styles from "../styles/Array.module.css";
import Sidebar from "../components/sidebar";
import Script from "next/script";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProgressBar } from "react-bootstrap";

const Tries = ({data}) => {
    const [tries_todo, settries_todo] = useState(data.links);
  const [tries_done, settries_done] = useState([]);
  const [tries_now, settries_now] = useState(0);

  useEffect(() => {
    try {
      if (localStorage.getItem("tries_todo")) {
        savetries_todo(JSON.parse(localStorage.getItem("tries_todo")));
        settries_todo(JSON.parse(localStorage.getItem("tries_todo")));
      }
      else{
        localStorage.setItem("tries_todo", JSON.stringify(tries_todo));
      }
      if (localStorage.getItem("tries_done")) {
        savetries_done(JSON.parse(localStorage.getItem("tries_done")));
        settries_done(JSON.parse(localStorage.getItem("tries_done")));
      }
      else{
        localStorage.setItem("tries_done", JSON.stringify(tries_done));
      }
      if(localStorage.getItem("tries_now")){
        settries_now(JSON.parse(localStorage.getItem("tries_now")));
        savetries_now(JSON.parse(localStorage.getItem("tries_now")));
      }
      else{
        localStorage.setItem("tries_now", JSON.stringify(tries_now));
      }
    } catch (error) {
      console.error(error);
    }
  }, []);
  const savetries_todo = (items) => {
    localStorage.setItem("tries_todo", JSON.stringify(items));
  };
  const savetries_done = (items) => {
    localStorage.setItem("tries_done", JSON.stringify(items));
  };
  const savetries_now = (items) => {
    localStorage.setItem("tries_now", JSON.stringify(items));
  };
  const deleteItem = (index) => {
    const updateditems = tries_todo.filter((elem) => {
      return index !== elem.ques;
    });
    const temp = tries_todo.filter((elem) => {
      return index == elem.ques;
    });
    settries_done([...tries_done, temp[0]]);
    savetries_done([...tries_done, temp[0]]);
    settries_todo(updateditems);
    savetries_todo(updateditems);
    settries_now(tries_done.length + 2);
    savetries_now(tries_done.length + 2);
  };
  const deleteItem2 = (index) => {
    const updateditems = tries_done.filter((elem) => {
      return index !== elem.ques;
    });
    const temp = tries_done.filter((elem) => {
      return index == elem.ques;
    });
    settries_todo([...tries_todo, temp[0]]);
    savetries_todo([...tries_todo, temp[0]]);
    settries_done(updateditems);
    savetries_done(updateditems);
    settries_now(tries_done.length - 1);
    savetries_now(tries_done.length - 1);
  };
//   console.log(tries_done);
  return (
    <>
      <Script
        src="https://unpkg.com/react/umd/react.production.min.js"
        crossorigin
      ></Script>
      <Sidebar data={data} />
      <div className={styles.Array_body}>
        <h1>Tries</h1>
        <ProgressBar
          style={{ fontSize: "1.5rem", height: "3rem", borderRadius: "10px", margin: "3rem 0" }}
          animated
          now={(tries_now / (data.links.length + 1)) * 100}
          label={parseInt((tries_now / (data.links.length + 1)) * 100) + "%"}
          variant="success"
        />
        <div className={styles.flex}>
          {tries_todo.map((item) => {
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
        {tries_done.length != 0 && <h2 className={styles.complete}>Questions Completed:</h2>}
        <div className={styles.flex2}>
          {tries_done.length != 0 && tries_done.map((item) => {
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
      'https://dsapppi.herokuapp.com/Tries'
    );
    const data = await res.json();
  
    return {
      props: { data }, // will be passed to the page component as props
    };
  }

export default Tries