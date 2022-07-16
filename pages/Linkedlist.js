import React, { useState, useEffect } from "react";
import styles from "../styles/Array.module.css";
import Sidebar from "../components/sidebar";
import Script from "next/script";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProgressBar } from "react-bootstrap";

const LinkedList = ({data}) => {
    const [link_todo, setlink_todo] = useState(data.links);
  const [link_done, setlink_done] = useState([]);
  const [link_now, setlink_now] = useState(0);

  useEffect(() => {
    try {
      if (localStorage.getItem("link_todo")) {
        savelink_todo(JSON.parse(localStorage.getItem("link_todo")));
        setlink_todo(JSON.parse(localStorage.getItem("link_todo")));
      }
      else{
        localStorage.setItem("link_todo", JSON.stringify(link_todo));
      }
      if (localStorage.getItem("link_done")) {
        savelink_done(JSON.parse(localStorage.getItem("link_done")));
        setlink_done(JSON.parse(localStorage.getItem("link_done")));
      }
      else{
        localStorage.setItem("link_done", JSON.stringify(link_done));
      }
      if(localStorage.getItem("link_now")){
        setlink_now(JSON.parse(localStorage.getItem("link_now")));
        savelink_now(JSON.parse(localStorage.getItem("link_now")));
      }
      else{
        localStorage.setItem("link_now", JSON.stringify(link_now));
      }
    } catch (error) {
      console.error(error);
    }
  }, []);
  const savelink_todo = (items) => {
    localStorage.setItem("link_todo", JSON.stringify(items));
  };
  const savelink_done = (items) => {
    localStorage.setItem("link_done", JSON.stringify(items));
  };
  const savelink_now = (items) => {
    localStorage.setItem("link_now", JSON.stringify(items));
  };
  const deleteItem = (index) => {
    const updateditems = link_todo.filter((elem) => {
      return index !== elem.ques;
    });
    const temp = link_todo.filter((elem) => {
      return index == elem.ques;
    });
    setlink_done([...link_done, temp[0]]);
    savelink_done([...link_done, temp[0]]);
    setlink_todo(updateditems);
    savelink_todo(updateditems);
    setlink_now(link_done.length + 2);
    savelink_now(link_done.length + 2);
  };
  const deleteItem2 = (index) => {
    const updateditems = link_done.filter((elem) => {
      return index !== elem.ques;
    });
    const temp = link_done.filter((elem) => {
      return index == elem.ques;
    });
    setlink_todo([...link_todo, temp[0]]);
    savelink_todo([...link_todo, temp[0]]);
    setlink_done(updateditems);
    savelink_done(updateditems);
    setlink_now(link_done.length - 1);
    savelink_now(link_done.length - 1);
  };
//   console.log(link_done);
  return (
    <>
      <Script
        src="https://unpkg.com/react/umd/react.production.min.js"
        crossorigin
      ></Script>
      <Sidebar data={data} />
      <div className={styles.Array_body}>
        <h1>Linked List</h1>
        <ProgressBar
          style={{ fontSize: "1.5rem", height: "3rem", borderRadius: "10px", margin: "3rem 0" }}
          animated
          now={(link_now / (data.links.length + 1)) * 100}
          label={parseInt((link_now / (data.links.length + 1)) * 100) + "%"}
          variant="success"
        />
        <div className={styles.flex}>
          {link_todo.map((item) => {
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
        {link_done.length != 0 && <h2 className={styles.complete}>Questions Completed:</h2>}
        <div className={styles.flex2}>
          {link_done.length != 0 && link_done.map((item) => {
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
      'https://dsapppi.herokuapp.com/Linkedlist'
    );
    const data = await res.json();
  
    return {
      props: { data }, // will be passed to the page component as props
    };
  }

export default LinkedList;