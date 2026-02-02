import Image from "next/image";
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"

export default function Home() {
  return (
    <>
      <Navbar/>
      <Header/>
      <Main/>
      <Footer/>
      <ScrollToTop/>
    </>
  );
}
