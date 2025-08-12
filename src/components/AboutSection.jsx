

import { Code, User, VideoIcon, Shapes } from "lucide-react"; // or update the import path as needed

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Web Developer, UI/UX Designer, and Video Editor
            </h3>

            <p className="text-muted-foreground">
              Hello! I’m Aubrey — I love creating things that look good and work even better. I'm into web development, UI/UX design, and video editing. Whether I’m coding a responsive website, designing a clean user interface, or editing a video that tells a story,
              I’m all about bringing creative ideas to life.
            </p>

            <p>
              I’ve worked with tools like HTML, CSS, JavaScript, React, Figma, and Adobe Premiere Pro. I'm always learning and exploring new ways to make cool and meaningful digital experiences. If it involves creativity and tech, I’m in!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {""}
                Get in Touch
              </a>

              <a href="https://drive.google.com/file/d/1Vn02F_EnoLpNw8ndiFtpShHTq_KjxVhO/view?usp=sharing" target="_blank" className="px-6 py-2 rounded-full border border-primary hover:bg-primary/10 transition-colors duration-300">
                {""}
                Download CV here
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications with
                    modern frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Designing intuitive user interfaces and seamless user
                    experiences.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <VideoIcon className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Video Editor</h4>
                  <p className="text-muted-foreground">
                    Precise, creative, and impactful video editing for digital media.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Shapes className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Blender (3D Modeling & Animation)</h4>
                  <p className="text-muted-foreground">
                    Bringing concepts to life through 3D modeling, animation, and rendering in Blender.
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