import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const sidebarOptions = [
  { label: "Exercise", href: "/exercise" },
  { label: "Mental Health", href: "/mental-health" },
  { label: "Support", href: "/support" },
  { label: "SOS", href: "/sos" },
];

export default function Sidebar() {
  const [elementFocused, setElementFocused] = useState(null);
  const location = useLocation(); // For highlighting active page

  const handleHoverButton = (index) => {
    setElementFocused(index);
  };

  return (
    <div className="w-64 h-height bg-primary dark:bg-gray-900 p-4 shadow-lg">
      <nav
        className="flex flex-col space-y-4"
        onMouseLeave={() => handleHoverButton(null)}
      >
        {sidebarOptions.map((option, index) => (
          <Link
            to={option.href}
            key={option.label}
            onMouseEnter={() => handleHoverButton(index)}
            className={`relative inline-flex w-full px-4 py-3 font-semibold text-gray-600 dark:text-gray-300 rounded-md transition-all duration-300 ease-in-out hover:text-gray-900 hover:dark:text-gray-100 ${
              location.pathname === option.href
                ? "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                : ""
            }`}
          >
            {option.label}
            <AnimatePresence>
              {elementFocused === index && (
                <motion.div
                  className="-z-10 absolute top-0 right-0 bottom-0 left-0 rounded-lg bg-gray-300 dark:bg-gray-800"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  layout={true}
                  layoutId="focused-element"
                  transition={{ duration: 0.3 }}
                />
              )}
            </AnimatePresence>
          </Link>
        ))}
      </nav>
    </div>
  );
}
