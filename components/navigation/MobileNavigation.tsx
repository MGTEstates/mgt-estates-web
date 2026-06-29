"use client";

import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import HamburgerButton from "@/components/navigation/HamburgerButton";
import NavigationDrawer from "@/components/navigation/NavigationDrawer";

export default function MobileNavigation() {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    setIsDrawerOpen(false);
  }, [pathname]);

  const openDrawer = useCallback(() => {
    setIsDrawerOpen(true);
  }, []);

  const closeDrawer = useCallback(() => {
    setIsDrawerOpen(false);
  }, []);

  return (
    <>
      <HamburgerButton
        isOpen={isDrawerOpen}
        onClick={isDrawerOpen ? closeDrawer : openDrawer}
        controlsId="site-navigation-drawer"
      />

      {isMounted ? (
        <NavigationDrawer
          isOpen={isDrawerOpen}
          onClose={closeDrawer}
          controlsId="site-navigation-drawer"
        />
      ) : null}
    </>
  );
}
