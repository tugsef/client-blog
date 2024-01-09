import { motion } from "framer-motion";
import cx from "../utils";

export default function OpenModalSignUp({className}:{className?:string}) {
  return (
    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} className="relative z-0">
      <a className={cx("hover:scale-105 transition-all ease duration-200 lg:py-2 py-1 lg:px-5 px-2 rounded-full border-black border-2 dark:border-white lg:text-base dark:text-white text-sm",className)} >
        SingUp
      </a>
    </motion.div>
  );
}
