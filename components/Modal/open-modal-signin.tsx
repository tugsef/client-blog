import { motion } from "framer-motion";
import cx from "../utils";
import Link from "next/link";

export default function OpenModalSignIn({className,close}:{className?:string,close?:()=>void}) {
  return (
    <Link href={"/login"} onClick={close} className="relative z-0 hover:scale-105 transition-all ease duration-200 group">
      <span className={cx("text-accent/90 hover:text-accent dark:text-accentDark/90 hover:group-hover:dark:text-accentDark tracking-wide",className)}>
        Sign In
      </span>
    </Link>
  );
}
