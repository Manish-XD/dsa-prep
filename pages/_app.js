import "../styles/globals.css";
import LoadingBar from "react-top-loading-bar";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setProgress(40);
    });
    router.events.on("routeChangeComplete", () => {
      setProgress(100);
    });
  }, [router.query]);

  return (
    <>
      <Script id="script1"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-34CC5MMYVV`}
      />
      <Script strategy="lazyOnload">
      id="script2"
        {` window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-34CC5MMYVV');`}
      </Script>
      <LoadingBar
        color="#ffffff"
        waitingTime={400}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
