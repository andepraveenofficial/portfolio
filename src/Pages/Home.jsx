/* -----> Third Party Packages <----- */
import { useNavigate } from "react-router-dom"

/* -----> Assets <----- */
import Resume from "./../Assets/CV.pdf"

/* -----> Styles <----- */
const headingStyles =
{
    "fontFamily": "Zeyada, cursive",
    "fontWeight": "400",
    "fontStyle": "normal"
}


/* -----> Component <----- */
const Home = () => {
    console.log("   Home Page")

    // Routing 
    const navigate = useNavigate();

    // Return JSX
    return (
        <div className="z-50 flex flex-col items-center justify-center flex-1 gap-5 m-auto mx-8 text-white lg:mx-64">
            <div>
                <h1 style={headingStyles} className="text-[45px]">Hi There !</h1>
                <p className="text-[14px] sm:text-[18px] font-light sm:leading-7 leading-6">I am Ande Praveen, a Software Engineer focused on Front-End. I enjoy building stunning and user-friendly website building . Explore my skills, projects, and journey in About Me. If you're interested in working with me, please feel free to get in touch with me.</p>
            </div>
            <div className="flex flex-col gap-5 md:flex-row">
                <button className="p-3 text-black bg-white rounded-full" onClick={() => navigate("/contact")}>Contact Me</button>

                <a href={Resume} target="blank" download="Ande Praveen Resume" className="p-3 border rounded-full" >
                    Download CV
                </a>

            </div>
        </div>
    )
}

/* -----> Export <----- */
export default Home
