import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Design for Attendance Management System",
    description:
      "A UI/UX design project for a Faculty Attendance Management System, developed as part of our college thesis using Wix.",
    image: "/projects/Logpic1.jpg",
    tags: ["Wix", "UI/UX Design", "Attendance System"],
    demoUrl: "https://ericajoybatican2.wixsite.com/logpic"
  },

  {
    id: 2,
    title: "Good Luck Letter Website",
    description:
      "A personal “good luck” letter website built using HTML, CSS, and JavaScript, created to practice web development skills while expressing admiration for someone special.",
    image: "/projects/love-letter.png",
    tags: ["HTML", "CSS", "JavaScript", "Creative Project"],
    demoUrl: "https://for-my-idol.vercel.app/"
  },

  {
    id: 3,
    title: "Login and Registration System",
    description:
      "A login and registration system developed using PHP, MySQL, and JavaScript with user authentication and database integration, hosted on InfinityFree.",
    image: "/projects/login.png",
    tags: ["PHP", "JavaScript", "MySQL", "Authentication", "InfinityFree"],
    demoUrl: "https://aubrey-nastor.infinityfreeapp.com"
  },

  {
    id: 4,
    title: "Blender 3D Model",
    description:
      "A 3D model created using Blender, showcasing my skills in 3D design.",
    image: "/projects/pumpkin.jpg",
    tags: ["Blender", "3D Design", "Modeling", "Rendering"],
    demoUrl:
      "https://drive.google.com/drive/folders/1QfikfGbsvrVFM6atfJN72bB22RtKitSz?usp=sharing"
  },

  {
    id: 5,
    title: "Figma Designing",
    description:
      "Exploring UI/UX fundamentals through Figma. This project helped me learn layout design, typography, and basic prototyping.",
    image: "/projects/figma.jpg",
    tags: ["Figma", "Web Design", "Prototype"]
  },

  {
    id: 6,
    title: "Editing",
    description:
      "Crafting compelling visuals through logo editing, pubmat and video editing.",
    image: "/projects/women-project.jpg",
    tags: ["Logo", "Pubmats", "Video Editing"],
    demoUrl:
      "https://drive.google.com/drive/folders/1x0FGXdUanGhoABopMOcUNORmsOHXNWpQ?usp=sharing"
  },

  {
    id: 7,
    title: "Thesis for Automatic Irrigation System",
    description:
      "A Wireless Application for Soil Moisture, Sunlight Monitoring, and Automatic Irrigation System using Arduino for Lactuca sativa.",
    image: "/projects/plantletUI.jpg",
    tags: [
      "Automatic Irrigation",
      "Sunlight Monitoring",
      "Moisture Sensor"
    ],
    demoUrl:
      "https://drive.google.com/drive/folders/1WeCnqIb4saSVUFx1R3wobZ0oyA6ZJZD_?usp=sharing"
  },

];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 md:py-24 relative">
      <div className="container max-w-5xl">
        <h2 className="section-title">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="section-subtitle mb-10 md:mb-14">
          Here are some of the projects I worked on in college that showcase my
          skills and creativity. Open a project to view more details or explore
          the live demo.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col bg-card rounded-xl border border-border overflow-hidden shadow-xs card-hover text-left"
            >
              <div className="aspect-[16/10] overflow-hidden bg-secondary">
                <img
                  src={project.image}
                  alt={`Preview of ${project.title}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold leading-snug">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mt-2 mb-4">
                  {project.description}
                </p>

                <ul className="flex flex-wrap gap-2 mb-5" aria-label="Technologies and topics">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="px-2.5 py-1 text-xs font-medium border border-border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                {(project.demoUrl || project.githubUrl) && (
                  <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-primary hover:underline underline-offset-4"
                      >
                        <ExternalLink size={18} aria-hidden="true" />
                        View project
                        <span className="sr-only">: {project.title} (opens in a new tab)</span>
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-primary hover:underline underline-offset-4"
                      >
                        <Github size={18} aria-hidden="true" />
                        Source code
                        <span className="sr-only">: {project.title} (opens in a new tab)</span>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/obri4402"
          >
            Check My GitHub <ArrowRight size={16} aria-hidden="true" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </div>
      </div>
    </section>
  );
};
