import Link from "next/link";
import React from "react";

import styles from "./sidebar.module.css";

export const Sidebar = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li className={styles.link}>
          <Link href="/">Dashboard</Link>
        </li>
        <li className={styles.link}>
          <Link href="/revenue-management">Revenue Management</Link>
        </li>
        <li className={styles.link}>
          <Link href="/asset-management">Asset Management</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
