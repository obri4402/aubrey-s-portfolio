import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // While the mobile menu is open: lock page scroll, close on Escape,
  // and close automatically if the viewport grows to desktop size.
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 768px)");
    const handleResize = () => {
      if (desktop.matches) setIsMenuOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    desktop.addEventListener("change", handleResize);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      desktop.removeEventListener("change", handleResize);
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-all duration-300",
          isScrolled || isMenuOpen
            ? "py-2 md:py-3 bg-background/85 backdrop-blur-md shadow-xs border-b border-border/60"
            : "py-3 md:py-5 border-b border-transparent"
        )}
      >
        <nav
          aria-label="Main"
          className="container flex items-center justify-between gap-4"
        >
          <a
            className="text-lg md:text-xl font-bold text-primary flex items-center min-h-11"
            href="#hero"
          >
            <span className="text-glow text-foreground">Aubrey's</span>
            &nbsp;Portfolio
          </a>

          <div className="flex items-center gap-1 md:gap-6">
            {/* Desktop nav */}
            <ul className="hidden md:flex items-center gap-6 lg:gap-8">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="inline-block py-2 text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            <ThemeToggle />

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full text-foreground hover:bg-primary/10 transition-colors"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile nav overlay. Rendered outside the header because the header's
          backdrop blur would otherwise trap this fixed element inside it. */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-0 z-30 bg-background/95 backdrop-blur-md flex flex-col items-center justify-center md:hidden",
          "transition-[opacity,visibility] duration-300",
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        <ul className="flex flex-col items-center gap-2 text-xl">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="block px-6 py-3 text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
