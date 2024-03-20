import { FaLinkedinIn } from "react-icons/fa";
/* -----> Third Party Packages <----- */
import { useState } from 'react';
import { Link } from 'react-router-dom';

/* -----> Icons & Logos <----- */
import { AiFillGithub } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "./../Assets/Logo"


/* -----> Component <----- */
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Methods
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // React Elements
    const socialIcons = <>
        <a href="https://www.linkedin.com/in/andepraveen/" target="blank" className="p-2 rounded-full hover:bg-gray-600">

            <FaLinkedinIn className='w-6 h-6 text-white ' />
        </a>
        <a href="https://github.com/andepraveenofficial" target="blank" className="p-2 rounded-full hover:bg-gray-600">
            <AiFillGithub className='w-6 h-6 text-white ' />
        </a>
    </>

    // Return JSX
    return (
        <header className="z-50 w-full">
            <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Logo />
                </div>
                <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
                    <div className={isMenuOpen ? 'hidden' : 'hidden gap-2 md:flex z-50'}>
                        {socialIcons}
                    </div>

                    <button
                        onClick={toggleMenu}
                        type="button"
                        className="z-50 inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    >
                        <GiHamburgerMenu className='text-white w-7 h-7' />
                    </button>
                </div>
                <div className={isMenuOpen ? 'items-center justify-between w-full md:flex md:w-auto md:order-1 z-50' : 'hidden w-full md:flex md:w-auto md:order-1 z-50'} id="navbar-sticky">
                    <ul className="flex flex-col p-3 h-auto bg-[#6d6d6f80] mt-4 font-sm rounded-lg  gap-2 rtl:space-x-reverse md:flex-row md:mt-0 md:justify-space-between md:items-center md:p-2.5 z-50">
                        <li className='rounded-full hover:bg-gray-600'>
                            <Link to="/" className="block px-3 py-2 text-white rounded " >Home</Link>
                        </li>
                        <li className='rounded-full hover:bg-gray-600'>
                            <Link to="/about" className="block px-3 py-2 text-white rounded " >About</Link>
                        </li>
                        <li className='rounded-full hover:bg-gray-600'>
                            <Link to="/skills" className="block px-3 py-2 text-white rounded " >Skills</Link>
                        </li>
                        <li className='rounded-full hover:bg-gray-600'>
                            <Link to="/projects" className="block px-3 py-2 text-white rounded " >Projects</Link>
                        </li>
                        {/* <li className='rounded-full hover:bg-gray-600'>
                            <Link to="/learning" className="block px-3 py-2 text-white rounded" >Learning</Link>
                        </li> */}
                        <li className='rounded-full hover:bg-gray-600'>
                            <Link to="/contact" className="block px-3 py-2 text-white rounded" >Contact</Link>
                        </li>
                        <li>
                            <div className={`${isMenuOpen ? "flex gap-2 md:hidden" : "flex gap-2 md:hidden"} px-3 py-2 text-white  rounded md:bg-transparent  md:p-0 z-50`}>
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
