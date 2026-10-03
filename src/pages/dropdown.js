import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Contact.css';

const options = [
  'Architecture',
  'Printing Press',
  'Information Technology',
  'All Services',
];

const CustomSelect = ({ selected, setSelected }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="form-group custom-select" ref={containerRef}>
      <div
        className="select select-box"
        onClick={() => setIsOpen(!isOpen)}
        tabIndex={0}
        role="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        {selected || 'Select your Service Interest'}
        <span className="arrow">{isOpen ? '▲' : '▼'}</span>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className="select-options"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            role="listbox"
          >
            {options.map((option) => (
              <motion.li
                key={option}
                className="select-option"
                onClick={() => {
                  setSelected(option);
                  setIsOpen(false);
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                role="option"
                aria-selected={selected === option}
              >
                {option}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      {/* Hidden input for form submission */}
      <input type="hidden" name="service_requested" value={selected} required />
    </div>
  );
};

export default CustomSelect;
