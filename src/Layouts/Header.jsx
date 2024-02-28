/* -----> Third Party Packages <----- */
import { useState } from 'react';
import { Link } from 'react-router-dom';

/* -----> Icons & Logos <----- */
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";


/* -----> Component <----- */
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Methods
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // React Elements
    const socialIcons = <>
        <a href="https://www.linkedin.com/in/andepraveen/" target="blank">
            <AiFillLinkedin className='w-6 h-6' />
        </a>
        <a href="https://github.com/andepraveenofficial" target="blank">
            <AiFillGithub className='w-6 h-6' />
        </a>
    </>

    // Return JSX
    return (
        <header className="w-full bg-white">
            <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Ande Praveen</span>
                </div>
                <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
                    <div className={isMenuOpen ? 'hidden' : 'hidden gap-2 md:flex'}>
                        {socialIcons}
                    </div>

                    <button
                        onClick={toggleMenu}
                        type="button"
                        className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    >
                        <GiHamburgerMenu />
                    </button>
                </div>
                <div className={isMenuOpen ? 'items-center justify-between w-full md:flex md:w-auto md:order-1' : 'hidden w-full md:flex md:w-auto md:order-1'} id="navbar-sticky">
                    <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link to="/" className="block px-3 py-2 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" >Home</Link>
                        </li>
                        <li>
                            <Link to="/about" className="block px-3 py-2 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" >About</Link>
                        </li>
                        <li>
                            <Link to="/skills" className="block px-3 py-2 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" >Skills</Link>
                        </li>
                        <li>
                            <Link to="/projects" className="block px-3 py-2 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" >Projects</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="block px-3 py-2 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" >Contact</Link>
                        </li>
                        <li>
                            <div className={`${isMenuOpen ? "flex gap-2 md:hidden" : "flex gap-2 md:hidden"} px-3 py-2 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500`}>
                                {socialIcons}
                            </div>
                        </li>

                    </ul>
                </div>
            </div>
        </header >
    );
};

/* -----> Export <----- */
export default Header;
