"use client";
import * as React from "react";
import { useState } from "react";
import styles from "./Layout.module.css";
import {
  Box,
  Button,
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import Link from "next/link";

type Anchor = "left";

export default function Layout() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useState(() => {
    console.log("in useState");
  });

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List sx={{ width: "100vw", minWidth: 360 }}>
        <ListItem>
          <Link href="/">
            <Image
              className={styles.logoMobile}
              src="/images/logo-preta.svg"
              alt="Logo Meu Cantinho"
              priority={true}
              width={150}
              height={43}
              style={{ cursor: "pointer" }}
            />
          </Link>
        </ListItem>
        <Divider variant="middle" component="li" />
        <Link href="/">
          <ListItem>
            <ListItemButton>Início</ListItemButton>
          </ListItem>
        </Link>
        <Divider variant="middle" component="li" />
        <ListItem>
          <ListItemButton onClick={() => scrollToSection("sobre")}>
            Sobre Nós
          </ListItemButton>
        </ListItem>
        <Divider variant="middle" component="li" />
        <ListItem>
          <ListItemButton onClick={() => scrollToSection("galeria")}>
            Galeria
          </ListItemButton>
        </ListItem>
        <Divider variant="middle" component="li" />
        <ListItem>
          <ListItemButton onClick={() => scrollToSection("contatos")}>
            Contatos
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const isMobile = useMediaQuery("(max-width: 960px)");
  const isDesktop = useMediaQuery("(min-width: 960px)");

  return (
    <Grid
      className={styles.main}
      container
      sx={{ flexDirection: { xs: "row", md: "row" } }}
      style={{
        backgroundImage: "url(/images/navbar.svg)",
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Grid className={styles.navbarSocial}>
        <a
          href="https://maps.app.goo.gl/cfPZopzhS9yjKxbN7"
          target="_blank"
          rel="noreferrer"
        >
          <Typography mr={4}>(67) 3308-0838</Typography>
        </a>
        <a
          href="https://wa.me/5567984022745?text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+a+Pousada+Meu+Cantinho%21"
          target="_blank"
          rel="noreferrer"
        >
          <Box display="flex" justifyContent="center" alignItems="center">
            <Image
              className={styles.iconsMenu}
              src="/images/iconWhats.png"
              alt="Whatsapp"
              height={25}
              width={25}
            />
            <Typography>(67) 98402-2745</Typography>
          </Box>
        </a>
      </Grid>
      <Grid
        className={styles.container}
        container
        py={1}
        sx={{ background: "black", flexDirection: { xs: "row", md: "row" } }}
      >
        {isMobile && (
          <Grid display="flex">
            {(["left"] as const).map((anchor) => (
              <React.Fragment key={anchor}>
                {isMobile && (
                  <Button onClick={toggleDrawer(anchor, true)}>
                    <MenuIcon sx={{ color: "white" }} />
                  </Button>
                )}
                <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                >
                  {list(anchor)}
                </Drawer>
              </React.Fragment>
            ))}
            <Link href="/">
              <Image
                src="/images/logo-branca.svg"
                alt="Logo Meu Cantinho"
                priority={true}
                width={80}
                height={40}
                style={{ cursor: "pointer" }}
              />
            </Link>
          </Grid>
        )}
        {isDesktop && (
          <Grid
            justifyContent="center"
            container
            xs={12}
            md={10}
            sx={{
              flexDirection: { xs: "row", md: "row" },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Grid
              item
              xs={12}
              md={2}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Link href="/">
                <Button
                  className={styles.button}
                  sx={{
                    color: "#000",
                  }}
                >
                  Início
                </Button>
              </Link>
            </Grid>
            <Grid
              item
              xs={12}
              md={2}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                className={styles.button}
                onClick={() => scrollToSection("servicos")}
                sx={{
                  color: "#000",
                  flex: "center",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Sobre Nós
              </Button>
            </Grid>
            <Grid
              className={styles.img}
              item
              xs={12}
              md={2}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Link href="/">
                <Image
                  src="/images/logo.svg"
                  alt="Logo Meu Cantinho"
                  priority={true}
                  width={40}
                  height={40}
                  style={{ cursor: "pointer" }}
                />
              </Link>
            </Grid>

            <Grid
              item
              xs={12}
              md={2}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                className={styles.button}
                onClick={() => scrollToSection("galeria")}
                sx={{ color: "#000" }}
              >
                Galeria
              </Button>
            </Grid>
            <Grid
              item
              xs={12}
              md={2}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                className={styles.button}
                onClick={() => scrollToSection("contatos")}
                sx={{ color: "#000" }}
              >
                Contatos
              </Button>
            </Grid>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
}
