import { Code, User, VideoIcon, Shapes, Download } from "lucide-react";

const focusAreas = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Creating responsive websites and web applications with modern frameworks.",
  },
  {
    icon: User,
    title: "UI/UX Design",
    description:
      "Designing intuitive user interfaces and seamless user experiences.",
  },
  {
    icon: VideoIcon,
    title: "Video Editing",
    description:
      "Precise, creative, and impactful video editing for digital media.",
  },
  {
    icon: Shapes,
    title: "Blender (3D Modeling & Animation)",
    description:
      "Bringing concepts to life through 3D modeling, animation, and rendering in Blender.",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-24 relative">
      <div className="container max-w-5xl">
        <h2 className="section-title mb-10 md:mb-14">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
          {/* Left: Bio */}
          <div className="space-y-4 md:space-y-5 text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-semibold">
              Web Developer, UI/UX Designer, and Video Editor
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              I’m Aubrey, a creative and detail-oriented web developer with
              interests in UI/UX design and video editing. I enjoy building
              responsive and user-friendly websites and crafting clean,
              intuitive interfaces that enhance user experience.
            </p>

            <p className="leading-relaxed">
              I’m continuously expanding my skills in modern web and creative
              technologies.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 justify-center md:justify-start">
              <a href="#contact" className="cosmic-button">
                Get in Touch
              </a>
              <a
                href="https://drive.google.com/file/d/11tBQ_r31MzNvyCCMUn6cmd__ovtU2hoX/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="outline-button"
              >
                <Download size={18} aria-hidden="true" />
                Download CV
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </div>
          </div>

          {/* Right: Focus areas */}
          <ul className="grid grid-cols-1 gap-4">
            {focusAreas.map(({ icon, title, description }) => {
              const Icon = icon;
              return (
              <li key={title} className="gradient-border p-4 sm:p-5 card-hover">
                <div className="flex items-start gap-4 text-left">
                  <div className="p-2.5 rounded-full bg-primary/10 shrink-0">
                    <Icon className="h-5 w-5 md:h-6 md:w-6 text-primary" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-base md:text-lg">{title}</h4>
                    <p className="text-muted-foreground text-sm md:text-base mt-1">
                      {description}
                    </p>
                  </div>
                </div>
              </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
