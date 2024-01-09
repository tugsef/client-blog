import { motion } from "framer-motion";
import cx from "../utils";

export default function OpenModalSignIn({className}:{className?:string}) {
  return (
    <motion.div  whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} className="relative z-0">
      <a  className={cx("text-accent",className)}>
        SignIn
      </a>
    </motion.div>
  );
}
