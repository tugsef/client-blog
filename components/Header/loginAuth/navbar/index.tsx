import OpenModalSignUp from "@/components/Modal/open-modal-signup";
import SignUpModal from "@/components/Modal/signUpModal";
import React, { Suspense } from "react";

export default function NavbarUp() {
  return (
    <>
      <Suspense fallback={<OpenModalSignUp />}>
        <SignUpModal />
      </Suspense>
    </>
  );
}
