import React from "react";

import styles from "./asset-grid.module.css";

export const AssetGrid = () => {
  return (
    <section>
      <table className={styles.table}>
        <thead>
          <tr className={styles.tableHeader}>
            <th>Asset Id</th>
            <th>Asset Name</th>
            <th>No of Platforms</th>
            <th>No of Series</th>
          </tr>
        </thead>
        <tbody>
          <tr className={styles.tableRow}>
            <td>1.</td>
            <td>To Tell The Truth</td>
            <td>15</td>
            <td>20</td>
          </tr>

          <tr>
            <td>2.</td>
            <td>The Golden Bachelor</td>
            <td>42</td>
            <td>23</td>
          </tr>

          <tr>
            <td>3.</td>
            <td>Super Market Sweep</td>
            <td>28</td>
            <td>16</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default AssetGrid;
