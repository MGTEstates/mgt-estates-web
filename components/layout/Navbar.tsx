"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import HamburgerButton from "@/components/navigation/HamburgerButton";
import NavigationDrawer from "@/components/navigation/NavigationDrawer";

export default function Navbar() {
  const pathname = usePathname();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    setIsDrawerOpen(false);
  }, [pathname]);

  const openDrawer = useCallback(() => {
    setIsDrawerOpen(true);
  }, []);

  const closeDrawer = useCallback(() => {
    setIsDrawerOpen(false);
  }, []);

  const drawerId = "site-navigation-drawer";

  return (
    <header className="navbar">
      <div className="navbar-container">

        <Link href="/" className="logo">
          MGT ESTATES
        </Link>

        <nav className="nav-links">
          <Link href="/" aria-current={pathname === "/" ? "page" : undefined}>Home</Link>
          <Link href="/about" aria-current={pathname === "/about" ? "page" : undefined}>About</Link>
          <Link href="/how-i-work" aria-current={pathname === "/how-i-work" ? "page" : undefined}>How I Work</Link>
          <Link href="/homes" aria-current={pathname === "/homes" ? "page" : undefined}>Homes</Link>
        </nav>


        <Link href="/consultation" className="nav-button">
          Book Consultation
        </Link>

        <HamburgerButton
          isOpen={isDrawerOpen}
          onClick={isDrawerOpen ? closeDrawer : openDrawer}
          controlsId={drawerId}
        />

        <NavigationDrawer
          isOpen={isDrawerOpen}
          onClose={closeDrawer}
          controlsId={drawerId}
          currentPath={pathname}
        />

        {/* phone moved to hero/footer/consultation per design — keep navbar minimal */}

      </div>
    </header>
  );
}