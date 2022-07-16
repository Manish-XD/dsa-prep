import React, { useState, useEffect } from "react";
import styles from "../styles/Array.module.css";
import Sidebar from "../components/sidebar";
import Script from "next/script";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProgressBar } from "react-bootstrap";

const Graphs = ({data}) => {
    const [graph_todo, setgraph_todo] = useState(data.links);
  const [graph_done, setgraph_done] = useState([]);
  const [graph_now, setgraph_now] = useState(0);

  useEffect(() => {
    try {
      if (localStorage.getItem("graph_todo")) {
        savegraph_todo(JSON.parse(localStorage.getItem("graph_todo")));
        setgraph_todo(JSON.parse(localStorage.getItem("graph_todo")));
      }
      else{
        localStorage.setItem("graph_todo", JSON.stringify(graph_todo));
      }
      if (localStorage.getItem("graph_done")) {
        savegraph_done(JSON.parse(localStorage.getItem("graph_done")));
        setgraph_done(JSON.parse(localStorage.getItem("graph_done")));
      }
      else{
        localStorage.setItem("graph_done", JSON.stringify(graph_done));
      }
      if(localStorage.getItem("graph_now")){
        setgraph_now(JSON.parse(localStorage.getItem("graph_now")));
        savegraph_now(JSON.parse(localStorage.getItem("graph_now")));
      }
      else{
        localStorage.setItem("graph_now", JSON.stringify(graph_now));
      }
    } catch (error) {
      console.error(error);
    }
  }, []);
  const savegraph_todo = (items) => {
    localStorage.setItem("graph_todo", JSON.stringify(items));
  };
  const savegraph_done = (items) => {
    localStorage.setItem("graph_done", JSON.stringify(items));
  };
  const savegraph_now = (items) => {
    localStorage.setItem("graph_now", JSON.stringify(items));
  };
  const deleteItem = (index) => {
    const updateditems = graph_todo.filter((elem) => {
      return index !== elem.ques;
    });
    const temp = graph_todo.filter((elem) => {
      return index == elem.ques;
    });
    setgraph_done([...graph_done, temp[0]]);
    savegraph_done([...graph_done, temp[0]]);
    setgraph_todo(updateditems);
    savegraph_todo(updateditems);
    setgraph_now(graph_done.length + 2);
    savegraph_now(graph_done.length + 2);
  };
  const deleteItem2 = (index) => {
    const updateditems = graph_done.filter((elem) => {
      return index !== elem.ques;
    });
    const temp = graph_done.filter((elem) => {
      return index == elem.ques;
    });
    setgraph_todo([...graph_todo, temp[0]]);
    savegraph_todo([...graph_todo, temp[0]]);
    setgraph_done(updateditems);
    savegraph_done(updateditems);
    setgraph_now(graph_done.length - 1);
    savegraph_now(graph_done.length - 1);
  };
//   console.log(graph_done);
  return (
    <>
      <Script
        src="https://unpkg.com/react/umd/react.production.min.js"
        crossorigin
      ></Script>
      <Sidebar data={data} />
      <div className={styles.Array_body}>
        <h1>Graphs</h1>
        <ProgressBar
          style={{ fontSize: "1.5rem", height: "3rem", borderRadius: "10px", margin: "3rem 0" }}
          animated
          now={(graph_now / (data.links.length + 1)) * 100}
          label={parseInt((graph_now / (data.links.length + 1)) * 100) + "%"}
          variant="success"
        />
        <div className={styles.flex}>
          {graph_todo.map((item) => {
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
        {graph_done.length != 0 && <h2 className={styles.complete}>Questions Completed:</h2>}
        <div className={styles.flex2}>
          {graph_done.length != 0 && graph_done.map((item) => {
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
      'https://dsapppi.herokuapp.com/Graphs'
    );
    const data = await res.json();
  
    return {
      props: { data }, // will be passed to the page component as props
    };
  }

export default Graphs