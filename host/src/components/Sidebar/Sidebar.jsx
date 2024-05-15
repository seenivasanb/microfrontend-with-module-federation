import Link from "next/link";
import React from "react";

import styles from "./sidebar.module.css";

export const Sidebar = ({ menuList }) => {
  return (
    <nav className={styles.nav}>
      <ul>
        {menuList.map(({ link, name }) => (
          <li className={styles.link} key={link}>
            <Link href={link}>{name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
