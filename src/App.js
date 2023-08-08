import Layout from "./Layout/Layout";
import Display from "./components/Display";
import Slidebar from "./components/SlideBar";
import "aos/dist/aos.css";

export default function App() {
  return (
    <Layout>
      <Slidebar />
      <Display />
    </Layout>
  );
}
