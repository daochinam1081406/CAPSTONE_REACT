import React, { useState } from "react";
import styles from "./Play.module.css";

export default function Play() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        className={styles.play}
        src={
          isHovered
            ? `${process.env.PUBLIC_URL}/playOn.png`
            : `${process.env.PUBLIC_URL}/play.png`
        }
        alt="play"
      />
    </div>
  );
}
