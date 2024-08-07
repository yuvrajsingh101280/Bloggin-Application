import React, { useContext } from "react";
import {
  Navbar,
  Typography,
  IconButton,
  Avatar,
  Collapse,
} from "@material-tailwind/react";

import { useState } from "react";

const Nav = () => {
  const [openNav, setOpenNav] = useState(false);

  // All Navlist

  const NavList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
        // style={{ color: mode === "dark" ? "white" : "white" }}
      ></Typography>
    </ul>
  );

  return <div></div>;
};

export default Nav;
