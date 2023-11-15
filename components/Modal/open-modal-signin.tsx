import { motion } from "framer-motion";

export default function OpenModalSignIn() {
  return (
    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
      <a className="dark:border-white dark:text-white lg:text-base text-sm  ">
        SignIn
      </a>
    </motion.div>
  );
}
