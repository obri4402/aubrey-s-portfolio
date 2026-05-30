import { Code, User, VideoIcon, Shapes } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 px-4 md:px-6 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left: Bio */}
          <div className="space-y-4 md:space-y-6">
            <h3 className="text-xl md:text-2xl font-semibold">
              Web Developer, UI/UX Designer, and Video Editor
            </h3>

            <p className="text-muted-foreground text-sm md:text-base">
              I’m Aubrey, a creative and detail-oriented web developer with interests in UI/UX design and video editing. I enjoy building responsive and user-friendly websites and crafting clean, intuitive interfaces that enhance user experience.

            </p>

            <p className="text-sm md:text-base">
              I’m continuously expanding my skills in modern web and creative technologies.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4 justify-center sm:justify-start">
              <a href="#contact" className="cosmic-button text-center">
                Get in Touch
              </a>
              <a
                href="https://drive.google.com/file/d/13ce7LMoxnTUC9t3SwQhJoyVojqZAxZvG/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-primary hover:bg-primary/10 transition-colors duration-300 text-center text-sm md:text-base"
              >
                Download CV here
              </a>
            </div>
          </div>

          {/* Right: Skill cards */}
          <div className="grid grid-cols-1 gap-4 md:gap-6">
            <div className="gradient-border p-4 md:p-6 card-hover">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="p-2 md:p-3 rounded-full bg-primary/10 shrink-0">
                  <Code className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-base md:text-lg">
                    Web Development
                  </h4>
                  <p className="text-muted-foreground text-sm md:text-base">
                    Creating responsive websites and web applications with
                    modern frameworks.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-4 md:p-6 card-hover">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="p-2 md:p-3 rounded-full bg-primary/10 shrink-0">
                  <User className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-base md:text-lg">
                    UI/UX Design
                  </h4>
                  <p className="text-muted-foreground text-sm md:text-base">
                    Designing intuitive user interfaces and seamless user
                    experiences.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-4 md:p-6 card-hover">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="p-2 md:p-3 rounded-full bg-primary/10 shrink-0">
                  <VideoIcon className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-base md:text-lg">
                    Video Editor
                  </h4>
                  <p className="text-muted-foreground text-sm md:text-base">
                    Precise, creative, and impactful video editing for digital
                    media.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-4 md:p-6 card-hover">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="p-2 md:p-3 rounded-full bg-primary/10 shrink-0">
                  <Shapes className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-base md:text-lg">
                    Blender (3D Modeling & Animation)
                  </h4>
                  <p className="text-muted-foreground text-sm md:text-base">
                    Bringing concepts to life through 3D modeling, animation,
                    and rendering in Blender.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};