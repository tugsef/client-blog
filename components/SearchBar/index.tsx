"use client";
import { Blog } from "@/.contentlayer/generated";
import { useState } from "react";
import LeftListItem from "../Blog/BlogLayoutLeft/LeftListItem";
import PointerLogo from "../Icons";

const SearchBar: React.FC<{ blogs: Blog[]; closeSearch: () => void }> = ({
  blogs,
  closeSearch,
}) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Blog[]>([]);
  const [isOpen, setIsOpen] = useState(true);

  const lists: Blog[] = [];
  const handleSearch = async () => {
    await setIsOpen(true);

    let lists = blogs.filter((obje) =>
      Object.values(obje).some(
        (value) =>
          typeof value === "string" &&
          value.toLowerCase().includes(query.toLowerCase())
      )
    );

    await setResults(lists);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    handleSearch(); // Call handleSearch on every input change
  };

  return (
    <div>
      {isOpen && (
        <div className="fixed top-0 left-0 z-[200] flex h-[100vh] w-[100vw] cursor-auto flex-col backdrop-blur-sm backdrop-filter box-border border-0 border-solid py-20 px-2 lg:p-20">
          <div
            className="top-0 left-0 absolute w-full h-full bg-transparent"
            onClick={closeSearch}
          ></div>
          <div className="w-full max-w-2xl flex flex-col min-h-0 rounded-md cursor-auto mx-auto my-0 bg-light dark:bg-dark">
            <header className="z-[1] p-1 relative flex flex-none items-center border-b-1 ">
              <form className="w-full">
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>

                  <input
                    type="text"
                    placeholder="Search..."
                    value={query}
                    onChange={handleChange}
                    id="default-search"
                    className="block w-full p-4 ps-10 text-sm dark:bg-slate-800 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:text-light "
                  />
                  <button
                    onClick={closeSearch}
                    type="submit"
                    className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Esc
                  </button>
                </div>
              </form>
            </header>
            <div className="flex-auto overflow-auto">
              <div className="pb-6">
                <section>
                  <ul className="block me-0 ms-0 px-5 lg:px-10 border-b-2">
                    {results.length > 0 && isOpen && query != "" && (
                      <ul>
                        {results.map((blog, index) => (
                          <li
                            key={index}
                            className="relative"
                            onClick={closeSearch}
                          >
                            <LeftListItem blog={blog} />
                          </li>
                        ))}
                      </ul>
                    )}
                  </ul>
                </section>
              </div>
            </div>
            <footer className="flex  border-t-2  py-4 px-6 ">
              <div className="flex flex-row-reverse gap-1 w-full items-center text-xs">
                <span className="flex items-center justify-center font-bold text-xs  tracking-tight">
                  FocusSpark
                </span>
                Select by
              </div>
            </footer>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
