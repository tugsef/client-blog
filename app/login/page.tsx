import { LoginForm } from "./form";

export default function LoginPage() {
  return (
    <>
      <section className="bg-ct-blue-600 min-h-screen pt-18">
        <div className="container mx-auto  py-6 h-full flex justify-center items-center">
          <div className="lg:w-5/12 px-4 py-6 rounded-lg dark:bg-[#0d1117]/60 bg-accent/10">
            <LoginForm />
          </div>
        </div>
      </section>
    </>
  );
}