"use client";

import { useState, useCallback, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function useToast() {
    const [message, setMessage] = useState<string | null>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const showToast = useCallback((msg: string, duration: number = 1500) => {
        setMessage(msg);

        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
            setMessage(null);
        }, duration);
    }, []);

    const ToastComponent = (
        <AnimatePresence>
            {message && (
                <motion.div
                    initial={{ opacity: 0, y: 50, x: "-50%" }}
                    animate={{ opacity: 1, y: 0, x: "-50%" }}
                    exit={{ opacity: 0, y: 20, x: "-50%" }}
                    className="fixed bottom-12 left-1/2 z-50 flex items-center rounded-xl bg-neutral-800 px-6 py-3 text-sm font-medium text-white shadow-lg"
                >
                    {message}
                </motion.div>
            )}
        </AnimatePresence>
    );

    return { showToast, ToastComponent };
}