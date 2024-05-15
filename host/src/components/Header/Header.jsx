import React from "react";

import styles from "./header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Micro Frontend</h1>
    </header>
  );
};

export default Header;
