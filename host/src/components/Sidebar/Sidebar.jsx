import Link from "next/link";
import React from "react";

export const Sidebar = () => {
  return (
    <nav className="fixed left-0 top-[72px] h-full p-10 bg-teal-700 text-white">
      <ul>
        <li className="text-lg font-semibold pb-4 hover:underline">
          <Link href="/">Dashboard</Link>
        </li>
        <li className="text-lg font-semibold pb-4 hover:underline">
          <Link href="/revenue-management">Revenue Management</Link>
        </li>
        <li className="text-lg font-semibold pb-4 hover:underline">
          <Link href="/asset-management">Asset Management</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
