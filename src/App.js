import React, { useEffect } from 'react';
import Layout from "./Layout/Layout";
import Display from "./components/Display";
import Slidebar from "./components/SlideBar";
import ReactGA from 'react-ga';
import "aos/dist/aos.css";

export default function App() {
  
  useEffect(() => {
    ReactGA.initialize('G-FTX6Q0PX6F');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  
  return (
    <Layout>
      <Slidebar />
      <Display />
    </Layout>
  );
}
