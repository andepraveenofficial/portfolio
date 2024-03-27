import styled from "styled-components";
import Markdown from "../Components/Markdown"
import Sidebar from "../Layouts/Sidebar"

/* -----> Security <----- */
import usePrintScreenDisable from "../Security/usePrintScreenDisable"

/* -----> Styles <----- */
export const BlackScreenOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.95); /* Adjust opacity as needed */
  z-index: 9999; /* Ensure it appears above other content */
`;

/* -----> Component <----- */
const Learning = () => {
    console.log("   Learning Page")

    const blackscreen = usePrintScreenDisable()

    // Return JSX
    return (
        <div className="z-50 flex flex-1 gap-3 text-white">
            <div>
                <Sidebar />
            </div>
            {blackscreen ? <BlackScreenOverlay /> : <div className="m-5"><Markdown /></div>}

        </div>
    )
}

/* -----> Export <----- */
export default Learning

