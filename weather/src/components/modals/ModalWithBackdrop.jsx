import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ModalWithBackdrop = ({ isOpen, onClose, children, size }) => {
  const determineSize = () => {
    switch (size) {
      case 'lg':
        return 'max-w-3xl';
      case 'md':
        return 'max-w-md';
      case 'sm':
      default:
        return 'max-w-sm';
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className={`fixed transform overflow-y-auto overflow-hidden  py-9 rounded-lg z-30 bg-white px-2 mx-2 min-h-[96px]  sm:min-h-[125px] h-auto text-left shadow-xl transition-all sm:w-full sm:m-6 ${determineSize()}`}
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "keyframes", duration: 0.8, delay: 0.5 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <button
              onClick={onClose}
              className="absolute top-1 py right-4 text-xs text-gray-500 hover:text-red-300 focus:outline-none focus:text-gray-700"
            >
              Close
            </button>

            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalWithBackdrop;
