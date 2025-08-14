import { motion } from "framer-motion";

const skills = [
    {name: "JavaScript", icon: "devicon-javascript-plain colored" },
    {name: "React", icon: "devicon-react-original colored" },
    {name: "HTML5", icon: "devicon-html5-plain colored" },
    {name: "CSS3", icon: "devicon-css3-plain colored" },
    {name: "TailwindCSS", icon: "devicon-tailwindcss-plain colored" },
    {name: "Redux", icon: "devicon-redux-original"},
    {name: "Flask", icon: "devicon-flask-original" },
    {name: "PostgreSQL", icon: "devicon-postgresql-plain"},
    {name: "Docker", icon: "devicon-docker-plain"},
    {name: "Git VCS", icon: "devicon-git-plain colored"},
    {name: "Github", icon: "devicon-github-original"},
]
          
function Skills() {

    return (
        <div className="bg-gray-500 py-1">
        <div className="min-h-[90vh] bg-gradient-to-b from-[#57059e] to-[#4a00e0] py-16 shadow-lg  rounded-lg">

            <div className="w-[90vh] mx-auto bg-[rgba(0,0,22,0.4)] text-white rounded-2xl p-8 mt-12">
                <div className="text-center mb-12">
                    <h2 className="text-2xl font-bold text-white mb-4">
                        Skills &amp; <span className="text-[rgb(255,230,0)]">Abilities</span>
                    </h2>
                </div>
                
                <div className="grid grid-col-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-[1.8rem]">
                    {skills.map((skill, index) =>(
                        <motion.div 
                        key={index}
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y:0}}
                        transition={{duration: 0.4, delay: index * 0.1}}
                        viewport={{once: true}} 
                        className="w-28 aspect-square mb-[15px] p-2.5 rounded-2xl shadow-[0_4px_10px_rgba(0,0,0,0.2)] bg-[rgba(0,0,22,0.9)] transition duration-200 hover:shadow-[0_8px_10px_rgba(0,2,68,0.8)] hover:bg-black/90"
                        >
                            <div className="flex flex-col items-center gap-4 mt-4">
                                <i className={`${skill.icon} text-[3rem]`}></i>
                                <span className="font-medium font-[Poppins] ml-2">{skill.name}</span>
                            </div>
                        </motion.div>
                    ))}
                    <div className="w-28 aspect-square mb-[15px] p-2.5 rounded-2xl shadow-[0_4px_10px_rgba(0,0,0,0.2)] bg-[rgba(0,0,22,0.9)] transition duration-200 hover:shadow-[0_8px_10px_rgba(0,2,68,0.8)] hover:bg-black/90">
                        <div className="flex flex-col items-center gap-4 mt-4">
                            <img className="w-15 h-12" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python logo"/>
                            <span className="font-medium font-[Poppins] ml-2">Python</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        </div>
    );
}

export default Skills