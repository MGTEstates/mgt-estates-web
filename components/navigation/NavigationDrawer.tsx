"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface NavigationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  controlsId: string;
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
}: NavigationDrawerProps) {
  const [isMounted, setIsMounted] = useState(false);
  const panelRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

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

  const handleDrawerLinkClick = () => {
    onClose();
  };

  if (!isMounted) {
    return null;
  }

  return createPortal(
    (
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
        <button
          type="button"
          className="nav-drawer-close"
          aria-label="Close menu"
          onClick={onClose}
        >
          <span className="navbar-toggle-lines" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>

        <nav className="nav-drawer-links" aria-label="Primary">
          {NAV_LINKS.map((link) => {
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleDrawerLinkClick}
                className="nav-drawer-link"
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
            onClick={handleDrawerLinkClick}
          >
            Book Consultation
          </Link>
        </div>
      </aside>
    </div>
    ),
    document.body
  );
}
