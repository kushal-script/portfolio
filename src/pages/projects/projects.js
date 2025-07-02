import wanderScriptImg1 from "../../assets/images/WanderScript/wanderscriptimg1.png";
import wanderScriptImg2 from "../../assets/images/WanderScript/wanderscriptimg2.png";
import wanderScriptImg3 from "../../assets/images/WanderScript/wanderscriptimg3.png";
import wanderScriptImg4 from "../../assets/images/WanderScript/wanderscriptimg4.png";
import wanderScriptImg5 from "../../assets/images/WanderScript/wanderscriptimg5.png";
import wanderScriptImg6 from "../../assets/images/WanderScript/wanderscriptimg6.png";
import wanderScriptImg7 from "../../assets/images/WanderScript/wanderscriptimg7.png";

import portfolioImg1 from "../../assets/images/Portfolio/portfolioimg1.png";

const projects = [
    {
      title: "WanderScript",
      description: "A full-featured blogging and social platform with user authentication, post creation/editing, upvotes, followers, and integrated messaging using Node.js, MySQL, and MongoDB. Designed with a sleek dark UI and real-time comment system.",
      images: [wanderScriptImg1, wanderScriptImg2, wanderScriptImg3, wanderScriptImg4, wanderScriptImg5, wanderScriptImg6, wanderScriptImg7],
      tech: ["React JS", "Node JS", "Express JS", "MySQL", "MongoDB", "EJS", "Java Script"],
      demoLink: "",
      codeLink: "https://github.com/kushal-script/WanderScript.git"
    },
    {
      title: "My Portfolio",
      description: "A visually engaging personal portfolio built with React and Framer Motion. Features smooth page transitions, typing intro animation, interactive stats, and a neon-themed dark mode design.",
      images: [portfolioImg1],
      tech: ["React JS", "CSS", "GSAP", "Framer Motion", "Java Script"],
      demoLink: "",
      codeLink: "https://github.com/kushal-script/portfolio.git"
    }
  ];
  
  export default projects;