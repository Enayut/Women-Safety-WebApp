import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const dataButtons = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Terms & Conditions", href: "#" },
    { label: "Cuicui.day", href: "#" },
];

export default function Navbar() {
    const [elementFocused, setElementFocused] = useState(null);

    const handleHoverButton = (index) => {
        setElementFocused(index);
    };

    return (
        <nav
            className="flex flex-col sm:flex-row justify-center items-center bg-gray-100 dark:bg-gray-900 p-4 shadow-lg"
            onMouseLeave={() => handleHoverButton(null)}
        >
            {dataButtons.map((button, index) => (
                <button
                    className="relative inline-flex w-fit mx-2 my-2 sm:my-0 px-4 py-2 font-semibold text-gray-600 dark:text-gray-300 text-lg rounded-md transition-all duration-300 ease-in-out hover:text-gray-900 hover:dark:text-gray-100"
                    key={button.label}
                    onMouseEnter={() => handleHoverButton(index)}
                    type="button"
                >
                    {button.label}
                    <AnimatePresence>
                        {elementFocused === index && (
                            <motion.div
                                className="-z-10 absolute top-0 right-0 bottom-0 left-0 rounded-lg bg-gray-200 dark:bg-gray-700"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                layout={true}
                                layoutId="focused-element"
                                transition={{ duration: 0.3 }}
                            />
                        )}
                    </AnimatePresence>
                </button>
            ))}
        </nav>
    );
}
