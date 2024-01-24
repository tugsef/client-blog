"use client";
import BlogLogo from "@/components/Header/logo";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
function Information() {
  let [isOpen, setIsOpen] = useState(false);

  const isModal = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const activeModel = () => {
      isModal();
    };
    const timeoutId = setTimeout(activeModel, 6000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-[1000]" onClose={isModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25 backdrop-blur-lg" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex max-h-[500px] mt-20 justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-dark p-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex justify-end">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent  px-2 py-1 text-sm font-medium  bg-accent hover:bg-accent/80 text-light dark:hover:bg-accentDark  focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:bg-accentDark/80"
                      onClick={isModal}
                    >
                      x
                    </button>
                  </div>
                  <Dialog.Title
                    as="image"
                    className="text-lg font-medium leading-6 text-gray-900 flex justify-center"
                  >
                    <BlogLogo />
                  </Dialog.Title>
                  <div className="mt-4">
                    <h3 className="text-xl font-bold">Hakkımızda</h3>
                    <p className="text-sm text-gray-500 mt-2">
                      <b>Focus Spark</b> web sitesi{" "}
                      <a
                        href="https://www.linkedin.com/in/sefa-demirtas/"
                        className="border-b "
                      >
                        Sefa Demirtaş
                      </a>{" "}
                      tarafından yazılım ve programlama hakkında edindiği ve
                      öğrendiği bilgileri paylaşmak için kurulmuştur. Ticari bir
                      amaç güdülmemiştir.
                    </p>
                  </div>
                  <div className="mt-2">
                    <h3 className="text-xl font-bold mt-4">İletişim</h3>
                    <p className="text-sm text-gray-500 mt-2">
                      Site deneyiminiz, öneri ve görüşleriniz için
                      <br />
                    </p>
                    <div className="flex justify-end items-end flex-col">

                    <a
                      href="mailto:sefa.demirtas91@gmail.com"
                      className="text-lg font-bold capitalize text-dark underline 
                  dark:text-light md:text-base mt-4 block"
                    >
                      Sefa Demirtaş
                    </a>
                    <a
                      href="mailto:focussparktr@gmail.com"
                      className="text-lg  font-bold capitalize text-dark underline 
                  dark:text-light md:text-base mt-1 block"
                    >
                      Focus Spark
                    </a>
                    </div>
              
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default Information;
