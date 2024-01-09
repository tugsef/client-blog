import { motion } from "framer-motion";
import cx from "../utils";

export default function OpenModalSignUp({className}:{className?:string}) {
  return (
    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} className="relative z-0">
      <a className={cx("py-2 ring-accent  rounded-full px-3 dark:bg-accent/95 dark:hover:bg-accent bg-accentDark/95 hover:bg-accentDark text-light text-sm tracking-widest",className)} >
        Sing Up
      </a>
    </motion.div>
  );
}
