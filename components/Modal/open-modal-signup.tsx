import cx from "../utils";

export default function OpenModalSignUp({className}:{className?:string}) {
  return (
    <div className="relative z-0 hover:scale-105 transition-all ease duration-200 group">
      <a className={cx("py-2 ring-accent  rounded-full px-3 dark:bg-accent/95 dark:hover:bg-accent bg-accentDark/95 hover:group-hover:bg-accentDark text-light text-sm tracking-widest text-center",className)} >
        Sing Up
      </a>
    </div>
  );
}
