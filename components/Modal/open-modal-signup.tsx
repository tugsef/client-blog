import { motion } from "framer-motion";

export default function OpenModalSignUp() {
  return (
    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
      <a className="lg:py-2 py-1 lg:px-5 px-2 rounded-full border-black border-2 dark:border-white lg:text-base dark:text-white text-sm">
        SingUp
      </a>
    </motion.div>
  );
}
