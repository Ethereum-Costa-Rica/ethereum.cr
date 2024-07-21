import { NavbarProps } from "@/models/navbar.type";
import { useEffect, useState } from "react";

const useNavbar = ({
  baseBgColor,
  extendedBgColor,
  baseLogo,
  extendedLogo,
  baseMenuLogoColor,
  extendedMenuLogoColor,
}: NavbarProps) => {
  const [opened, setOpened] = useState(false);
  const [bgColor, setBgColor] = useState(baseBgColor);
  const [logo, setLogo] = useState(baseLogo);
  const [menuLogoColor, setMenuLogoColor] = useState(baseMenuLogoColor);

  const setBaseProperties = () => {
    setBgColor(baseBgColor);
    setLogo(baseLogo);
    setMenuLogoColor(baseMenuLogoColor);
  };

  const setExtendedProperties = () => {
    setBgColor(extendedBgColor);
    setLogo(extendedLogo);
    setMenuLogoColor(extendedMenuLogoColor);
  };

  useEffect(() => {
    const onScroll = () => {
      setOpened(false);
      if (window.scrollY > 0) setExtendedProperties();
      else if (window.scrollY === 0) setBaseProperties();
    };
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setExtendedProperties();
  }, [opened]);

  return { bgColor, logo, menuLogoColor, opened, setOpened };
};

export default useNavbar;
