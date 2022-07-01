import React, { useState, useEffect } from "react";
import styles from "../styles/Array.module.css";
import Sidebar from "../components/sidebar";
import Script from "next/script";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProgressBar } from "react-bootstrap";

const TwoDArray = ({ data }) => {
  const [twod_todo, settwod_todo] = useState(data.links);
  const [twod_done, settwod_done] = useState([]);
  const [twod_now, settwod_now] = useState(0);

  useEffect(() => {
    try {
      if (localStorage.getItem("twod_todo")) {
        savetwod_todo(JSON.parse(localStorage.getItem("twod_todo")));
        settwod_todo(JSON.parse(localStorage.getItem("twod_todo")));
      } else {
        localStorage.setItem("twod_todo", JSON.stringify(twod_todo));
      }
      if (localStorage.getItem("twod_done")) {
        savetwod_done(JSON.parse(localStorage.getItem("twod_done")));
        settwod_done(JSON.parse(localStorage.getItem("twod_done")));
        settwod_now(twod_done.length);
      } else {
        localStorage.setItem("twod_done", JSON.stringify(twod_done));
      }
    } catch (error) {
      console.error(error);
    }
  }, []);
  const savetwod_todo = (items) => {
    localStorage.setItem("twod_todo", JSON.stringify(items));
  };
  const savetwod_done = (items) => {
    localStorage.setItem("twod_done", JSON.stringify(items));
  };
  const deleteItem = (index) => {
    const updateditems = twod_todo.filter((elem) => {
      return index !== elem.ques;
    });
    const temp = twod_todo.filter((elem) => {
      return index == elem.ques;
    });
    settwod_done([...twod_done, temp[0]]);
    savetwod_done([...twod_done, temp[0]]);
    settwod_todo(updateditems);
    savetwod_todo(updateditems);
    settwod_now(twod_done.length + 2);
    console.log(twod_now);
  };
  const deleteItem2 = (index) => {
    const updateditems = twod_done.filter((elem) => {
      return index !== elem.ques;
    });
    const temp = twod_done.filter((elem) => {
      return index == elem.ques;
    });
    settwod_todo([...twod_todo, temp[0]]);
    savetwod_todo([...twod_todo, temp[0]]);
    settwod_done(updateditems);
    savetwod_done(updateditems);
    settwod_now(twod_done.length - 1);
    console.log(twod_now);
  };
  //   console.log(twod_done);
  return (
    <>
      <Script
        src="https://unpkg.com/react/umd/react.production.min.js"
        crossorigin
      ></Script>
      <Sidebar data={data} />
      <div className={styles.Array_body}>
        <h1>2D Arrays</h1>
        <ProgressBar
          style={{ fontSize: "1.5rem", height: "3rem", borderRadius: "10px" }}
          animated
          now={(twod_now / (data.links.length + 1)) * 100}
          label={parseInt((twod_now / (data.links.length + 1)) * 100) + "%"}
          variant="success"
        />
        <div className={styles.flex}>
          {twod_todo.map((item) => {
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
        {twod_done.length != 0 && (
          <h2 className={styles.complete}>Questions Completed:</h2>
        )}
        <div className={styles.flex2}>
          {twod_done.length != 0 &&
            twod_done.map((item) => {
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
  );
};

export async function getServerSideProps(context) {
  const res = await fetch("https://dsapppi.herokuapp.com/2D-Arrays");
  const data = await res.json();

  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default TwoDArray;
