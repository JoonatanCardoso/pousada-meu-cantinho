import {
  Button,
  Dialog,
  DialogContent,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import styles from "./Acomodacoes.module.css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const images = [
  "/images/acomod1.jpg",
  "/images/acomod2.jpg",
  "/images/acomod3.jpg",
  "/images/acomod4.jpg",
];

export default function Galeria() {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0); // Novo estado para controlar o índice da imagem na janela modal

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleOpen = (clickedIndex: number) => {
    setOpen(true);
    setModalIndex(clickedIndex);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const isMobile = useMediaQuery("(max-width: 960px)");

  return (
    <Grid
      className={styles.container}
      container
      style={{
        backgroundImage: "url(/images/galeria.svg)",
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Grid
        container
        xs={11}
        md={12}
        sx={{
          display: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid xs={12} md={8}>
          <Typography
            className={styles.title}
            color="black"
            variant="h4"
            component="h4"
          >
            Nossas Acomodações
          </Typography>
          <Grid display="flex">
            <Button onClick={handlePrev}>
              <KeyboardArrowLeftIcon />
            </Button>
            <Grid
              margin={1}
              container
              justifyContent="center"
              alignItems="center"
              style={{
                cursor: "pointer",
                borderRadius: "10px",
                height: "300px",
                width: "600px",
                backgroundImage: `url(${images[index]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              onClick={() => handleOpen(index)}
            />
            {!isMobile && (
              <Grid
                margin={1}
                container
                justifyContent="center"
                alignItems="center"
                style={{
                  cursor: "pointer",
                  borderRadius: "10px",
                  height: "300px",
                  width: "600px",
                  backgroundImage: `url(${
                    images[(index + 1) % images.length]
                  })`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
                onClick={() => handleOpen((index + 1) % images.length)} // Passa o índice da próxima imagem ao clicar nela
              />
            )}
            <Button onClick={handleNext}>
              <KeyboardArrowRightIcon />
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <img
            src={images[modalIndex]}
            alt={`Imagem ${modalIndex}`}
            style={{ width: "100%", height: "80vh" }}
          />
        </DialogContent>
      </Dialog>
    </Grid>
  );
}
