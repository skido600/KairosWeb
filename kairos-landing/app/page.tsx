import React from "react";
import Header from "./sections/Header"
import Hero from "./sections/Hero";
import Features from "./sections/Features";
import Faq from "./sections/Faq";
import Team from "./sections/Team"
import Footer from "./sections/Footer"


export default function Home() {
  return (
    <>
    <Header/>
    <Hero/>
    <Features/>
    <Team/>
    <Faq/>
    <Footer/>
    </>
  )
}
