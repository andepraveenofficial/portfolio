/* -----> Third Party Packages <----- */
import { motion } from "framer-motion";

/* -----> Icons & Logos <----- */
import { FaFigma } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { BsGit } from "react-icons/bs";
import { SiSqlite } from "react-icons/si";
import { DiPython } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { BsBootstrap } from "react-icons/bs";
import { DiCss3 } from "react-icons/di";
import { AiOutlineHtml5 } from "react-icons/ai";

/* -----> Styles <----- */
import { Heading } from "../StyledComponents";

const techICONsStyles = "hover:shadow-lg hover:transition hover:scale-110 text-8xl hover:border hover:rounded-lg p-2"

/* -----> Component <----- */

const Skills = () => {
    console.log("   Skills Page")

    // Return JSX
    return (
        <div className="z-50 flex flex-col items-center justify-center flex-1 mx-8 text-white lg:mx-96">
            <div className="flex flex-col gap-6">
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
                    <Heading className="text-center">My Tech Skills</Heading>
                </motion.div>

                <div className="flex flex-row flex-wrap justify-center gap-3">
                    <AiOutlineHtml5 className={` hover:text-red-500 hover:shadow-outline-red ${techICONsStyles}`} />
                    <DiCss3 className={`hover:text-blue-500 hover:shadow-outline-blue ${techICONsStyles}`} />
                    <BsBootstrap className={`hover:text-purple-500 hover:shadow-outline-purple ${techICONsStyles}`} />
                    <SiTailwindcss className={`hover:text-teal-500 hover:shadow-outline-teal ${techICONsStyles}`} />
                    <TbBrandJavascript className={`hover:text-yellow-500 hover:shadow-outline-yellow ${techICONsStyles}`} />
                    <FaReact className={`hover:text-indigo-500 hover:shadow-outline-indigo ${techICONsStyles}`} />
                    <IoLogoNodejs className={`hover:text-green-500 hover:shadow-outline-green ${techICONsStyles}`} />
                    <SiExpress className={`hover:text-pink-500 hover:shadow-outline-pink ${techICONsStyles}`} />
                    <DiPython className={`hover:text-orange-500 hover:shadow-outline-orange ${techICONsStyles}`} />
                    <SiSqlite className={`hover:text-gray-500 hover:shadow-outline-gray ${techICONsStyles}`} />
                    <BsGit className={`hover:text-red-500 hover:shadow-outline-red ${techICONsStyles}`} />
                    <AiFillGithub className={`hover:text-blue-500 hover:shadow-outline-blue ${techICONsStyles}`} />
                    <FaFigma className={`hover:text-purple-500 hover:shadow-outline-purple ${techICONsStyles}`} />
                </div>
                <p className="text-base text-center">While the world searches for profound truths, I'm here fixing those pesky missing semicolons. Coding is my art, and I turn caffeine into creativity, one line at a time.</p>
            </div>

        </div >
    )
}

/* -----> Export <----- */
export default Skills