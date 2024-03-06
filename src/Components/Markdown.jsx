/* -----> Third Party packages <----- */
import { useSelector } from "react-redux"

/* -----> Markdown Files <----- */
import HTML from "./../Assets/markdownFIles/html/Html.mdx"
import CSS from "./../Assets/markdownFIles/css/Css.mdx"
import JAVASCRIPT from "./../Assets/markdownFIles/javascript/Javascript.mdx"
import REACT from "./../Assets/markdownFIles/react/react.mdx"
import PYTHON from "./../Assets/markdownFIles/python/Python.mdx"
import SQLITE from "./../Assets/markdownFIles/sqlite/SQLite.mdx"

import "@code-hike/mdx/styles"  // Styles

const Markdown = () => {

    const selectMarkdown = useSelector((state) => state.markdown)
    console.log(selectMarkdown)

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
        <div className="w-auto bg-[#333]">{renderMarkDown()}</div>
    )
}

export default Markdown