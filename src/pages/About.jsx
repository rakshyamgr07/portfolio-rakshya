import { FaHtml5, FaCss3Alt,FaJs, FaReact,FaNodeJs, FaGitAlt, FaGithub} from "react-icons/fa";
import { SiExpress, SiMongodb, SiTailwindcss, SiPostman,SiVercel, SiRender,} from "react-icons/si";

function About() {
  const frontendSkills = [
    { name: "HTML", icon: FaHtml5,description:"Building structured web pages" },
    { name: "CSS", icon: FaCss3Alt ,description:"Styling responsive interfaces" },
    { name: "JavaScript", icon: FaJs ,description:"Adding interactive functionality" },
    { name: "React.js", icon: FaReact ,description:"Building dynamic user interfaces" },
    { name: "Tailwind CSS", icon: SiTailwindcss ,description:"Creating modern responsive designs" },
  ];

  const backendSkills = [
    { name: "Node.js", icon: FaNodeJs,description:"Building server-side applications"  },
    { name: "Express.js", icon: SiExpress,description:"Developing REST APIs"  },
    { name: "MongoDB", icon: SiMongodb ,description:"Managing application data" },
    { name: "REST APIs", icon: FaReact,description:"Connecting frontend and backend"  },
  ];

  const toolsSkills = [
    { name: "Git", icon: FaGitAlt ,description:"Tracking code changes" },
    { name: "GitHub", icon: FaGithub ,description:"Managing and sharing code" },
    { name: "Postman", icon: SiPostman ,description:"Testing REST APIs" },
    { name: "Vercel", icon: SiVercel ,description:"Deploying web applications" },
    { name: "Render", icon: SiRender ,description:"Deploying backend services" },
  ];

  const SkillCard = ({ skill }) => {
    const Icon = skill.icon;

    return (
      <div
        className=" group bg-white border border-slate-200 rounded-xl p-5  hover:border-blue-300 hover:shadow-md transition-all duration-300 w-50 h-42"
      >
        {/* Icon */}
        <div
          className="w-12 h-12 rounded-xl bg-blue-50 
           flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300"
        >
          <Icon className="text-2xl" />
        </div>

        {/* Skill name */}
        <h4 className="mt-4 text-lg font-semibold text-slate-900">
          {skill.name}
        </h4>

        <p className="mt-2 text-sm text-slate-500">
          {skill.description}
        </p>
      </div>
    );
  };

  return (
    <section className="bg-white py-16 px-4 font-serif w-full">
      <div className="  flex flex-col  items-center">

        <h1 className="text-slate-900 font-bold text-3xl md:text-4xl lg:text-5xl text-center hover:text-blue-800 transition duration-300 hover:scale-101 hover:underline">
          About Me
        </h1>

        <p className=" p-5 mx-20 text-center text-slate-600 text-base md:text-lg  w-full">
          Hello, I am Rakshya Gharti Magar, a passionate Full Stack MERN
          Developer from Nepal. I enjoy building responsive, scalable, and
          user-friendly web applications using MongoDB, Express.js, React,
          and Node.js.
        </p>

        <p className="  p-5 mx-20 text-center text-slate-600 text-base md:text-lg  w-full">
          I love learning new technologies, solving problems, and developing
          modern web applications with both efficient frontends and reliable
          backend systems. I am continuously improving my skills through
          hands-on projects and exploring modern full-stack development
          practices.
        </p>
    <div className=" m-4 border border-slate-200 rounded-xl p-5 flex flex-col gap-8 ">
          <h1 className="text-blue-900 font-bold text-3xl md:text-4xl lg:text-5xl text-center hover:text-blue-800 transition duration-300 hover:scale-101 hover:underline">
         My Skills
        </h1>
          
        <div className=" w-full grid grid-col-1 md:grid-cols-3 lg:grid-cols-3 content-evenly justify-center gap-4">
          
          {/* Frontend */}
          <div className="flex flex-col gap-4 bg-white border border-slate-200 rounded-xl p-3 hover:border-blue-300 hover:shadow-md transition-all duration-300 ">
            <h3 className="text-2xl font-bold text-slate-900 hover:text-blue-800 transition duration-300 hover:scale-101 ">
              Frontend
            </h3>

            <div className="flex flex-cols-2 flex-wrap md:flex md:flex-row md:flex-wrap gap-4">
              {frontendSkills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>

          {/* Backend & Database */}
          <div className="flex flex-col gap-4 border border-slate-200 rounded-xl p-3 hover:border-blue-300 hover:shadow-md transition-all duration-300 ">
            <h3 className="text-2xl font-bold text-slate-900 hover:text-blue-800 transition duration-300 hover:scale-101 ">
              Backend & Database
            </h3>

            <div className="flex flex-cols-2 flex-wrap md:flex md:flex-row md:flex-wrap gap-4">
              {backendSkills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>

          {/* Tools & Deployment */}
         <div className="flex flex-col gap-4 border border-slate-200 rounded-xl p-3 hover:border-blue-300 hover:shadow-md transition-all duration-300 ">
            <h3 className="text-2xl font-bold text-slate-900 hover:text-blue-800 transition duration-300 hover:scale-101 ">
              Tools & Deployment
            </h3>

            <div className="flex flex-cols-2 flex-wrap md:flex md:flex-row md:flex-wrap gap-4">
              {toolsSkills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>

        </div>
        </div>
      </div>
    </section>
  );
}

export default About;
