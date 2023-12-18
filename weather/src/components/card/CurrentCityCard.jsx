import React from "react";
import { motion } from 'framer-motion';

export default function CurrentCityCard({ children }) {
    return (

        <motion.div
            initial={{ opacity: 0, x: -800 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
                type: "spring",
                damping: 10,
                stiffness: 100,
                delay: 1,
                duration: 1
            }}
        >
            {children}

        </motion.div>

    )
}
