/* -----> External Components <----- */
import ContactForm from "../Components/ContactForm"

/* -----> Styles <----- */
import { Heading } from "../StyledComponents";

/* -----> Component <----- */
const Contact = () => {
    console.log("   Contact Page")

    // Return JSX
    return (
        <div className="z-50 flex flex-col items-center justify-center flex-1 mx-8 text-white lg:mx-96">
            <div>
                <Heading>Hire me</Heading>
                <p className="text-base">Welcome again to my portfolio! If you have any questions or if you'd like to discuss a project or job offer, feel free to get in touch. I'm always open to new opportunities and collaborations.</p>
                <div>
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}

/* -----> Export <----- */
export default Contact