import React from "react";
import DesktopNavbar from "./DesktopNavbar";
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import MobileNavbar from "./MobileNav";

const Navbar = () => {
  return (
    <>
    <BrowserView>
      <DesktopNavbar/>
    </BrowserView>
    <MobileView>
      <MobileNavbar/>
    </MobileView>
    </>
  );
};

export default Navbar;
