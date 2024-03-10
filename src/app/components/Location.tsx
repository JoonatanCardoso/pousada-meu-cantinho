"use client";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import React, { useRef, useEffect, useState } from "react";
import styles from "./SobreNos.module.css";
import Image from "next/image";

export default function Location() {
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
      id={"location"}
      justifyContent="center"
      container
      sx={{ flexDirection: { xs: "row", md: "row" } }}
    >
      <Grid
        xs={12}
        md={12}
        style={{ color: "black", textAlign: "center", alignItems: "center" }}
      >
        <h2
          style={{
            padding: "0 10px",
            lineHeight: "1.5em",
            paddingBottom: "20px",
          }}
        >
          <div
            style={{
              borderBottom: "1px solid black",
              width: isMobile ? "10%" : "30%",
              marginBottom: "6px",
              display: "inline-block",
              marginRight: "15px",
            }}
          />
          Ótima Localização
          <div
            style={{
              borderBottom: "1px solid black",
              width: isMobile ? "10%" : "30%",
              marginBottom: "6px",
              display: "inline-block",
              marginLeft: "15px",
            }}
          />
        </h2>
      </Grid>

      <Grid
        sx={{ textAlign: isMobile ? "center" : "right" }}
        ref={ref}
        item
        xs={10}
        md={4}
      >
        <Typography
          className={styles.name}
          color="black"
          variant="subtitle1"
          style={{ transition: "opacity 3s", fontSize: "1.8rem" }}
        >
          Shopping Avenida Center
        </Typography>
        <Typography
          className={styles.paragraph}
          color="black"
          variant="subtitle1"
          style={{
            transition: "opacity 2s",
            opacity: isVisible ? 1 : 0,
            textAlign: isMobile ? "center" : "end",
          }}
        >
          750m
        </Typography>
        <Typography
          className={styles.name}
          color="black"
          variant="subtitle1"
          style={{ transition: "opacity 3s", fontSize: "1.8rem" }}
        >
          Rodoviária de Dourados
        </Typography>
        <Typography
          className={styles.paragraph}
          color="black"
          variant="subtitle1"
          style={{
            transition: "opacity 2s",
            opacity: isVisible ? 1 : 0,
            textAlign: isMobile ? "center" : "end",
          }}
        >
          750m
        </Typography>
        <Typography
          className={styles.name}
          color="black"
          variant="subtitle1"
          style={{ transition: "opacity 3s", fontSize: "1.8rem" }}
        >
          Supermercado
        </Typography>
        <Typography
          className={styles.paragraph}
          color="black"
          variant="subtitle1"
          style={{
            transition: "opacity 2s",
            opacity: isVisible ? 1 : 0,
            textAlign: isMobile ? "center" : "end",
          }}
        >
          550m
        </Typography>
        <Typography
          className={styles.name}
          color="black"
          variant="subtitle1"
          style={{ transition: "opacity 3s", fontSize: "1.8rem" }}
        >
          Restaurante
        </Typography>
        <Typography
          className={styles.paragraph}
          color="black"
          variant="subtitle1"
          style={{
            transition: "opacity 2s",
            opacity: isVisible ? 1 : 0,
            textAlign: isMobile ? "center" : "end",
          }}
        >
          300m
        </Typography>
      </Grid>
      <Grid className={styles.img} item xs={11} md={5}>
        <Image
          src="/images/loc.svg"
          width={isMobile ? 350 : 450}
          height={isMobile ? 350 : 450}
          alt="Localização"
          style={{
            transition: "opacity 2s",
            opacity: isVisible ? 1 : 0,
          }}
        />
      </Grid>
    </Grid>
  );
}
