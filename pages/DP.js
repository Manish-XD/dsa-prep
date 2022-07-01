import React, { useState, useEffect } from "react";
import styles from "../styles/Array.module.css";
import Sidebar from "../components/sidebar";
import Script from "next/script";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProgressBar } from "react-bootstrap";

const Dp = ({data}) => {
    const [dp_todo, setdp_todo] = useState(data.links);
  const [dp_done, setdp_done] = useState([]);
  const [dp_now, setdp_now] = useState(0);

  useEffect(() => {
    try {
      if (localStorage.getItem("dp_todo")) {
        savedp_todo(JSON.parse(localStorage.getItem("dp_todo")));
        setdp_todo(JSON.parse(localStorage.getItem("dp_todo")));
      }
      else{
        localStorage.setItem("dp_todo", JSON.stringify(dp_todo));
      }
      if (localStorage.getItem("dp_done")) {
        savedp_done(JSON.parse(localStorage.getItem("dp_done")));
        setdp_done(JSON.parse(localStorage.getItem("dp_done")));
      }
      else{
        localStorage.setItem("dp_done", JSON.stringify(dp_done));
      }
      if(localStorage.getItem("dp_now")){
        setdp_now(JSON.parse(localStorage.getItem("dp_now")));
        savedp_now(JSON.parse(localStorage.getItem("dp_now")));
      }
      else{
        localStorage.setItem("dp_now", JSON.stringify(dp_now));
      }
    } catch (error) {
      console.error(error);
    }
  }, []);
  const savedp_todo = (items) => {
    localStorage.setItem("dp_todo", JSON.stringify(items));
  };
  const savedp_done = (items) => {
    localStorage.setItem("dp_done", JSON.stringify(items));
  };
  const savedp_now = (items) => {
    localStorage.setItem("dp_now", JSON.stringify(items));
  };
  const deleteItem = (index) => {
    const updateditems = dp_todo.filter((elem) => {
      return index !== elem.ques;
    });
    const temp = dp_todo.filter((elem) => {
      return index == elem.ques;
    });
    setdp_done([...dp_done, temp[0]]);
    savedp_done([...dp_done, temp[0]]);
    setdp_todo(updateditems);
    savedp_todo(updateditems);
    setdp_now(dp_done.length + 2);
    savedp_now(dp_done.length + 2);
  };
  const deleteItem2 = (index) => {
    const updateditems = dp_done.filter((elem) => {
      return index !== elem.ques;
    });
    const temp = dp_done.filter((elem) => {
      return index == elem.ques;
    });
    setdp_todo([...dp_todo, temp[0]]);
    savedp_todo([...dp_todo, temp[0]]);
    setdp_done(updateditems);
    savedp_done(updateditems);
    setdp_now(dp_done.length - 1);
    savedp_now(dp_done.length - 1);
  };
//   console.log(dp_done);
  return (
    <>
      <Script
        src="https://unpkg.com/react/umd/react.production.min.js"
        crossorigin
      ></Script>
      <Sidebar data={data} />
      <div className={styles.Array_body}>
        <h1>DP</h1>
        <ProgressBar
          style={{ fontSize: "1.5rem", height: "3rem", borderRadius: "10px" }}
          animated
          now={(dp_now / (data.links.length + 1)) * 100}
          label={parseInt((dp_now / (data.links.length + 1)) * 100) + "%"}
          variant="success"
        />
        <div className={styles.flex}>
          {dp_todo.map((item) => {
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
        {dp_done.length != 0 && <h2 className={styles.complete}>Questions Completed:</h2>}
        <div className={styles.flex2}>
          {dp_done.length != 0 && dp_done.map((item) => {
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
      'https://dsapppi.herokuapp.com/DP'
    );
    const data = await res.json();
  
    return {
      props: { data }, // will be passed to the page component as props
    };
  }

export default Dp