import { motion } from "framer-motion";

const logoFont = {
    "font-family": "Dancing Script, cursive",
    "font-optical-sizing": "auto",
    "font-weight": "700",
    "font-style": "normal"

}

export default function App() {
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
            <h1 className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Ande Praveen</h1>
        </motion.div>
    );
}
