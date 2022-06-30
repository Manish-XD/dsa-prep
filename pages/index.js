import Head from "next/head";
import styles from "../styles/Home.module.css";
import Sidebar from "../components/sidebar";
import Footer from "../components/footer";
import Link from "next/link";
import seven from "../public/Group7.png";
import Image from "next/image";

export default function Home({ data }) {
  // console.log(data);
  return (
    <div className={styles.container}>
      <Head>
        <title>375 DSA</title>
        <meta
          name="375 DSA Questions | By Aman Dhattarwal & Shradha di"
          content="375 DSA Tracker helps you build your confidence in solving any coding related question and helps you prepare for your placements. It is your personal web-based progress tracker based on 375 DSA Sheet by Aman Dhattarwal & Shradha Didi"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar data={data} />
      <main className={styles.main}>
        <div className={styles.main_landing}>
          <div>
            <div className={styles.main_heading}>
              <h1>&#123; &#125;   </h1>
              <h1 className={styles.main_heading2}>
                  375 Data structure and algorithms Practice Questions.
              </h1>
            </div>
            <p>
              Data structure and algorithms help in understanding the nature of
              the problem at a deeper level and thereby a better understanding
              of the world.
            </p>
          </div>
          <Image height={480} width={400} src={seven} />
        </div>
        <div className={styles.grid}>
        {data.map((item) => {
          return (
            <div className={styles.card} key={item.topic}>
              <h1>{item.topic}</h1>
              <p>Total {item.links.length} Questions</p>
              <div className={styles.link}>
              <Link href={`/topic/${item.topic}`}>Start Solving...</Link>
              </div>
            </div>
          );
        })}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  // const url = "https://dsapppi.herokuapp.com/Arrays";
  // let data = await fetch(url);
  // fetch(url).then(res => res.json()).then(data => console.log(data.links[0].link))
  const res = await fetch(`https://dsapppi.herokuapp.com`);
  const data = await res.json();
  return {
    props: { data }, // will be passed to the page component as props
  };
}
