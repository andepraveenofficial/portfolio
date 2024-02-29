/* -----> Third Party Packages <----- */
import { motion } from "framer-motion";

/* -----> Styles <----- */
const logoFont = {
    "fontFamily": "Dancing Script, cursive",
    "fontWeight": "700",
    "fontStyle": "normal"
}

/* -----> Component <----- */
const Logo = () => {
    return (
        <motion.div
            initial={{ scale: 0.5 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0,
                duration: 2,
                ease: "easeInOut",  // Use a smoother "easeInOut" easing for the animation
            }}
            style={logoFont}
        >
            <h1 className="self-center text-2xl font-semibold text-white whitespace-nowrap">Ande Praveen</h1>
        </motion.div>
    );
}

/* -----> Export <----- */
export default Logo