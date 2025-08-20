import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML/CSS", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },

  // version control
  { name: "Git/GitHub", category: "version control" },
  { name: "Visual Studio Code", category: "version control" },

  //office tools
  { name: "Microsoft Word", category: "productivity & Office tools" },
  { name: "Microsoft Excel", category: "productivity & Office tools" },
  { name: "Microsoft PowerPoint", category: "productivity & Office tools" },

  //design and creative
  { name: "Figma", category: "design and creative" },
  { name: "Blender", category: "design and creative" },
  { name: "Canva", category: "design and creative" },
  { name: "CapCut", category: "design and creative" },
  { name: "Adobe Premiere", category: "design and creative" },
  { name: "Adobe Photoshop", category: "design and creative" },


  // Database
  { name: "MySQL", category: "database" }

];

const categories = ["all", "frontend", "database", "design and creative", "productivity & Office tools", "version control"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-center">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};