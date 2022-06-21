import React, { useState, useEffect } from "react";
import styles from "../../styles/Array.module.css";
import Sidebar from "../../components/sidebar";
import Script from "next/script";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProgressBar } from "react-bootstrap";
import { useRouter } from "next/router";
// import Ques from "../components/ques";

// const getLocalItems = () => {
//   let list = localStorage.getItem('lists');
//   console.log(list);

//   if (list) {
//       return JSON.parse(localStorage.getItem('lists'));
//   } else {
//       return [];
//   }
// }
const Arrays = ({ data }) => {
    const router = useRouter();
    const { slug } = router.query;
  const [now, setnow] = useState(0);

  // const [items, setItems] = useState(getLocalItems());
  // for (let index = 0; index < data.links.length; index++) {
  //   `const [BgColor${index}, setBgColor${index}]` = useState("white");
  // }
  const [BgColor1, setBgColor1] = useState("white");
  const [BgColor2, setBgColor2] = useState("white");
  const [BgColor3, setBgColor3] = useState("white");
  const [BgColor4, setBgColor4] = useState("white");
  const [BgColor5, setBgColor5] = useState("white");
  const [BgColor6, setBgColor6] = useState("white");
  const [BgColor7, setBgColor7] = useState("white");
  const [BgColor8, setBgColor8] = useState("white");
  const [BgColor9, setBgColor9] = useState("white");
  const [BgColor10, setBgColor10] = useState("white");
  const [BgColor11, setBgColor11] = useState("white");
  const [BgColor12, setBgColor12] = useState("white");
  const [BgColor13, setBgColor13] = useState("white");
  const [BgColor14, setBgColor14] = useState("white");
  const [BgColor15, setBgColor15] = useState("white");
  const [BgColor16, setBgColor16] = useState("white");
  const [BgColor17, setBgColor17] = useState("white");
  const [BgColor18, setBgColor18] = useState("white");
  const [BgColor19, setBgColor19] = useState("white");
  const [BgColor20, setBgColor20] = useState("white");
  const [BgColor21, setBgColor21] = useState("white");
  const [BgColor22, setBgColor22] = useState("white");
  const [BgColor23, setBgColor23] = useState("white");
  const [BgColor24, setBgColor24] = useState("white");
  const [BgColor25, setBgColor25] = useState("white");
  const [BgColor26, setBgColor26] = useState("white");
  const [BgColor27, setBgColor27] = useState("white");
  const [BgColor28, setBgColor28] = useState("white");
  const [BgColor29, setBgColor29] = useState("white");
  const [BgColor30, setBgColor30] = useState("white");
  const done_array= [];

  // const addItem1 = () => {
  //   done_array.push(data.links[0].link);
  //   localStorage.setItem('done_array', done_array);
  // }
  // const addItem2 = () => {
  //   done_array.push(data.links[1].link)
  //   localStorage.setItem('done_array', done_array);
  // }


  const checkBox1 = () => {
    if (BgColor1 == "#47ce72") {
      setnow(now - 1);
      setBgColor1("white");
    } else if ((BgColor1 = "white")) {
      setnow(now + 1);
      setBgColor1("#47ce72");
    }
  };
  const checkBox2 = () => {
    if (BgColor2 == "#47ce72") {
      setnow(now - 1);
      setBgColor2("white");
    } else if ((BgColor2 = "white")) {
      setnow(now + 1);
      setBgColor2("#47ce72");
    }
  };
  const checkBox3 = () => {
    if (BgColor3 == "#47ce72") {
      setnow(now - 1);
      setBgColor3("white");
    } else if ((BgColor3 = "white")) {
      setnow(now + 1);
      setBgColor3("#47ce72");
    }
  };
  const checkBox4 = () => {
    if (BgColor4 == "#47ce72") {
      setnow(now - 1);
      setBgColor4("white");
    } else if ((BgColor4 = "white")) {
      setnow(now + 1);
      setBgColor4("#47ce72");
    }
  };
  const checkBox5 = () => {
    if (BgColor5 == "#47ce72") {
      setnow(now - 1);
      setBgColor5("white");
    } else if ((BgColor5 = "white")) {
      setnow(now + 1);
      setBgColor5("#47ce72");
    }
  };
  const checkBox6 = () => {
    if (BgColor6 == "#47ce72") {
      setnow(now - 1);
      setBgColor6("white");
    } else if ((BgColor6 = "white")) {
      setnow(now + 1);
      setBgColor6("#47ce72");
    }
  };
  const checkBox7 = () => {
    if (BgColor7 == "#47ce72") {
      setnow(now - 1);
      setBgColor7("white");
    } else if ((BgColor7 = "white")) {
      setnow(now + 1);
      setBgColor7("#47ce72");
    }
  };
  const checkBox8 = () => {
    if (BgColor8 == "#47ce72") {
      setnow(now - 1);
      setBgColor8("white");
    } else if ((BgColor8 = "white")) {
      setnow(now + 1);
      setBgColor8("#47ce72");
    }
  };
  const checkBox9 = () => {
    if (BgColor9 == "#47ce72") {
      setnow(now - 1);
      setBgColor9("white");
    } else if ((BgColor9 = "white")) {
      setnow(now + 1);
      setBgColor9("#47ce72");
    }
  };
  const checkBox10 = () => {
    if (BgColor10 == "#47ce72") {
      setnow(now - 1);
      setBgColor10("white");
    } else if ((BgColor10 = "white")) {
      setnow(now + 1);
      setBgColor10("#47ce72");
    }
  };
  const checkBox11 = () => {
    if (BgColor11 == "#47ce72") {
      setnow(now - 1);
      setBgColor11("white");
    } else if ((BgColor11 = "white")) {
      setnow(now + 1);
      setBgColor11("#47ce72");
    }
  };
  const checkBox12 = () => {
    if (BgColor12 == "#47ce72") {
      setnow(now - 1);
      setBgColor12("white");
    } else if ((BgColor12 = "white")) {
      setnow(now + 1);
      setBgColor12("#47ce72");
    }
  };
  const checkBox13 = () => {
    if (BgColor13 == "#47ce72") {
      setnow(now - 1);
      setBgColor13("white");
    } else if ((BgColor13 = "white")) {
      setnow(now + 1);
      setBgColor13("#47ce72");
    }
  };
  const checkBox14 = () => {
    if (BgColor14 == "#47ce72") {
      setnow(now - 1);
      setBgColor14("white");
    } else if ((BgColor14 = "white")) {
      setnow(now + 1);
      setBgColor14("#47ce72");
    }
  };
  const checkBox15 = () => {
    if (BgColor15 == "#47ce72") {
      setnow(now - 1);
      setBgColor15("white");
    } else if ((BgColor15 = "white")) {
      setnow(now + 1);
      setBgColor15("#47ce72");
    }
  };
  const checkBox16 = () => {
    if (BgColor16 == "#47ce72") {
      setnow(now - 1);
      setBgColor16("white");
    } else if ((BgColor16 = "white")) {
      setnow(now + 1);
      setBgColor16("#47ce72");
    }
  };
  const checkBox17 = () => {
    if (BgColor17 == "#47ce72") {
      setnow(now - 1);
      setBgColor17("white");
    } else if ((BgColor17 = "white")) {
      setnow(now + 1);
      setBgColor17("#47ce72");
    }
  };
  const checkBox18 = () => {
    if (BgColor18 == "#47ce72") {
      setnow(now - 1);
      setBgColor18("white");
    } else if ((BgColor18 = "white")) {
      setnow(now + 1);
      setBgColor18("#47ce72");
    }
  };
  const checkBox19 = () => {
    if (BgColor19 == "#47ce72") {
      setnow(now - 1);
      setBgColor19("white");
    } else if ((BgColor19 = "white")) {
      setnow(now + 1);
      setBgColor19("#47ce72");
    }
  };
  const checkBox20 = () => {
    if (BgColor20 == "#47ce72") {
      setnow(now - 1);
      setBgColor20("white");
    } else if ((BgColor20 = "white")) {
      setnow(now + 1);
      setBgColor20("#47ce72");
    }
  };
  const checkBox21 = () => {
    if (BgColor21 == "#47ce72") {
      setnow(now - 1);
      setBgColor21("white");
    } else if ((BgColor21 = "white")) {
      setnow(now + 1);
      setBgColor21("#47ce72");
    }
  };
  const checkBox22 = () => {
    if (BgColor22 == "#47ce72") {
      setnow(now - 1);
      setBgColor22("white");
    } else if ((BgColor22 = "white")) {
      setnow(now + 1);
      setBgColor22("#47ce72");
    }
  };
  const checkBox23 = () => {
    if (BgColor23 == "#47ce72") {
      setnow(now - 1);
      setBgColor23("white");
    } else if ((BgColor23 = "white")) {
      setnow(now + 1);
      setBgColor23("#47ce72");
    }
  };
  const checkBox24 = () => {
    if (BgColor24 == "#47ce72") {
      setnow(now - 1);
      setBgColor24("white");
    } else if ((BgColor24 = "white")) {
      setnow(now + 1);
      setBgColor24("#47ce72");
    }
  };
  const checkBox25 = () => {
    if (BgColor25 == "#47ce72") {
      setnow(now - 1);
      setBgColor25("white");
    } else if ((BgColor25 = "white")) {
      setnow(now + 1);
      setBgColor25("#47ce72");
    }
  };
  const checkBox26 = () => {
    if (BgColor26 == "#47ce72") {
      setnow(now - 1);
      setBgColor26("white");
    } else if ((BgColor26 = "white")) {
      setnow(now + 1);
      setBgColor26("#47ce72");
    }
  };
  const checkBox27 = () => {
    if (BgColor27 == "#47ce72") {
      setnow(now - 1);
      setBgColor27("white");
    } else if ((BgColor27 = "white")) {
      setnow(now + 1);
      setBgColor27("#47ce72");
    }
  };
  const checkBox28 = () => {
    if (BgColor28 == "#47ce72") {
      setnow(now - 1);
      setBgColor28("white");
    } else if ((BgColor28 = "white")) {
      setnow(now + 1);
      setBgColor28("#47ce72");
    }
  };
  const checkBox29 = () => {
    if (BgColor29 == "#47ce72") {
      setnow(now - 1);
      setBgColor29("white");
    } else if ((BgColor29 = "white")) {
      setnow(now + 1);
      setBgColor29("#47ce72");
    }
  };
  const checkBox30 = () => {
    if (BgColor30 == "#47ce72") {
      setnow(now - 1);
      setBgColor30("white");
    } else if ((BgColor30 = "white")) {
      setnow(now + 1);
      setBgColor30("#47ce72");
    }
  };
  const btn_Array = [];
  const index_array = [];
  for (let index = 0; index < data.links.length; index++) {
    btn_Array.push(<><button
    key={data.links[index].link}
      style={{ background: eval(`BgColor${index+1}`) }}
      onClick={eval(`checkBox${index+1}`)}
      id={data.links[index].link}
    ></button></>)
  }
  for (let index = 0; index < data.links.length; index++) {
    index_array.push(<span>{index+1}.</span>)
  }
//   useEffect(() => {
//     localStorage.setItem('lists', JSON.stringify(items))
//  }, [items]);
  return (
    <>
      <Script
        src="https://unpkg.com/react/umd/react.production.min.js"
        crossorigin
      ></Script>
      <Sidebar />
      <div className={styles.Array_body}>
        <h1>{slug}</h1>
        <ProgressBar
          style={{ fontSize: "1.5rem", height: "3rem", borderRadius: "10px" }}
          animated
          label={`${parseInt((now / data.links.length) * 100)}%`}
          variant="success"
          now={(now / data.links.length) * 100}
        />
        <div className={styles.progress_info}>
          Completed: {now}/{data.links.length}
        </div>
        <div className={styles.list_items}>
          {/* <div className={styles.list_btns} dangerouslySetInnerHTML={{__html: btn_Array}}> */}
          <div className={styles.list_btns}>
            {btn_Array}
          </div>
          <div className={styles.list_btns}>
            {index_array}
          </div>
          <div className={styles.ques_link}>
          {data.links.map((item) => {
            return (
              <p key={item.link}>
                {/* <input type="checkbox" onChange={checkBox}/> */}
                {/* <button style={{background: `${BgColor}`}} onClick={checkBox}></button> */}
                {/* <p> */}
                  <a target="_blank" href={`${item.link}`}>
                    {item.ques}
                  </a>
                {/* </p> */}
              </p>
            );
          })}
          </div>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  const res = await fetch(`https://dsapppi.herokuapp.com/${context.query.slug}`);
  const data = await res.json();
  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default Arrays;
