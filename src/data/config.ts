const config = {
  title: "I'm Anmol | UI/UX Designer",
  description: {
    long: "Explore the portfolio of Anmol, a UI/UX Designer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Coding Ducks, The Booking Desk, Ghostchat, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Anmol, a UI/UX Designer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Anmol",
    "portfolio",
    "UI/UX Designer",
    "creative technologist",
    "web development",
    "interactive websites",
    "Coding Ducks",
    "The Booking Desk",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Anmol Sharma",
  email: "anmoksha.official@gmail.com",
  site: "https://imAnmolportfolio.vercel.app",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    github: "https://github.com/comraderl",
    linkedin: "https://www.linkedin.com/in/anmol001",
    twitter: "https://twitter.com/AnmolSharmaz",
    instagram: "https://www.instagram.com/anmol.sharma009/",
  },
};
export { config };
