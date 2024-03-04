"use client";
import React, { useState } from "react";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import SobreNos from "./components/SobreNos";
import Comodidades from "./components/Comodidades";
import FloatingButton from "./components/FloatingButton";
import { Carousel } from "./components/Carousel";

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
        <Footer />
        <FloatingButton onClick={handleButtonClick} />
      </div>
    </main>
  );
}
