import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Link from "next/link";
export default async function Profile() {
  const session = await getServerSession(authOptions);
  const user =await session?.user;

  return (
    <>
      <section className="bg-ct-blue-600  min-h-screen pt-20">
        <div className="max-w-4xl mx-auto bg-ct-dark-100 rounded-md h-[20rem] flex justify-center items-center">
          <div>
            <p className="mb-3 text-5xl text-center font-semibold">
              Profile Page
            </p>
            {!user? (
              <p>Çıkış Yapıldı <a href={"/"} className="text-accent/80 hover:text-accent"> home</a></p>
            ) : (
              <div className="flex items-center gap-8">
                <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
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
                </div>

                <div className="mt-8">
                  <p className="mb-3">Name: {user.name}</p>
                  <p className="mb-3">Email: {user.email}</p>
                </div>
        
                <Link
          href={"/api/auth/signout"}
          className="flex gap-4 ml-auto text-red-600"
        >
          Sign Out
        </Link>
              </div>
              
            )}
          
          </div>
        </div>
      </section>
    </>
  );
}
