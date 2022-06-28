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

  const [now, setnow] = useState(0);
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
  
  useEffect(() => {
    try {
      if (localStorage.getItem("items")) {
        setArr(JSON.parse(localStorage.getItem("items")));
        saveArray(JSON.parse(localStorage.getItem("items")));
      }
    } catch (error) {
      console.error(error)
      localStorage.clear()
    }
  }, [])

  const saveArray = (items) => {
    localStorage.setItem("items", JSON.stringify(items));
  }

  const [arr,setArr]= useState([]);


  const checkBox1 = () => {
    let newArray = [...arr];
    if (BgColor1 == "#47ce72") {
      newArray.pop("1");
      setArr(newArray);
      saveArray(newArray);
      console.log(typeof arr);
      setnow(now - 1);
      document.getElementById("1").style.order = `${data.links[0].no}`;
      setBgColor1("white");
    } else if ((BgColor1 = "white")) {
      newArray.push("1");
      setArr(newArray);
      saveArray(newArray);
      setnow(now + 1);
      document.getElementById("1").style.order = `${data.links.length + 1}`;
      setBgColor1("#47ce72");
    }
  };
  const checkBox2 = () => {
    let newArray = [...arr];
    if (BgColor2 == "#47ce72") {
      newArray.pop("2");
      setArr(newArray);
      saveArray(newArray);
      setnow(now - 1);
      document.getElementById("2").style.order = `${data.links[1].no}`;
      setBgColor2("white");
    } else if ((BgColor2 = "white")) {
      newArray.push("2");
      setArr(newArray);
      saveArray(newArray);
      setnow(now + 1);
      document.getElementById("2").style.order = `${data.links.length + 1}`;
      setBgColor2("#47ce72");
    }
  };
  const checkBox3 = () => {
    if (BgColor3 == "#47ce72") {
      setnow(now - 1);
      document.getElementById("3").style.order = `${data.links[2].no}`;
      setBgColor3("white");
    } else if ((BgColor3 = "white")) {
      setnow(now + 1);
      document.getElementById("3").style.order = `${data.links.length + 1}`;
      setBgColor3("#47ce72");
    }
  };
  const checkBox4 = () => {
    if (BgColor4 == "#47ce72") {
      setnow(now - 1);
      document.getElementById("4").style.order = `${data.links[3].no}`;
      setBgColor4("white");
    } else if ((BgColor4 = "white")) {
      setnow(now + 1);
      document.getElementById("4").style.order = `${data.links.length + 1}`;
      setBgColor4("#47ce72");
    }
  };
  const checkBox5 = () => {
    if (BgColor5 == "#47ce72") {
      setnow(now - 1);
      document.getElementById("5").style.order = `${data.links[4].no}`;
      setBgColor5("white");
    } else if ((BgColor5 = "white")) {
      setnow(now + 1);
      document.getElementById("5").style.order = `${data.links.length + 1}`;
      setBgColor5("#47ce72");
    }
  };
  const checkBox6 = () => {
    if (BgColor6 == "#47ce72") {
      setnow(now - 1);
      document.getElementById("6").style.order = `${data.links[5].no}`;
      setBgColor6("white");
    } else if ((BgColor6 = "white")) {
      setnow(now + 1);
      document.getElementById("6").style.order = `${data.links.length + 1}`;
      setBgColor6("#47ce72");
    }
  };
  const checkBox7 = () => {
    if (BgColor7 == "#47ce72") {
      setnow(now - 1);
      document.getElementById("7").style.order = `${data.links[6].no}`;
      setBgColor7("white");
    } else if ((BgColor7 = "white")) {
      setnow(now + 1);
      document.getElementById("7").style.order = `${data.links.length + 1}`;
      setBgColor7("#47ce72");
    }
  };
  const checkBox8 = () => {
    if (BgColor8 == "#47ce72") {
      setnow(now - 1);
      document.getElementById("8").style.order = `${data.links[7].no}`;
      setBgColor8("white");
    } else if ((BgColor8 = "white")) {
      setnow(now + 1);
      document.getElementById("8").style.order = `${data.links.length + 1}`;
      setBgColor8("#47ce72");
    }
  };
  const checkBox9 = () => {
    if (BgColor9 == "#47ce72") {
      setnow(now - 1);
      document.getElementById("9").style.order = `${data.links[8].no}`;
      setBgColor9("white");
    } else if ((BgColor9 = "white")) {
      setnow(now + 1);
      document.getElementById("9").style.order = `${data.links.length + 1}`;
      setBgColor9("#47ce72");
    }
  };
  const checkBox10 = () => {
    if (BgColor10 == "#47ce72") {
      setnow(now - 1);
      document.getElementById("10").style.order = `${data.links[9].no}`;
      setBgColor10("white");
    } else if ((BgColor10 = "white")) {
      setnow(now + 1);
      document.getElementById("10").style.order = `${data.links.length + 1}`;
      setBgColor10("#47ce72");
    }
  };
  const checkBox11 = () => {
    if (BgColor11 == "#47ce72") {
      setnow(now - 1);
      document.getElementById("11").style.order = `${data.links[10].no}`;
      setBgColor11("white");
    } else if ((BgColor11 = "white")) {
      setnow(now + 1);
      document.getElementById("11").style.order = `${data.links.length + 1}`;
      setBgColor11("#47ce72");
    }
  };
  const checkBox12 = () => {
    if (BgColor12 == "#47ce72") {
      setnow(now - 1);
      document.getElementById("12").style.order = `${data.links[11].no}`;
      setBgColor12("white");
    } else if ((BgColor12 = "white")) {
      setnow(now + 1);
      document.getElementById("12").style.order = `${data.links.length + 1}`;
      setBgColor12("#47ce72");
    }
  };
  const checkBox13 = () => {
    if (BgColor13 == "#47ce72") {
      setnow(now - 1);
      document.getElementById("13").style.order = `${data.links[12].no}`;
      setBgColor13("white");
    } else if ((BgColor13 = "white")) {
      setnow(now + 1);
      document.getElementById("13").style.order = `${data.links.length + 1}`;
      setBgColor13("#47ce72");
    }
  };
  const checkBox14 = () => {
    if (BgColor14 == "#47ce72") {
      setnow(now - 1);
      document.getElementById("14").style.order = `${data.links[13].no}`;
      setBgColor14("white");
    } else if ((BgColor14 = "white")) {
      setnow(now + 1);
      document.getElementById("14").style.order = `${data.links.length + 1}`;
      setBgColor14("#47ce72");
    }
  };
  const checkBox15 = () => {
    if (BgColor15 == "#47ce72") {
      setnow(now - 1);
      document.getElementById("15").style.order = `${data.links[14].no}`;
      setBgColor15("white");
    } else if ((BgColor15 = "white")) {
      setnow(now + 1);
      document.getElementById("15").style.order = `${data.links.length + 1}`;
      setBgColor15("#47ce72");
    }
  };
  const checkBox16 = () => {
    if (BgColor16 == "#47ce72") {
      setnow(now - 1);
      document.getElementById("16").style.order = `${data.links[15].no}`;
      setBgColor16("white");
    } else if ((BgColor16 = "white")) {
      setnow(now + 1);
      document.getElementById("16").style.order = `${data.links.length + 1}`;
      setBgColor16("#47ce72");
    }
  };
  const checkBox17 = () => {
    if (BgColor17 == "#47ce72") {
      setnow(now - 1);
      document.getElementById("17").style.order = `${data.links[16].no}`;
      setBgColor17("white");
    } else if ((BgColor17 = "white")) {
      setnow(now + 1);
      document.getElementById("17").style.order = `${data.links.length + 1}`;
      setBgColor17("#47ce72");
    }
  };
  const checkBox18 = () => {
    if (BgColor18 == "#47ce72") {
      setnow(now - 1);
      document.getElementById("18").style.order = `${data.links[17].no}`;
      setBgColor18("white");
    } else if ((BgColor18 = "white")) {
      setnow(now + 1);
      document.getElementById("18").style.order = `${data.links.length + 1}`;
      setBgColor18("#47ce72");
    }
  };
  const checkBox19 = () => {
    if (BgColor19 == "#47ce72") {
      setnow(now - 1);
      document.getElementById("19").style.order = `${data.links[18].no}`;
      setBgColor19("white");
    } else if ((BgColor19 = "white")) {
      setnow(now + 1);
      document.getElementById("19").style.order = `${data.links.length + 1}`;
      setBgColor19("#47ce72");
    }
  };
  const checkBox20 = () => {
    if (BgColor20 == "#47ce72") {
      setnow(now - 1);
      document.getElementById("20").style.order = `${data.links[19].no}`;
      setBgColor20("white");
    } else if ((BgColor20 = "white")) {
      setnow(now + 1);
      document.getElementById("20").style.order = `${data.links.length + 1}`;
      setBgColor20("#47ce72");
    }
  };
  const checkBox21 = () => {
    if (BgColor21 == "#47ce72") {
      setnow(now - 1);
      document.getElementById("21").style.order = `${data.links[20].no}`;
      setBgColor21("white");
    } else if ((BgColor21 = "white")) {
      setnow(now + 1);
      document.getElementById("21").style.order = `${data.links.length + 1}`;
      setBgColor21("#47ce72");
    }
  };
  const checkBox22 = () => {
    if (BgColor22 == "#47ce72") {
      setnow(now - 1);
      document.getElementById("22").style.order = `${data.links[21].no}`;
      setBgColor22("white");
    } else if ((BgColor22 = "white")) {
      setnow(now + 1);
      document.getElementById("22").style.order = `${data.links.length + 1}`;
      setBgColor22("#47ce72");
    }
  };
  const checkBox23 = () => {
    if (BgColor23 == "#47ce72") {
      setnow(now - 1);
      document.getElementById("23").style.order = `${data.links[22].no}`;
      setBgColor23("white");
    } else if ((BgColor23 = "white")) {
      setnow(now + 1);
      document.getElementById("23").style.order = `${data.links.length + 1}`;
      setBgColor23("#47ce72");
    }
  };
  const checkBox24 = () => {
    if (BgColor24 == "#47ce72") {
      setnow(now - 1);
      document.getElementById("24").style.order = `${data.links[23].no}`;
      setBgColor24("white");
    } else if ((BgColor24 = "white")) {
      setnow(now + 1);
      document.getElementById("24").style.order = `${data.links.length + 1}`;
      setBgColor24("#47ce72");
    }
  };
  const checkBox25 = () => {
    if (BgColor25 == "#47ce72") {
      setnow(now - 1);
      document.getElementById("25").style.order = `${data.links[24].no}`;
      setBgColor25("white");
    } else if ((BgColor25 = "white")) {
      setnow(now + 1);
      document.getElementById("25").style.order = `${data.links.length + 1}`;
      setBgColor25("#47ce72");
    }
  };
  const checkBox26 = () => {
    if (BgColor26 == "#47ce72") {
      setnow(now - 1);
      document.getElementById("26").style.order = `${data.links[25].no}`;
      setBgColor26("white");
    } else if ((BgColor26 = "white")) {
      setnow(now + 1);
      document.getElementById("26").style.order = `${data.links.length + 1}`;
      setBgColor26("#47ce72");
    }
  };
  const checkBox27 = () => {
    if (BgColor27 == "#47ce72") {
      setnow(now - 1);
      document.getElementById("27").style.order = `${data.links[26].no}`;
      setBgColor27("white");
    } else if ((BgColor27 = "white")) {
      setnow(now + 1);
      document.getElementById("27").style.order = `${data.links.length + 1}`;
      setBgColor27("#47ce72");
    }
  };
  const checkBox28 = () => {
    if (BgColor28 == "#47ce72") {
      setnow(now - 1);
      document.getElementById("28").style.order = `${data.links[27].no}`;
      setBgColor28("white");
    } else if ((BgColor28 = "white")) {
      setnow(now + 1);
      document.getElementById("28").style.order = `${data.links.length + 1}`;
      setBgColor28("#47ce72");
    }
  };
  const checkBox29 = () => {
    if (BgColor29 == "#47ce72") {
      setnow(now - 1);
      document.getElementById("29").style.order = `${data.links[28].no}`;
      setBgColor29("white");
    } else if ((BgColor29 = "white")) {
      setnow(now + 1);
      document.getElementById("29").style.order = `${data.links.length + 1}`;
      setBgColor29("#47ce72");
    }
  };
  const checkBox30 = () => {
    if (BgColor30 == "#47ce72") {
      setnow(now - 1);
      document.getElementById("30").style.order = `${data.links[29].no}`;
      setBgColor30("white");
    } else if ((BgColor30 = "white")) {
      setnow(now + 1);
      document.getElementById("30").style.order = `${data.links.length + 1}`;
      setBgColor30("#47ce72");
    }
  };

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
          <span style={{color : `${now==0?"red":"#47ce72"}`}}>Completed: {now}/{data.links.length}</span>
        </div>
        <div className={styles.flex}>
        {data.links.map((item) => {
          return (
            <div className={styles.flex_items} style = {{order: `${item.no}`}} id={item.no} key={item.no}>
              <button
                style={{ background: eval(`BgColor${item.no}`) }}
                onClick={eval(`checkBox${item.no}`)}
              ></button>
              <span className={styles.sno}>{item.no}</span>
              <a className={styles.ques} target="_blank" href={`${item.link}`}>
                {item.ques}
              </a>
              <span style={{color: `${(item.level != "Hard")?((item.level != "Medium")?"yellow":"orange"):"red"}`}} className={styles.level}>{item.level}</span>
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
