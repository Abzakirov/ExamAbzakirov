"use client";
import { MenuIcon } from "lucide-react";
import React, { useState } from "react";
import Drawers from "../Drawer/Drawers";

const Buttons = () => {
  const [open, setOpen] = useState(false);

  const handleMenuClick = () => {
    setOpen(true);
  };

  return (
    <div>
      <button className="!hidden max-[350px]:!block" onClick={handleMenuClick}>
        <MenuIcon size={24} />
      </button>
      <Drawers open={open} setOpen={setOpen} />
    </div>
  );
};

export default Buttons;
