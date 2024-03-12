"use client";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import styles from "./Comodidades.module.css";
import Image from "next/image";

export default function Comodidades() {

  const isMobile = useMediaQuery("(max-width: 960px)");

  return (
    <Grid
      className={styles.container}
      justifyContent="center"
      container
      sx={{ alignItems: "center" }}
    >
      <Grid
        xs={12}
        md={12}
        style={{ textAlign: "center", alignItems: "center" }}
      >
        <h2
          style={{
            padding: "0 10px",
            lineHeight: "1.5em",
          }}
        >
          <div
            style={{
              borderBottom: "1px solid white",
              width: isMobile ? "10%" : "30%",
              marginBottom: "6px",
              display: "inline-block",
              marginRight: "15px",
            }}
          />
          Nossas Comodidades
          <div
            style={{
              borderBottom: "1px solid white",
              width: isMobile ? "10%" : "30%",
              marginBottom: "6px",
              display: "inline-block",
              marginLeft: "15px",
            }}
          />
        </h2>
      </Grid>
      <Grid
        container
        py={2}
        sx={{ display: "row", justifyContent: "center", alignItems: "center" }}
        xs={12}
        md={10}
      >
        <Grid xs={4} md={2} margin={2} item>
          <Image
            src="/images/comod1.svg"
            alt="Comodidades"
            height={50}
            width={50}
          />
          <Typography>Wifi Grátis</Typography>
        </Grid>
        <Grid xs={4} md={2} margin={2} item>
          <Image
            src="/images/comod2.svg"
            alt="Comodidades"
            height={50}
            width={50}
          />
          <Typography>Televisão</Typography>
        </Grid>
        <Grid xs={4} md={2} margin={2} item>
          <Image
            src="/images/comod3.svg"
            alt="Comodidades"
            height={50}
            width={50}
          />
          <Typography>Café da manhã</Typography>
        </Grid>
        <Grid xs={4} md={2} margin={2} item>
          <Image
            src="/images/comod4.svg"
            alt="Comodidades"
            height={50}
            width={50}
          />
          <Typography>Ambiente Familiar</Typography>
        </Grid>
        <Grid xs={4} md={2} margin={2} item>
          <Image
            src="/images/comod5.svg"
            alt="Comodidades"
            height={50}
            width={50}
          />
          <Typography>Serviço de limpeza</Typography>
        </Grid>
        <Grid xs={4} md={2} margin={2} item>
          <Image
            src="/images/comod6.svg"
            alt="Comodidades"
            height={50}
            width={50}
          />
          <Typography>Garagem</Typography>
        </Grid>
        <Grid xs={4} md={2} margin={2} item>
          <Image
            src="/images/comod7.svg"
            alt="Comodidades"
            height={50}
            width={50}
          />
          <Typography>Ar Condicionado</Typography>
        </Grid>
      </Grid>
      <Grid
        xs={11}
        md={8}
        style={{
          borderBottom: "1px solid white",
          marginTop: "6px",
          display: "inline-block",
        }}
      ></Grid>
    </Grid>
  );
}
