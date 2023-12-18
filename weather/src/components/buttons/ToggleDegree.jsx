import { useState } from 'react';
import { motion } from 'framer-motion';
import { classNames } from '../../functions/classNames';
import { useToggleDegreeStore } from '../../store/useToggleStore';


export default function ToggleDegree() {

    const { toggleDegree,isToggledDegree } = useToggleDegreeStore()

    return (
        <motion.div
            className={classNames(
                isToggledDegree ? 'bg-indigo-600' : 'bg-gray-200',
                'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2'
            )}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onTap={toggleDegree}
        >
            <span className="sr-only">Use setting</span>
            <motion.span
                className={classNames(
                    isToggledDegree ? 'translate-x-5' : 'translate-x-0',
                    'pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                )}
                animate={{ translateX: isToggledDegree ? 20 : 0 }}
            >
                <span
                    className={classNames(
                        isToggledDegree ? 'opacity-0 duration-100 ease-out' : 'opacity-100 duration-200 ease-in',
                        'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
                    )}
                    aria-hidden="true"
                >
                    °C
                </span>
                <span
                    className={classNames(
                        isToggledDegree ? 'opacity-100 duration-200 ease-in' : 'opacity-0 duration-100 ease-out',
                        'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
                    )}
                    aria-hidden="true"
                >
                    °F
                </span>
            </motion.span>
        </motion.div>
    );
}