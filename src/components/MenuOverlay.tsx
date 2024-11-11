import React from "react";
import NavLink from "./NavLink";
import { navLinksProps } from "@/types";



interface DataProps {
  links: navLinksProps[]; // Correctly type the links prop
}

const MenuOverlay = ({ links }: DataProps) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link: navLinksProps, index: number) => (
        <li key={index}>
          <NavLink href={link.path} tittle={link.tittle} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;