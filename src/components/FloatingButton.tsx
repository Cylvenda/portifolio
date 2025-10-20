import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FloatingButton = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      className="fixed bottom-8 right-8 z-40"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.3 }}
    >
      <Button
        size="lg"
        onClick={scrollToContact}
        className="rounded-full w-16 h-16 shadow-lg animate-glow bg-primary hover:bg-primary/90"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    </motion.div>
  );
};
