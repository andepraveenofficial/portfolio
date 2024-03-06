import Markdown from "../Components/Markdown"
import Sidebar from "../Layouts/Sidebar"

/* -----> Component <----- */
const Learning = () => {
    console.log("   Learning Page")

    // Return JSX
    return (
        <div className="z-50 flex flex-1 gap-3 text-white">
            <div>
                <Sidebar />
            </div>
            <div><Markdown /></div>
        </div>
    )
}

/* -----> Export <----- */
export default Learning










