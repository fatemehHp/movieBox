import React, { useState } from "react";
import styles from "./movieSection.module.css";
import Button from "../Button/Button";

const MovieSection = ({ children }) => {
 
  return (
    <div className={styles.container}>
    { children }
    </div>
  );
};

export default MovieSection;
