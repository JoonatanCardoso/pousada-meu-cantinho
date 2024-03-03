import React from "react";
import { Fab } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

interface FloatingButtonProps {
  onClick: () => void;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({ onClick }) => {
  return (
    <Fab
      sx={{
        marginBottom: 2,
        marginRight: 2,
        position: "fixed",
        bottom: 2,
        right: 2,
        background: "#00a94e",
        color: "white",
      }}
      onClick={onClick}
    >
      <a
        href="https://wa.me/5567984022745?text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+a+Pousada+Meu+Cantinho%21"
        target="_blank"
        rel="noreferrer"
      >
        <WhatsAppIcon fontSize="large" />
      </a>
    </Fab>
  );
};

export default FloatingButton;
