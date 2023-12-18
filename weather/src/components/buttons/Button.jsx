import React from "react";
import { motion } from 'framer-motion';

import {useToggleStore} from "../../store/useToggleStore";

export default function Button() {
    const { isToggled, toggle } = useToggleStore();

    return (
        <motion.button
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
                type: "spring",
                damping: 10,
                stiffness: 100,
                delay: 1.5
            }}
            onClick={toggle} className="block mx-auto my-2 p-1.5 rounded-md bg-gray-200">
            {isToggled ? "close" : "Show Next 7 days"}
        </motion.button>
    )
}
