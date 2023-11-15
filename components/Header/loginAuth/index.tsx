import OpenCartSignIn from "@/components/Modal/open-modal-signin";
import OpenModalSignUp from "@/components/Modal/open-modal-signup";
import SignInModal from "@/components/Modal/signInModal";
import SignUpModal from "@/components/Modal/signUpModal";
import { cx } from "@/components/utils";
import { Suspense } from "react";
import { SiWritedotas } from "react-icons/si";

export default function LoginAuth() {
  return (
    <div className="flex lg:gap-4 gap-2 items-center">
      <a className="dark:text-white">
        <SiWritedotas
          className={cx("h-6 transition-all ease-in-out hover:scale-110 ")}
        />
      </a>
      <Suspense fallback={<OpenModalSignUp />}>
        <SignUpModal />
      </Suspense>
      <Suspense fallback={<OpenCartSignIn />}>
        <SignInModal />
      </Suspense>
    </div>
  );
}
