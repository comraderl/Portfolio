import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "baba-tillu",
    category: "AI & ML",
    title: "Baba Tillu",
    src: "/assets/projects-screenshots/baba-tillu.png",
    screenshots: ["baba-tillu.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.shadcn,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.mongo,
        PROJECT_SKILLS.express,
      ],
    },
    live: "https://baba-tillu-demo.vercel.app",
    github: "https://github.com/dummy/baba-tillu",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Baba Tillu is an intelligent AI-powered astrology chatbot that provides
            personalized astrological insights and guidance. Ask questions about
            your horoscope, birth chart interpretation, planetary transits, and life
            guidance powered by advanced AI models trained on astrology knowledge.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              "/assets/projects-screenshots/baba-tillu.png",
            ]}
          />
          <TypographyH3 className="my-4 mt-8">AI-Powered Astrology</TypographyH3>
          <p className="font-mono mb-2">
            Get instant astrological readings and guidance through an intelligent
            chatbot. Receive personalized horoscope predictions, birth chart analysis,
            and planetary insights tailored to your zodiac sign and birth details.
          </p>
        </div>
      );
    },
  },
  {
    id: "skillvault",
    category: "Productivity & Learning",
    title: "SkillVault",
    src: "/assets/projects-screenshots/skillvault-proto.png",
    screenshots: ["skillvault-proto.png"],
    live: "https://skillvault-demo.vercel.app",
    github: "https://github.com/dummy/skillvault",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.shadcn,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.prisma,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            SkillVault is an intelligent skill tracking and learning platform that
            helps users visualize their progress, set learning goals, and track
            competencies across multiple domains. Built on a beautiful Figma prototype,
            it combines modern UI/UX with powerful backend analytics to provide
            personalized learning insights and achievement tracking.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              "/assets/projects-screenshots/skillvault-proto.png",
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Comprehensive Skill Tracking</TypographyH3>
          <p className="font-mono mb-2">
            Track your progress across multiple skill categories with interactive
            dashboards and progress visualizations. Get actionable recommendations
            based on your learning patterns and set achievable milestones for continuous
            self-improvement and career development.
          </p>
        </div>
      );
    },
  },
  {
    id: "zenaudio",
    category: "AI & ML",
    title: "ZenAudio",
    src: "/assets/projects-screenshots/zenaudio-proto.png",
    screenshots: ["zenaudio-proto.png"],
    live: "https://zenaudio-demo.vercel.app",
    github: "https://github.com/dummy/zenaudio",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.shadcn,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.mongo,
        PROJECT_SKILLS.express,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            ZenAudio is an AI-powered podcast recommendation engine that understands
            your unique preferences and suggests podcasts you&apos;ll actually love. Chat
            naturally with our intelligent chatbot to discover your next favorite podcast
            in seconds instead of endless scrolling through directories.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              "/assets/projects-screenshots/zenaudio-proto.png",
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Smart Podcast Discovery</TypographyH3>
          <p className="font-mono mb-2">
            Our advanced AI analyzes thousands of podcasts to match your unique interests
            and listening preferences. Have natural conversations with ZenAudio just like
            talking to a friend who knows podcasts inside and out. Get personalized
            recommendations tailored to your specific tastes and mood.
          </p>
          <TypographyH3 className="my-4 mt-8">Time-Saving Discovery</TypographyH3>
          <p className="font-mono mb-2">
            Find your perfect podcast match in seconds. No endless scrolling, no genre
            limitations. Join thousands of podcast enthusiasts who discovered their
            favorite shows through ZenAudio&apos;s intelligent recommendation system.
          </p>
        </div>
      );
    },
  },
  {
    id: "android-internship",
    category: "Experience & Training",
    title: "Android App Development Internship",
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
            During my Android App Development internship, I gained hands-on experience
            in building native Android applications. I learned mobile app architecture,
            UI/UX design for mobile platforms, and best practices in Android development.
            This internship strengthened my understanding of mobile-first development
            and cross-platform considerations.
          </TypographyP>
          <ProjectsLinks live={this.live} />
          <SlideShow
            images={[
              "/assets/projects-screenshots/android-internship.png",
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
export default projects;
