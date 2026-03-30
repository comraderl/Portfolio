import SlideShow from "@/components/slide-show";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import React from "react";
import { Project, PROJECT_SKILLS, ProjectsLinks } from "./projects";

const experiences: Project[] = [
  {
    id: "android-internship",
    category: "Experience & Training",
    title: "Android App Development Internship - Interns Elite",
    src: "/assets/projects-screenshots/android-internship.png",
    screenshots: ["android-internship.png"],
    live: "https://android-internship-demo.vercel.app",
    skills: {
      frontend: [
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            During my Android App Development internship with Interns Elite, I gained hands-on experience
            in building native Android applications. I learned mobile app architecture,
            UI/UX design for mobile platforms, and best practices in Android development.
            This internship strengthened my understanding of mobile-first development
            and cross-platform considerations.
          </TypographyP>
          <ProjectsLinks live={this.live} />
          <SlideShow
            images={[
              "/assets/projects-screenshots/interns-elite-certificate.png",
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Android Development Skills</TypographyH3>
          <p className="font-mono mb-2">
            Developed proficiency in Android SDK, native application development,
            and mobile UI design principles. Built responsive applications with proper
            state management and performance optimization for mobile devices.
          </p>
        </div>
      );
    },
  },
  {
    id: "multimedia-operations",
    category: "Media & Production",
    title: "Head of Operations - Guby Roger",
    src: "/assets/projects-screenshots/guby-roger.png",
    screenshots: ["guby-roger.png"],
    live: "https://guby-roger-demo.vercel.app",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            As Head of Operations at Guby Roger, I managed media operations and
            handled pre and post-production of client projects. This role involved
            coordinating production timelines, managing assets, quality assurance,
            and ensuring deliverables met client specifications and deadlines.
          </TypographyP>
          <ProjectsLinks live={this.live} />
          <SlideShow
            images={[
              "/assets/projects-screenshots/guby-roger.png",
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Operations & Production Management</TypographyH3>
          <p className="font-mono mb-2">
            Managed end-to-end production workflows, coordinated team resources,
            and ensured quality standards. Developed processes for efficient media
            handling, client communication, and project delivery optimization.
          </p>
        </div>
      );
    },
  },
  {
    id: "accidental-engineer",
    category: "Film & Entertainment",
    title: "Junior Artist - The Accidental Engineer",
    src: "/assets/projects-screenshots/accidental-engineer.png",
    screenshots: [
      "accidental-engineer.png",
      "accidental-engineer-2.jpeg",
      "accidental-engineer-3.jpeg",
      "accidental-engineer-4.jpeg",
      "accidental-engineer-5.jpeg",
    ],
    live: "https://accidental-engineer-demo.vercel.app",
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.framerMotion,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            As a Junior Artist (Actor) with The Accidental Engineer, I contributed
            to multimedia content creation and production. This experience involved
            on-set performance, content collaboration, and understanding the creative
            process behind technical and artistic projects.
          </TypographyP>
          <ProjectsLinks live={this.live} />
          <SlideShow
            images={[
              "/assets/projects-screenshots/accidental-engineer.png",
              "/assets/projects-screenshots/accidental-engineer-2.jpeg",
              "/assets/projects-screenshots/accidental-engineer-3.jpeg",
              "/assets/projects-screenshots/accidental-engineer-4.jpeg",
              "/assets/projects-screenshots/accidental-engineer-5.jpeg",
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Creative & Performance Experience</TypographyH3>
          <p className="font-mono mb-2">
            Developed skills in on-screen performance, content creation, and creative
            collaboration. Learned how to work effectively with production teams and
            contribute meaningfully to multimedia projects and content development.
          </p>
        </div>
      );
    },
  },
];

export default experiences;
