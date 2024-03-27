/* -----> Third Party packages <----- */
import { useSelector } from "react-redux"
import remarkGfm from 'remark-gfm';

/* -----> Markdown Files <----- */
import HTML from "./../Assets/markdownFIles/HTML.mdx"
import CSS from "./../Assets/markdownFIles/CSS.mdx"
import JAVASCRIPT from "./../Assets/markdownFIles/JAVASCRIPT.mdx"
import REACT from "./../Assets/markdownFIles/REACT.mdx"
import PYTHON from "./../Assets/markdownFIles/PYTHON.mdx"
import SQLITE from "./../Assets/markdownFIles/SQLite.mdx"

/* -----> Styles <----- */
import "@code-hike/mdx/styles"  // Styles
import MarkdownStyles from "../StyledComponents/MarkdownStyles"

const Markdown = () => {

    const selectMarkdown = useSelector((state) => state.markdown)
    // console.log(selectMarkdown)

    const renderMarkDown = () => {
        switch (selectMarkdown) {
            case "html":
                return <HTML />
            case "css":
                return <CSS />
            case "javascript":
                return <JAVASCRIPT />
            case "react":
                return <REACT />
            case "python":
                return <PYTHON />
            case "sqlite":
                return <SQLITE />
        }
    }

    return (

        <div className="w-screen bg-[#333] max-w-screen-2xl" >
            <MarkdownStyles remarkPlugins={[remarkGfm]}>{renderMarkDown()}</MarkdownStyles>
        </div>
    )
}

export default Markdown