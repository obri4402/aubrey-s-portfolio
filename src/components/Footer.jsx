import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative bg-card border-t border-border">
      <div className="container flex flex-col-reverse sm:flex-row items-center justify-between gap-4 py-6">
        <p className="text-sm text-muted-foreground text-center sm:text-left">
          &copy; {new Date().getFullYear()} Aubrey Nastor. All rights reserved.
        </p>
        <a
          href="#hero"
          aria-label="Back to top"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
        >
          <ArrowUp size={20} aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
};
