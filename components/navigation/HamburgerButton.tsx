"use client";

interface HamburgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
  controlsId: string;
}

export default function HamburgerButton({
  isOpen,
  onClick,
  controlsId,
}: HamburgerButtonProps) {
  return (
    <button
      type="button"
      className={`navbar-toggle${isOpen ? " is-open" : ""}`}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      aria-controls={controlsId}
      onClick={onClick}
    >
      <span className="navbar-toggle-lines" aria-hidden="true">
        <span />
        <span />
        <span />
      </span>
    </button>
  );
}
