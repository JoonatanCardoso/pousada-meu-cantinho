import React from "react";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import styles from "./Footer.module.css";

const handleClick = () => {
  window.open("https://maps.app.goo.gl/cfPZopzhS9yjKxbN7", "_blank");
};

export default function Footer() {
  const isMobile = useMediaQuery("(max-width: 960px)");

  return (
    <Grid
      className={styles.container}
      container
      sx={{ flexDirection: { xs: "row", md: "row" } }}
      style={{
        backgroundImage: "url(/images/footer-image.svg)",
        width: "100vw",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Grid
        item
        xs={12}
        md={12}
        style={{
          width: "100vw",
          height: "500px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <a
          href="https://maps.app.goo.gl/7u7wzQXTFgNKUXov6"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            className={styles.imageMaps}
            src="/images/map.svg"
            alt="Mapa"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </a>
      </Grid>

      <Grid
        id={"contatos"}
        display="flex"
        sx={{ justifyContent: { xs: "center", md: "left" } }}
        padding={1}
        item
        xs={11}
        md={5}
      >
        <Image
          src="/images/logo-branca.svg"
          alt="Logo Meu Cantinho"
          priority={true}
          width={isMobile ? 200 : 250}
          height={isMobile ? 200 : 250}
        />
      </Grid>
      <Grid className={styles.itemsContainer}>
        <Grid padding={2} item xs={12} md={6}>
          <Typography
            mt={isMobile ? 0 : 5}
            className={styles.title}
            color="white"
            variant="h6"
            component="h6"
          >
            Contato
          </Typography>
          <Typography
            className={styles.paragraph}
            color="white"
            variant="subtitle1"
          >
            (67) 3308-0838
          </Typography>
          <Typography
            className={styles.paragraph}
            color="white"
            variant="subtitle1"
          >
            <a
              href="https://wa.me/5567984022745?text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+a+Pousada+Meu+Cantinho%21"
              target="_blank"
              rel="noreferrer"
            >
              (67) 99606-7526
            </a>
          </Typography>
        </Grid>
        <Grid padding={2} item xs={12} md={12}>
          <Typography color="white" variant="h4" component="h4" noWrap>
            Pousada Meu Cantinho
          </Typography>
          <Typography
            className={styles.title}
            color="white"
            variant="h6"
            component="h6"
          >
            Visite-nos
          </Typography>
          <Typography
            className={styles.paragraph}
            color="white"
            variant="subtitle1"
          >
            <a
              href="https://maps.app.goo.gl/7u7wzQXTFgNKUXov6"
              target="_blank"
              rel="noreferrer"
            >
              R. Pres. Kenedy, 38 - Vila Industrial
            </a>
          </Typography>
          <Typography
            className={styles.paragraph}
            color="white"
            variant="subtitle1"
          >
            Dourados - MS
          </Typography>
          <Typography
            className={styles.paragraph}
            color="white"
            variant="subtitle1"
          >
            Brasil
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
