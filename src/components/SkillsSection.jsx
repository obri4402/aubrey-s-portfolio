import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "React", category: "frontend" },
  { name: "HTML/CSS", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },

  // Frameworks
  { name: "Next.js", category: "frameworks" },
  { name: "Express.js", category: "frameworks" },
  { name: "Bootstrap", category: "frameworks" },

  // Backend / Programming Languages
  { name: "Java", category: "backend" },
  { name: "JavaScript", category: "backend" },
  { name: "PHP", category: "backend" },

  // Database
  { name: "MySQL", category: "database" },

  // Tools / Version Control
  { name: "Git", category: "tools" },
  { name: "GitHub", category: "tools" },
  { name: "Visual Studio Code", category: "tools" },

  // Design & Creative
  { name: "Figma", category: "design" },
  { name: "Canva", category: "design" },
  { name: "Blender", category: "design" },
  { name: "CapCut", category: "design" },
  { name: "Adobe Premiere Pro", category: "design" },
  { name: "Adobe Photoshop", category: "design" },

  // Productivity
  { name: "Microsoft Word", category: "productivity" },
  { name: "Microsoft Excel", category: "productivity" },
  { name: "Microsoft PowerPoint", category: "productivity" },
];

const categories = [
  "all",
  "frontend",
  "frameworks",
  "backend",
  "database",
  "tools",
  "design",
  "productivity",
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) =>
      activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="bg-card p-6 rounded-lg shadow-sm card-hover"
            >
              <div className="text-center">
                <h3 className="font-semibold text-lg">
                  {skill.name}
                </h3>
              </div>

              {/* Simple progress bar placeholder */}
              <div className="w-full bg-secondary/50 h-2 rounded-full mt-4 overflow-hidden">
                <div className="h-full w-2/3 bg-primary rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};