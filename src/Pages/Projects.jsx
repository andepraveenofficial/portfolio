
/* -----> Third Party Packages <----- */
import styled from "styled-components";
import { motion } from "framer-motion";

/* -----> Icons & Logos <----- */
import { TbBrandNetflix } from "react-icons/tb";
import { SiSwiggy } from "react-icons/si";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";

/* -----> Styles <----- */
const Heading = styled.h1`
  font-family: "Tangerine", cursive;
  font-weight: 700;
  font-style: normal;
  font-size:45px;
`;

// Styled component for project icons with hover effect
const ProjectIcon = styled.div`
  font-size: 8rem;
  transition: all 0.3s ease-in-out;
  color: #fff; /* Set default color */

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    color: ${(props) => props.hoverColor}; /* Change color on hover */
  }
`;

const ProjectTitle = styled.p`
  font-size: 20px;
  color: ${(props) => props.titleColor}; /* Apply the color here */
`;

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
                                <div className="flex flex-col items-center ">
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

