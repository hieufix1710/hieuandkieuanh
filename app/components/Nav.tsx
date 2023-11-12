import React from "react";

export default function Nav() {
  return (
    <div className="sticky top-0 left-0 right-0 flex flex-row justify-end uppercase text-[#818282] bg-gray-100 z-50">
      <ul className="flex flex-row justify-between gap-2">
        <li className="px-2 py-4">
          <a className="nav-link" href="#home">
            Home
          </a>
        </li>
        <li className="px-2 py-4">
          <a className="nav-link" href="#couple">
            Couple
          </a>
        </li>
        <li className="px-2 py-4">
          <a className="nav-link" href="#messages">
            Messages
          </a>
        </li>
        <li className="px-2 py-4">
          <a className="nav-link" href="#gallery">
            Gallery
          </a>
        </li>
      </ul>
    </div>
  );
}
