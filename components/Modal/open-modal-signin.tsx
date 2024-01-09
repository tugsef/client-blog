import { motion } from "framer-motion";
import cx from "../utils";

export default function OpenModalSignIn({className}:{className?:string}) {
  return (
    <motion.div  whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} className="relative z-0">
      <a  className={cx("text-accent/90 hover:text-accent dark:text-accentDark/90 hover:dark:text-accentDark tracking-wide",className)}>
        Sign In
      </a>
    </motion.div>
  );
}
