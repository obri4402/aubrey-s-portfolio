import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Thesis for Attendance Management System",
    description: "A web application for managing faculty's attendance, built with Wix.",
    image: "projects/Logpic1.jpg",
    tags: ["Wix", "UI/UX Design", "Attendance System"],
    demoUrl: "https://ericajoybatican2.wixsite.com/logpic"
  },
  {
    id: 2,
    title: "Blender 3D Model",
    description: "A 3D model created using Blender, showcasing my skills in 3D design.",
    image: "projects/pumpkin.jpg",
    tags: ["Blender", "3D Design", "Modeling", "Rendering"],
    demoUrl: "https://drive.google.com/drive/folders/1QfikfGbsvrVFM6atfJN72bB22RtKitSz?usp=sharing"
  },
  {
    id: 3,
    title: "Figma Designing",
    description: "Exploring UI/UX fundamentals through Figma. This project helped me learn layout design, typography, and basic prototyping.",
    image: "projects/figma.jpg",
    tags: ["Figma", "Web Design", "Prototype"]
  },

  {
    id: 4,
    title: "Editing",
    description: "Crafting compelling visuals through logo editing, pubmat and video editing.",
    image: "projects/women-project.jpg",
    tags: ["Logo", "Pubmats", "Video Editing"],
    demoUrl: "https://drive.google.com/drive/folders/1x0FGXdUanGhoABopMOcUNORmsOHXNWpQ?usp=sharing"
  },

  {
    id: 5,
    title: "Thesis for Automatic Irrigation System",
    description: "Plantlet: A wireless application for soil moisture, sunlight photoresistor monitoring and automated watering for lettuce.",
    image: "projects/plantletUI.jpg",
    tags: ["Automatic Irrigation", "Sunlight Monitoring", "Moisture Sensor"],
    demoUrl: "https://drive.google.com/drive/folders/1WeCnqIb4saSVUFx1R3wobZ0oyA6ZJZD_?usp=sharing"
  }


];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of the projects I worked on in college that showcase my skills and creativity. Click the external link to view more details or explore the live demos.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary transition-colors duration-300"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/obri4402"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
