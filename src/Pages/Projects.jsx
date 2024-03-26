
/* -----> Third Party Packages <----- */
import { motion } from "framer-motion";

/* -----> Icons & Logos <----- */
import { TbBrandNetflix } from "react-icons/tb";
import { SiSwiggy } from "react-icons/si";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";

/* -----> Styles <----- */
import { Heading } from "../StyledComponents";
import { ProjectIcon, ProjectTitle } from "../StyledComponents";
const projectICONsStyles = "hover:shadow-lg hover:transition hover:scale-110 text-8xl hover:border hover:rounded-lg p-2"

/* -----> Hard Data <----- */
const myProjects = [
    {
        id: 1,
        project: <BsYoutube className={projectICONsStyles} />,
        title: "Youtube Clone",
        hoverColor: "#FF0000",
        titleColor: "#FF0000", // Red
    },
    {
        id: 2,
        project: <BsInstagram className={projectICONsStyles} />,
        title: "Instagram Clone",
        hoverColor: "#833AB4",
        titleColor: "#833AB4", // Instagram Purple
    },
    {
        id: 3,
        project: <SiSwiggy className={projectICONsStyles} />,
        title: "Swiggy Clone",
        hoverColor: "#FE5000",
        titleColor: "#FE5000", // Swiggy Orange
    },
    {
        id: 4,
        project: <TbBrandNetflix className={projectICONsStyles} />,
        title: "Netflix Clone",
        hoverColor: "#E50914",
        titleColor: "#E50914", // Netflix Red
    },
];

/* -----> Component <----- */
const Projects = () => {
    console.log("   Projects Page")

    // Return JSX
    return (
        <div className="z-50 flex flex-col items-center justify-center flex-1 mx-8 text-white lg:mx-96">
            <div className="flex flex-col gap-5">
                <motion.div
                    initial={{ scale: 5 }}
                    animate={{ rotate: 360, scale: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0,
                        duration: 2,
                        ease: "easeInOut",  // Use a smoother "easeInOut" easing for the animation
                    }}
                >
                    <Heading className="text-center">My Projects</Heading>
                </motion.div>

                <div className="flex flex-row flex-wrap justify-center gap-5">
                    {myProjects.map((each) =>
                        <motion.div initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: 1,
                                delay: 1,
                            }}
                            key={each.id}>
                            <div >
                                <div className="flex flex-col items-center gap-5">
                                    <ProjectIcon hoverColor={each.hoverColor}>
                                        {each.project}
                                    </ProjectIcon>
                                    <ProjectTitle titleColor={each.titleColor}>
                                        {each.title}
                                    </ProjectTitle>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    )
}

/* -----> Export <----- */
export default Projects

