/* -----> External Components <----- */
import styled from "styled-components";
import ContactForm from "../Components/ContactForm"

/* -----> Styles <----- */
const Heading = styled.h1`
  font-family: "Tangerine", cursive;
  font-weight: 700;
  font-style: normal;
  font-size:45px;
`;

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