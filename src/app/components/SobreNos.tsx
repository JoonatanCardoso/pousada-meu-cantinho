"use client";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import React, { useRef, useEffect, useState } from "react";
import styles from "./SobreNos.module.css";
import Image from "next/image";

export default function SobreNos() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useMediaQuery("(max-width: 960px)");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          console.log("isVisible", isVisible);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <Grid ref={ref}
      className={styles.container}
      id={"sobre"}
      justifyContent="center"
      container
      sx={{ flexDirection: { xs: "row", md: "row" } }}
    >
      <Grid item xs={12} md={12}>
        <Typography
          className={styles.title}
          color="black"
          variant="h4"
          component="h4"
          style={{
            transition: "opacity 0.5s",
            opacity: isVisible ? 1 : 0,
          }}
        >
          Conheça nossa história
        </Typography>
      </Grid>

      <Grid ref={ref} className={styles.img} item xs={11} md={5}>
        <Image
          src="/images/sobre1.svg"
          width={isMobile ? 350 : 400}
          height={isMobile ? 350 : 400}
          alt="Quem Somos"
          style={{
            transition: "opacity 2s",
            opacity: isVisible ? 1 : 0,
          }}
        />
      </Grid>
      <Grid ref={ref} item xs={10} md={5}>
        <Typography
          className={styles.paragraph}
          color="black"
          variant="subtitle1"
          style={{
            transition: "opacity 2s",
            opacity: isVisible ? 1 : 0,
          }}
        >
          Fundada em janeiro de 2020 em Dourados/MS, a UnitsGeo é uma empresa
          especializada em consultoria ambiental e topográfica, atendendo em
          todo o estado de Mato Grosso do Sul, Mato Grosso e Paraná. Com uma
          equipe de profissionais qualificados, comprometidos em entregar
          resultados sob medida para cada cliente, sempre alinhados às suas
          necessidades específicas.
        </Typography>
      </Grid>
      <Grid item xs={10} md={5}>
        <Typography
          className={styles.paragraph}
          color="black"
          variant="subtitle1"
          style={{
            transition: "opacity 5s",
            opacity: isVisible ? 1 : 0,
          }}
        >
          Fundada em janeiro de 2020 em Dourados/MS, a UnitsGeo é uma empresa
          especializada em consultoria ambiental e topográfica, atendendo em
          todo o estado de Mato Grosso do Sul, Mato Grosso e Paraná. Com uma
          equipe de profissionais qualificados, comprometidos em entregar
          resultados sob medida para cada cliente, sempre alinhados às suas
          necessidades específicas.
        </Typography>
      </Grid>
      <Grid className={styles.img} item xs={12} md={4}>
        <Image
          src="/images/sobre2.svg"
          width={isMobile ? 350 : 400}
          height={isMobile ? 350 : 400}
          alt="Quem Somos"
          style={{
            transition: "opacity 5s",
            opacity: isVisible ? 1 : 0,
          }}
        />
      </Grid>
    </Grid>
  );
}
