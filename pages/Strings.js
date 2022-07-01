import React, { useState, useEffect } from "react";
import styles from "../styles/Array.module.css";
import Sidebar from "../components/sidebar";
import Script from "next/script";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProgressBar } from "react-bootstrap";

const String = ({data}) => {
    const [str_todo, setstr_todo] = useState(data.links);
  const [str_done, setstr_done] = useState([]);
  const [str_now, setstr_now] = useState(0);

  useEffect(() => {
    try {
      if (localStorage.getItem("str_todo")) {
        savestr_todo(JSON.parse(localStorage.getItem("str_todo")));
        setstr_todo(JSON.parse(localStorage.getItem("str_todo")));
      }
      else{
        localStorage.setItem("str_todo", JSON.stringify(str_todo));
      }
      if (localStorage.getItem("str_done")) {
        savestr_done(JSON.parse(localStorage.getItem("str_done")));
        setstr_done(JSON.parse(localStorage.getItem("str_done")));
      }
      else{
        localStorage.setItem("str_done", JSON.stringify(str_done));
      }
      if(localStorage.getItem("str_now")){
        setstr_now(JSON.parse(localStorage.getItem("str_now")));
        savestr_now(JSON.parse(localStorage.getItem("str_now")));
      }
      else{
        localStorage.setItem("str_now", JSON.stringify(str_now));
      }
    } catch (error) {
      console.error(error);
    }
  }, []);
  const savestr_todo = (items) => {
    localStorage.setItem("str_todo", JSON.stringify(items));
  };
  const savestr_done = (items) => {
    localStorage.setItem("str_done", JSON.stringify(items));
  };
  const savestr_now = (items) => {
    localStorage.setItem("str_now", JSON.stringify(items));
  };
  const deleteItem = (index) => {
    const updateditems = str_todo.filter((elem) => {
      return index !== elem.ques;
    });
    const temp = str_todo.filter((elem) => {
      return index == elem.ques;
    });

    setstr_done([...str_done, temp[0]]);
    savestr_done([...str_done, temp[0]]);
    setstr_todo(updateditems);
    savestr_todo(updateditems);
    setstr_now(str_done.length + 2);
    savestr_now(str_done.length + 2);
  };
  const deleteItem2 = (index) => {
    const updateditems = str_done.filter((elem) => {
      return index !== elem.ques;
    });
    const temp = str_done.filter((elem) => {
      return index == elem.ques;
    });
    setstr_todo([...str_todo, temp[0]]);
    savestr_todo([...str_todo, temp[0]]);
    setstr_done(updateditems);
    savestr_done(updateditems);
    setstr_now(str_done.length - 1);
    savestr_now(str_done.length - 1);
  };
//   console.log(str_done);
  return (
    <>
      <Script
        src="https://unpkg.com/react/umd/react.production.min.js"
        crossorigin
      ></Script>
      <Sidebar data={data} />
      <div className={styles.Array_body}>
        <h1>Strings</h1>
        <ProgressBar
          style={{ fontSize: "1.5rem", height: "3rem", borderRadius: "10px" }}
          animated
          now={(str_now / (data.links.length + 1)) * 100}
          label={parseInt((str_now / (data.links.length + 1)) * 100) + "%"}
          variant="success"
        />
        <div className={styles.flex}>
          {str_todo.map((item) => {
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
        {str_done.length != 0 && <h2 className={styles.complete}>Questions Completed:</h2>}
        <div className={styles.flex2}>
          {str_done.length != 0 && str_done.map((item) => {
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
      'https://dsapppi.herokuapp.com/Strings'
    );
    const data = await res.json();
  
    return {
      props: { data }, // will be passed to the page component as props
    };
  }

export default String