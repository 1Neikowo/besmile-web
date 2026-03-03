"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export const WhatsAppButton = ({ phoneNumber, message }: { phoneNumber: string, message?: string }) => {
    const whatsappUrl = `https://wa.me/${phoneNumber}${message ? `?text=${encodeURIComponent(message)}` : ""}`;

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-[9999] flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-colors"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
            }}
            aria-label="Contactar por WhatsApp"
        >
            <MessageCircle className="w-8 h-8" />
        </motion.a>
    );
};
