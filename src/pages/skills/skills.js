import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaBootstrap, FaJava, FaPython } from "react-icons/fa";
import { SiExpress, SiMysql, SiMongodb, SiJavascript, SiEjs, SiTailwindcss, SiGreensock, SiFramer, SiC, SiCplusplus, SiFigma } from "react-icons/si";

const skills = [
    { name: "React JS", Icon: FaReact, projects: ["Portfolio"] },
    { name: "Node JS", Icon: FaNodeJs, projects: ["WanderScript"] },
    { name: "Express JS", Icon: SiExpress, projects: ["WanderScript"] },
    { name: "MySQL", Icon: SiMysql, projects: ["WanderScript"] },
    { name: "MongoDB", Icon: SiMongodb, projects: ["WanderScript"] },
    { name: "JavaScript", Icon: SiJavascript, projects: ["WanderScript", "Portfolio"] },
    { name: "CSS", Icon: FaCss3Alt, projects: ["WanderScript", "Portfolio"] },
    { name: "EJS", Icon: SiEjs, projects: ["WanderScript"] },
    { name: "Tailwind CSS", Icon: SiTailwindcss, projects: [] },
    { name: "GSAP", Icon: SiGreensock, projects: [] },
    { name: "Framer Motion", Icon: SiFramer, projects: ["Portfolio"] },
    { name: "Figma", Icon: SiFigma, projects: ["WanderScript", "Portfolio"] },
    { name: "Git", Icon: FaGitAlt, projects: ["WanderScript", "Portfolio"] },
    { name: "Java", Icon: FaJava, projects: [] },
    { name: "C", Icon: SiC, projects: [] },
    { name: "C++", Icon: SiCplusplus, projects: [] },
    { name: "Python", Icon: FaPython, projects: [] },
    { name: "Bootstrap", Icon: FaBootstrap, projects: [] },
    { name: "HTML", Icon: FaHtml5, projects: ["WanderScript", "Portfolio"] }
];

export default skills;