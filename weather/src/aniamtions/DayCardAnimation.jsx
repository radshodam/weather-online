import { motion } from 'framer-motion';

const getRandomColor = () => {
    const colors = ['glass-blue', 'glass-red', 'glass-green', 'glass-purple', 'glass-gold', 'glass-pink', 'glass-teal']; // رنگ‌های شیشه‌ای خود را اضافه کنید
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
};

export default function DayCardAnimation({ children, index }) {
    const bgColorClass = getRandomColor();

    return (
        <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
                type: 'spring',
                delay: index / 4,
            }}
            exit={{ opacity: 0 }}
            key={index}
            className={`backdrop-filter backdrop-blur-sm shadow-xl w-80 h-52 min-w-[280px] lg:min-w-fit rounded-lg transition-all ${bgColorClass}`}
        >
            {children}
        </motion.div>
    );
}
