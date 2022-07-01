import React, { useState, useEffect } from "react";
import styles from "../styles/Array.module.css";
import Sidebar from "../components/sidebar";
import Script from "next/script";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProgressBar } from "react-bootstrap";

const Bitmani = ({data}) => {
    const [bm_todo, setbm_todo] = useState(data.links);
  const [bm_done, setbm_done] = useState([]);

  useEffect(() => {
    try {
      if (localStorage.getItem("bm_todo")) {
        savebm_todo(JSON.parse(localStorage.getItem("bm_todo")));
        setbm_todo(JSON.parse(localStorage.getItem("bm_todo")));
      }
      else{
        localStorage.setItem("bm_todo", JSON.stringify(bm_todo));
      }
      if (localStorage.getItem("bm_done")) {
        savebm_done(JSON.parse(localStorage.getItem("bm_done")));
        setbm_done(JSON.parse(localStorage.getItem("bm_done")));
      }
      else{
        localStorage.setItem("bm_done", JSON.stringify(bm_done));
      }
    } catch (error) {
      console.error(error);
    }
  }, []);
  const savebm_todo = (items) => {
    localStorage.setItem("bm_todo", JSON.stringify(items));
  };
  const savebm_done = (items) => {
    localStorage.setItem("bm_done", JSON.stringify(items));
  };
  const deleteItem = (index) => {
    const updateditems = bm_todo.filter((elem) => {
      return index !== elem.ques;
    });
    const temp = bm_todo.filter((elem) => {
      return index == elem.ques;
    });
    setbm_done([...bm_done, temp[0]]);
    savebm_done([...bm_done, temp[0]]);
    setbm_todo(updateditems);
    savebm_todo(updateditems);
  };
  const deleteItem2 = (index) => {
    const updateditems = bm_done.filter((elem) => {
      return index !== elem.ques;
    });
    const temp = bm_done.filter((elem) => {
      return index == elem.ques;
    });
    setbm_todo([...bm_todo, temp[0]]);
    savebm_todo([...bm_todo, temp[0]]);
    setbm_done(updateditems);
    savebm_done(updateditems);
  };
//   console.log(bm_done);
  return (
    <>
      <Script
        src="https://unpkg.com/react/umd/react.production.min.js"
        crossorigin
      ></Script>
      <Sidebar data={data} />
      <div className={styles.Array_body}>
        <h1>Bit Manipulation</h1>
        <ProgressBar
          style={{ fontSize: "1.5rem", height: "3rem", borderRadius: "10px" }}
          animated
        />
        <div className={styles.flex}>
          {bm_todo.map((item) => {
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
        {bm_done.length != 0 && <h2 className={styles.complete}>Questions Completed:</h2>}
        <div className={styles.flex2}>
          {bm_done.length != 0 && bm_done.map((item) => {
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
      'https://dsapppi.herokuapp.com/Bit-Manipulation'
    );
    const data = await res.json();
  
    return {
      props: { data }, // will be passed to the page component as props
    };
  }

export default Bitmani