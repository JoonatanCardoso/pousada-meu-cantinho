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
    <Grid
      ref={ref}
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
        />
      </Grid>
      <Grid ref={ref} item xs={10} md={5}>
        <Typography
          className={styles.paragraph}
          color="black"
          variant="subtitle1"
        >
          A história da pousada Meu Cantinho começou por volta de 1987, quando
          éramos uma república e gerenciávamos uma pequena lanchonete em frente.
          À medida que as necessidades da república evoluíam e com a inspiração
          das sugestões dos nossos clientes, decidimos por volta de 2007
          transformar nosso espaço em uma pousada. Essa mudança se revelou um
          grande acerto, proporcionando um ambiente acolhedor para nossos
          hóspedes e possibilitando-nos conhecer pessoas incríveis e cultivar
          novas amizades.
        </Typography>
      </Grid>
      <Grid item xs={10} md={5}>
        <Typography
          className={styles.paragraph}
          color="black"
          variant="subtitle1"
        >
          Hoje, continuamos dedicados a oferecer um serviço acolhedor e
          atencioso, atendendo nossos hóspedes e amigos com todo o carinho que
          nos trouxe até aqui. Meu Cantinho é um lugar onde cada pessoa se sente
          verdadeiramente em casa, encontrando conforto e tranquilidade. Nossa
          história é marcada por transformação, representando uma jornada de
          crescimento pessoal e profissional para nós.
        </Typography>
      </Grid>
      <Grid className={styles.img} item xs={12} md={4}>
        <Image
          src="/images/sobre2.svg"
          width={isMobile ? 350 : 400}
          height={isMobile ? 350 : 400}
          alt="Quem Somos"
        />
      </Grid>
    </Grid>
  );
}
