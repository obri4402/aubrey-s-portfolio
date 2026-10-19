import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-svh flex flex-col items-center justify-center pt-24 pb-28 md:pb-32"
    >
      <div className="container max-w-4xl text-center z-10">
        <div className="space-y-5 md:space-y-7">
          <h1 className="text-[2rem] leading-tight sm:text-5xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>{" "}
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              Aubrey
            </span>{" "}
            <span className="opacity-0 animate-fade-in-delay-2">Nastor</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Computer Science graduate with experience in web development, database management, system implementation, and technical support. Skilled in ReactJS, JavaScript, HTML/CSS, PHP, MySQL, and Java, with a strong foundation in software development and system analysis. Interested in developing efficient systems, solving technical problems, and continuously growing in the field of information technology and software development.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 pt-2 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
            <a href="#contact" className="outline-button">
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center p-2 text-muted-foreground hover:text-primary transition-colors motion-safe:animate-bounce"
        aria-label="Scroll to About section"
      >
        <span className="text-sm mb-1" aria-hidden="true">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" aria-hidden="true" />
      </a>
    </section>
  );
};
