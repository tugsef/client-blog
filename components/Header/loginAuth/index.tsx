import OpenCartSignIn from "@/components/Modal/open-modal-signin";
import OpenModalSignUp from "@/components/Modal/open-modal-signup";
import SignUpModal from "@/components/Modal/signUpModal";
import { useSession } from "next-auth/react";
import Link from "next/link";

import { Suspense } from "react";

export default function LoginAuth() {
  const { data: session } = useSession();
  const user = session?.user;
  return (
    <div className="flex lg:gap-4 gap-2 items-center">
     {!user?<><Suspense fallback={<OpenModalSignUp />}>
        <SignUpModal />
      </Suspense>
      <OpenCartSignIn className="dark:border-white dark:text-white lg:text-base text-sm"/></>:<Link href={"/profile"} className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
      <svg
        className="absolute w-12 h-12 text-gray-400 -left-1"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
          clipRule="evenodd"
        />
      </svg>
    </Link>}  
    </div>
  );
}
