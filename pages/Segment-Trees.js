import React, { useState, useEffect } from "react";
import styles from "../styles/Array.module.css";
import Sidebar from "../components/sidebar";
import Script from "next/script";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProgressBar } from "react-bootstrap";

const Segment = ({data}) => {
    const [st_todo, setst_todo] = useState(data.links);
  const [st_done, setst_done] = useState([]);
  const [st_now, setst_now] = useState(0);

  useEffect(() => {
    try {
      if (localStorage.getItem("st_todo")) {
        savest_todo(JSON.parse(localStorage.getItem("st_todo")));
        setst_todo(JSON.parse(localStorage.getItem("st_todo")));
      }
      else{
        localStorage.setItem("st_todo", JSON.stringify(st_todo));
      }
      if (localStorage.getItem("st_done")) {
        savest_done(JSON.parse(localStorage.getItem("st_done")));
        setst_done(JSON.parse(localStorage.getItem("st_done")));
      }
      else{
        localStorage.setItem("st_done", JSON.stringify(st_done));
      }
      if(localStorage.getItem("st_now")){
        setst_now(JSON.parse(localStorage.getItem("st_now")));
        savest_now(JSON.parse(localStorage.getItem("st_now")));
      }
      else{
        localStorage.setItem("st_now", JSON.stringify(st_now));
      }
    } catch (error) {
      console.error(error);
    }
  }, []);
  const savest_todo = (items) => {
    localStorage.setItem("st_todo", JSON.stringify(items));
  };
  const savest_done = (items) => {
    localStorage.setItem("st_done", JSON.stringify(items));
  };
  const savest_now = (items) => {
    localStorage.setItem("st_now", JSON.stringify(items));
  };
  const deleteItem = (index) => {
    const updateditems = st_todo.filter((elem) => {
      return index !== elem.ques;
    });
    const temp = st_todo.filter((elem) => {
      return index == elem.ques;
    });
    setst_done([...st_done, temp[0]]);
    savest_done([...st_done, temp[0]]);
    setst_todo(updateditems);
    savest_todo(updateditems);
    setst_now(st_done.length + 2);
    savest_now(st_done.length + 2);
  };
  const deleteItem2 = (index) => {
    const updateditems = st_done.filter((elem) => {
      return index !== elem.ques;
    });
    const temp = st_done.filter((elem) => {
      return index == elem.ques;
    });
    setst_todo([...st_todo, temp[0]]);
    savest_todo([...st_todo, temp[0]]);
    setst_done(updateditems);
    savest_done(updateditems);
    setst_now(st_done.length - 1);
    savest_now(st_done.length - 1);
  };
//   console.log(st_done);
  return (
    <>
      <Script
        src="https://unpkg.com/react/umd/react.production.min.js"
        crossorigin
      ></Script>
      <Sidebar data={data} />
      <div className={styles.Array_body}>
        <h1>Segment Trees</h1>
        <ProgressBar
          style={{ fontSize: "1.5rem", height: "3rem", borderRadius: "10px" }}
          animated
          now={(st_now / (data.links.length + 1)) * 100}
          label={parseInt((st_now / (data.links.length + 1)) * 100) + "%"}
          variant="success"
        />
        <div className={styles.flex}>
          {st_todo.map((item) => {
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
        {st_done.length != 0 && <h2 className={styles.complete}>Questions Completed:</h2>}
        <div className={styles.flex2}>
          {st_done.length != 0 && st_done.map((item) => {
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
      'https://dsapppi.herokuapp.com/Segment-Trees'
    );
    const data = await res.json();
  
    return {
      props: { data }, // will be passed to the page component as props
    };
  }

export default Segment