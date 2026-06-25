"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

interface NavigationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  controlsId: string;
  currentPath: string;
}

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/how-i-work", label: "How I Work" },
  { href: "/homes", label: "Homes" },
  { href: "/consultation", label: "Consultation" },
] as const;

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function NavigationDrawer({
  isOpen,
  onClose,
  controlsId,
  currentPath,
}: NavigationDrawerProps) {
  const panelRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const panel = panelRef.current;
    const previousOverflow = document.body.style.overflow;
    const previousActiveElement = document.activeElement as HTMLElement | null;

    document.body.style.overflow = "hidden";

    const focusOnOpen = requestAnimationFrame(() => {
      const focusableElements = panel?.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
      focusableElements?.[0]?.focus();
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const items = panel?.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
      if (!items || items.length === 0) {
        event.preventDefault();
        return;
      }

      const firstItem = items[0];
      const lastItem = items[items.length - 1];
      const activeElement = document.activeElement as HTMLElement | null;

      if (!activeElement || !panel?.contains(activeElement)) {
        event.preventDefault();
        firstItem.focus();
        return;
      }

      if (event.shiftKey && activeElement === firstItem) {
        event.preventDefault();
        lastItem.focus();
        return;
      }

      if (!event.shiftKey && activeElement === lastItem) {
        event.preventDefault();
        firstItem.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      cancelAnimationFrame(focusOnOpen);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      previousActiveElement?.focus();
    };
  }, [isOpen, onClose]);

  const handleBackdropMouseDown = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const handleBackdropClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const handleDrawerLinkClick = (href: string) => {
    if (currentPath === href) {
      onClose();
    }
  };

  return (
    <div
      className={`nav-drawer-backdrop${isOpen ? " is-open" : ""}`}
      aria-hidden={!isOpen}
      onMouseDown={handleBackdropMouseDown}
      onClick={handleBackdropClick}
    >
      <aside
        id={controlsId}
        ref={panelRef}
        className={`nav-drawer-panel${isOpen ? " is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!isOpen}
        aria-label="Site navigation"
        tabIndex={-1}
      >
        <nav className="nav-drawer-links" aria-label="Primary">
          {NAV_LINKS.map((link) => {
            const isActive = currentPath === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => handleDrawerLinkClick(link.href)}
                className={`nav-drawer-link${isActive ? " is-active" : ""}`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="nav-drawer-contact">
          <p>Contact</p>
          <a href="tel:+18324034664">(832) 403-4664</a>
          <a href="mailto:michael@mgtestates.com">michael@mgtestates.com</a>
        </div>

        <div className="nav-drawer-cta">
          <Link
            href="/consultation"
            className="btn-primary"
            onClick={() => handleDrawerLinkClick("/consultation")}
          >
            Book Consultation
          </Link>
        </div>
      </aside>
    </div>
  );
}
