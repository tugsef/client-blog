"use client";
import OpenCartSignIn from "@/components/Modal/open-modal-signin";
import OpenModalSignUp from "@/components/Modal/open-modal-signup";
import SignInModal from "@/components/Modal/signInModal";
import SignUpModal from "@/components/Modal/signUpModal";

import { Suspense } from "react";

export default function LoginAuth() {
  return (
    <div className="flex lg:gap-4 gap-2 items-center">
      <Suspense fallback={<OpenModalSignUp />}>
        <SignUpModal />
      </Suspense>
      <Suspense fallback={<OpenCartSignIn />}>
        <SignInModal />
      </Suspense>
    </div>
  );
}
