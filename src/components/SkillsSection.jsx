import {
  Braces,
  Database,
  LayoutTemplate,
  Palette,
  FileText,
  Wrench,
} from "lucide-react";

const skillGroups = [
  {
    title: "Programming Languages",
    icon: Braces,
    skills: ["JavaScript", "Java", "PHP"],
  },
  {
    title: "Frontend Development",
    icon: LayoutTemplate,
    skills: ["React", "Next.js", "HTML/CSS", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Backend & Databases",
    icon: Database,
    skills: ["Express.js", "MySQL"],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: ["Git", "GitHub", "Visual Studio Code"],
  },
  {
    title: "Design & Creative",
    icon: Palette,
    skills: [
      "Figma",
      "Canva",
      "Blender",
      "CapCut",
      "Adobe Premiere Pro",
      "Adobe Photoshop",
    ],
  },
  {
    title: "Productivity",
    icon: FileText,
    skills: ["Microsoft Word", "Microsoft Excel", "Microsoft PowerPoint"],
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 md:py-24 relative bg-secondary/40">
      <div className="container max-w-5xl">
        <h2 className="section-title">
          My <span className="text-primary">Skills</span>
        </h2>
        <p className="section-subtitle mb-10 md:mb-14">
          Technologies and tools I work with, grouped by area.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {skillGroups.map(({ title, icon, skills }) => {
            const Icon = icon;
            return (
            <article
              key={title}
              className="gradient-border p-5 md:p-6 text-left card-hover"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                  <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-lg leading-snug">{title}</h3>
              </div>

              <ul className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="px-3 py-1.5 text-sm font-medium rounded-full border border-border bg-secondary text-secondary-foreground"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
