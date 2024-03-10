"use client";
import React, { useState } from "react";
import Layout from "./components/Layout";
import Carousel from "./components/Carousel";
import SobreNos from "./components/SobreNos";
import Comodidades from "./components/Comodidades";
import Acomodacoes from "./components/Acomodacoes";
import Galeria from "./components/Galeria";
import Location from "./components/Location";
import Footer from "./components/Footer";
import FloatingButton from "./components/FloatingButton";

export default function Home() {
  const [showContactForm, setShowContactForm] = useState(false);
  const handleButtonClick = () => {
    setShowContactForm(!showContactForm);
  };

  return (
    <main className="">
      <div className="">
        <Layout />
        <Carousel />
        <SobreNos />
        <Comodidades />
        <Acomodacoes />
        <Galeria />
        <Location />
        <Footer />
        <FloatingButton onClick={handleButtonClick} />
      </div>
    </main>
  );
}
