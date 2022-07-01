import React, { useState, useEffect } from "react";
import styles from "../../styles/Array.module.css";
import Sidebar from "../../components/sidebar";
import Script from "next/script";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProgressBar } from "react-bootstrap";
import { useRouter } from "next/router";

const Arrays = ({ data }) => {
  const router = useRouter();
  const { slug } = router.query;
  const [todo, setTodo] = useState(data.links);
  const [done, setDone] = useState([]);

  useEffect(() => {
    try {
      if (localStorage.getItem("todo")) {
        saveTodo(JSON.parse(localStorage.getItem("todo")));
        setTodo(JSON.parse(localStorage.getItem("todo")));
      }
      else{
        localStorage.setItem("todo", JSON.stringify(todo));
      }
      if (localStorage.getItem("done")) {
        saveDone(JSON.parse(localStorage.getItem("done")));
        setDone(JSON.parse(localStorage.getItem("done")));
      }
      else{
        localStorage.setItem("done", JSON.stringify(done));
      }
    } catch (error) {
      console.error(error);
      // localStorage.clear();
    }
  }, []);
  const saveTodo = (items) => {
    localStorage.setItem("todo", JSON.stringify(items));
  };
  const saveDone = (items) => {
    localStorage.setItem("done", JSON.stringify(items));
  };
  const deleteItem = (index) => {
    const updateditems = todo.filter((elem) => {
      return index !== elem.ques;
    });
    const temp = todo.filter((elem) => {
      return index == elem.ques;
    });
    setDone([...done, temp[0]]);
    saveDone([...done, temp[0]]);
    setTodo(updateditems);
    saveTodo(updateditems);
  };
  console.log(done);
  return (
    <>
      <Script
        src="https://unpkg.com/react/umd/react.production.min.js"
        crossorigin
      ></Script>
      <Sidebar data={data} />
      <div className={styles.Array_body}>
        <h1>{slug}</h1>
        <ProgressBar
          style={{ fontSize: "1.5rem", height: "3rem", borderRadius: "10px" }}
          animated
        />
        <div className={styles.flex}>
          {todo.map((item) => {
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
        <div className={styles.flex}>
          {done.map((item) => {
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
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  const res = await fetch(
    `https://dsapppi.herokuapp.com/${context.query.slug}`
  );
  const data = await res.json();

  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default Arrays;
