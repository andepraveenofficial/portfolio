
/* -----> Third Party Packages <----- */
import { useState } from "react";


/* -----> Logos & Icons <----- */
import { GiHamburgerMenu } from "react-icons/gi";

/* -----> Redux Actions <----- */
import { setMarkdown } from "./../Store/markdownSlice"
import { useDispatch } from "react-redux";

/* -----> Component <----- */
const Sidebar = () => {
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(true);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSubMenu = () => {
        setIsSubMenuOpen(!isSubMenuOpen);
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    // Redux 
    const dispatch = useDispatch()

    // Return JSX
    return (
        <div className={`sidebar  ${isSidebarOpen ? 'lg:left-0' : 'hidden'} p-2 w-[300px] overflow-y-auto text-center bg-inherit border rounded-xl`}>
            <div className="text-xl text-gray-100">
                <div className="p-2.5 mt-1 flex items-center">

                    <button onClick={toggleSidebar} className="md:hidden"><GiHamburgerMenu /></button>
                    <h1 className="font-bold text-gray-200 text-[15px] ml-3">My Learnings</h1>

                </div>
                <div className="my-2 bg-gray-600 h-[1px]"></div>
            </div>

            <div
                className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-600 text-white"
                onClick={toggleSubMenu}
            >

                <div className="flex items-center justify-between w-full p-2 rounded-md bg-slate-500">
                    <span className="text-[15px] ml-4 text-gray-200 font-bold ">Home</span>
                </div>
            </div>
            <div className={`text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold ${isSubMenuOpen ? '' : 'hidden'}`} id="submenu">
                <h1 className="p-2 mt-1 rounded-md cursor-pointer hover:bg-gray-600" onClick={() => dispatch(setMarkdown("html"))}>
                    HTML
                </h1>
                <h1 className="p-2 mt-1 rounded-md cursor-pointer hover:bg-gray-600" onClick={() => dispatch(setMarkdown("css"))}>
                    CSS
                </h1>
                <h1 className="p-2 mt-1 rounded-md cursor-pointer hover:bg-gray-600" onClick={() => dispatch(setMarkdown("javascript"))}>
                    Javascript
                </h1>
                <h1 className="p-2 mt-1 rounded-md cursor-pointer hover:bg-gray-600" onClick={() => dispatch(setMarkdown("react"))}>
                    ReactJS
                </h1>
                <h1 className="p-2 mt-1 rounded-md cursor-pointer hover:bg-gray-600" onClick={() => dispatch(setMarkdown("python"))}>
                    Python
                </h1>
                <h1 className="p-2 mt-1 rounded-md cursor-pointer hover:bg-gray-600" onClick={() => dispatch(setMarkdown("sqlite"))}>
                    SQLite
                </h1>
            </div>
            <div className="my-4 bg-gray-600 h-[1px]"></div>
            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-green-500 text-white">
                <i className="bi bi-box-arrow-in-right"></i>
                <span className="text-[15px] ml-4 text-gray-200 font-bold">Feedback</span>
            </div>
            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-red-500 text-white">

                <span className="text-[15px] ml-4 text-gray-200 font-bold">Logout</span>
            </div>
            <div className="my-4 bg-gray-600 h-[1px]"></div>
        </div>
    );
};

/* -----> Export <-----*/
export default Sidebar;