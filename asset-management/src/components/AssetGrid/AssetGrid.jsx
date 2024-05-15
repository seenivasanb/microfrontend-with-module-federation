import React from "react";

// import "./asset-grid.css";

export const AssetGrid = () => {
  return (
    <section>
      <table className="table-auto table w-full">
        <thead>
          <tr>
            <th>Asset Id</th>
            <th>Asset Name</th>
            <th>No of Platforms</th>
            <th>No of Series</th>
          </tr>
        </thead>
        <tbody>
          <tr>
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
