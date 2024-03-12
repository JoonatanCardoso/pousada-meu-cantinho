"use client";
import { Grid, Typography } from "@mui/material";
import React from "react";
import styles from "./Acomodacoes.module.css";

export default function Acomodacoes() {
  return (
    <Grid className={styles.container} container>
      <Grid
        className={styles.image}
        container
        style={{
          backgroundImage: "url(/images/acomod.png)",
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Grid container className={styles.text}
            xs={10}
            md={8}
            sx={{
              background: "white",
              display: "row",
              justifyContent: "center",
              alignItems: "center",
            }}>
          <Grid
            xs={10}
            md={8}
          >
            <Typography
              className={styles.title}
              color="black"
              variant="h4"
              component="h4"
            >
              Nossas Acomodações
            </Typography>
            <Typography className={styles.paragraph}>
              Almejamos proporcionar não apenas uma estadia agradável, mas sim
              uma experiência que faça você se sentir verdadeiramente em casa.
              Com esse compromisso em mente, dedicamos cuidado especial com as
              nossas acomodações, visando tornar a sua estadia em Dourados um
              período repleto de conforto e aconchego, dispondo de 16 quartos.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
