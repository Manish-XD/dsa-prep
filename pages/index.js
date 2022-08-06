import Head from "next/head";
import styles from "../styles/Home.module.css";
import Sidebar from "../components/sidebar";
import Footer from "../components/footer";
import Link from "next/link";
import seven from "../public/Group7.png";
import Image from "next/image";
import { useState, useEffect } from "react";
// import Script from "next/script";

export default function Home({ data }) {
    const [arr, setArr] = useState(0);
    const [tdarr, setTdarr] = useState(0);
    const [str, setStr] = useState(0);
    const [search, setSearch] = useState(0);
    const [back, setBack] = useState(0);
    const [ll, setLl] = useState(0);
    const [sq, setSq] = useState(0);
    const [greed, setGreed] = useState(0);
    const [bt, setBt] = useState(0);
    const [bst, setBst] = useState(0);
    const [heap, setHeap] = useState(0);
    const [graph, setGraph] = useState(0);
    const [tries, setTries] = useState(0);
    const [dp, setDp] = useState(0);
    const [bit, setBit] = useState(0);
    const [st, setSt] = useState(0);

    useEffect(() => {
        try {
            if (localStorage.getItem("twod_now")) {
                setTdarr(JSON.parse(localStorage.getItem("twod_now")));
            }
            if (localStorage.getItem("arr_now")) {
                setArr(JSON.parse(localStorage.getItem("arr_now")));
            }
            if (localStorage.getItem("back_now")) {
                setBack(JSON.parse(localStorage.getItem("back_now")));
            }
            if (localStorage.getItem("bst_now")) {
                setBst(JSON.parse(localStorage.getItem("bst_now")));
            }
            if (localStorage.getItem("bt_now")) {
                setBt(JSON.parse(localStorage.getItem("bt_now")));
            }
            if (localStorage.getItem("bm_now")) {
                setBit(JSON.parse(localStorage.getItem("bm_now")));
            }
            if (localStorage.getItem("dp_now")) {
                setDp(JSON.parse(localStorage.getItem("dp_now")));
            }
            if (localStorage.getItem("graph_now")) {
                setGraph(JSON.parse(localStorage.getItem("graph_now")));
            }
            if (localStorage.getItem("greedy_now")) {
                setGreed(JSON.parse(localStorage.getItem("greedy_now")));
            }
            if (localStorage.getItem("heap_now")) {
                setHeap(JSON.parse(localStorage.getItem("heap_now")));
            }
            if (localStorage.getItem("link_now")) {
                setLl(JSON.parse(localStorage.getItem("link_now")));
            }
            if (localStorage.getItem("searchsort_now")) {
                setSearch(JSON.parse(localStorage.getItem("searchsort_now")));
            }
            if (localStorage.getItem("st_now")) {
                setSt(JSON.parse(localStorage.getItem("st_now")));
            }
            if (localStorage.getItem("sq_now")) {
                setSq(JSON.parse(localStorage.getItem("sq_now")));
            }
            if (localStorage.getItem("str_now")) {
                setStr(JSON.parse(localStorage.getItem("str_now")));
            }
            if (localStorage.getItem("tries_now")) {
                setTries(JSON.parse(localStorage.getItem("tries_now")));
            }
        } catch (error) {
            console.log(error);
        }
    }, []);

    const returnVariable = (name) => {
        if (name === "Arrays") {
            return arr;
        } else if (name === "2D-Arrays") {
            return tdarr;
        } else if (name === "Backtracking") {
            return back;
        } else if (name === "Binary-Search-Tree") {
            return bst;
        } else if (name === "Binary-Tree") {
            return bt;
        } else if (name === "Bit-Manipulation") {
            return bit;
        } else if (name === "DP") {
            return dp;
        } else if (name === "Graphs") {
            return graph;
        } else if (name === "Greedy") {
            return greed;
        } else if (name === "Heaps-&-Hashing") {
            return heap;
        } else if (name === "Linkedlist") {
            return ll;
        } else if (name === "Searching-&-Sorting") {
            return search;
        } else if (name === "Stack-&-Queues") {
            return sq;
        } else if (name === "Segment-Trees") {
            return sq;
        } else if (name === "Strings") {
            return str;
        } else if (name === "Tries") {
            return tries;
        }
    };

    return (
        <div className={styles.container}>
            <Head>
                <title>375 DSA</title>
                <meta
                    name="375 DSA Questions | By Aman Dhattarwal  &#38; Shradha di"
                    content="375 DSA Tracker helps you build your confidence in solving any coding related question and helps you prepare for your placements. It is your personal web-based progress tracker based on 375 DSA Sheet by Aman Dhattarwal  &#38; Shradha Didi"
                />
                <meta
                    name="keyword"
                    content="375 DSA, 375DSA, DSA 375, DSA375, Aman Dhattarwal, Apna college, Shradha Khapar, Shradha didi, DSA, arrays, 2d arrays, backtracking, binary search tree, binary tree, bit manipulation, dynamic programming, dp, graph, greedy, heap, hashing, linked list, sorting, segment trees, stacks, queues, strings, tries"
                />
                <meta name="author" content="Abhilash Jena" />
                <link rel="canonical" href="https://dsa-prep.vercel.app" />
                <meta name="url" content="https://dsa-prep.vercel.app" />
                <link rel="icon" href="/favicon.ico" />
                <script
                    async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6661138367542037"
                    crossOrigin="anonymous"
                ></script>
            </Head>
            <Sidebar data={data} />
            <main className={styles.main}>
                <div className={styles.main_landing}>
                    <div>
                        <div className={styles.main_heading}>
                            <h1>&#123; &#125; </h1>
                            <h1 className={styles.main_heading2}>
                                375 Data structure and algorithms Practice
                                Questions.
                            </h1>
                        </div>
                        <p>
                            375 DSA Tracker helps you build your confidence in
                            solving any coding related question and helps you
                            prepare for your placements. It is your personal
                            web-based progress tracker based on 375 DSA Sheet by
                            Aman Dhattarwal & Shradha Didi.
                        </p>
                    </div>
                    <Image height={480} width={400} src={seven} />
                </div>
                <div className={styles.main_landing_phone}>
                    <h1>&#123; &#125;</h1>
                    <h1>
                        375 Data structure and algorithms Practice Questions.
                    </h1>
                    <p>
                        375 DSA Tracker helps you build your confidence in
                        solving any coding related question and helps you
                        prepare for your placements. It is your personal
                        web-based progress tracker based on 375 DSA Sheet by
                        Aman Dhattarwal & Shradha Didi.
                    </p>
                </div>
                <div className={styles.grid}>
                    {data.map((item) => {
                        return (
                            <div className={styles.card} key={item.topic}>
                                <h1>{item.topic}</h1>
                                <p>Total {item.links.length} Questions</p>
                                <pre className={styles.done}>
                                    {returnVariable(item.topic) === 0
                                        ? 0
                                        : returnVariable(item.topic) - 1}{" "}
                                    Completed
                                </pre>
                                <div className={styles.link}>
                                    <Link href={`/${item.topic}`}>
                                        Start Solving...
                                    </Link>
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
