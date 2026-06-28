import Link from "next/link";
import MobileNavigation from "@/components/navigation/MobileNavigation";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">

        <Link href="/" className="logo">
          MGT ESTATES
        </Link>

        <nav className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/how-i-work">How I Work</Link>
          <Link href="/homes">Homes</Link>
        </nav>


        <Link href="/consultation" className="nav-button">
          Book Consultation
        </Link>

        <MobileNavigation />

        {/* phone moved to hero/footer/consultation per design — keep navbar minimal */}

      </div>
    </header>
  );
}