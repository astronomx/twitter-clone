import Navbar from "@/components/Navbar";
import MainComponent from "@/components/MainComponent";
import TrendingTopics from "@/components/TrendingTopics";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="flex w-full h-full justify-center items-center">
      <div className="flex flex-row max-w-screen-lg w-full">
        <section className="flex-1 w-[30%]">
          <Navbar />
        </section>

        <div className="flex-1 flex justify-center">
          <MainComponent />
        </div>

        <div className="flex flex-col ml-5 items-center">
          <section className="flex flex-col items-center w-[50%] space-y-4 h-screen top-0 sticky">
            <div className="w-full flex justify-center text-gray-500">
              <div className="relative bg-black p-3">
                <input
                  type="text"
                  id="searchBox"
                  placeholder="Search"
                  className="w-[350px] h-full rounded-full py-3 bg-[#202327] outline-none pl-12 placeholder:text-gray-500 focus:outline-1 focus:outline-blue-400 focus:bg-black peer"
                />
                <label htmlFor="searchBox" className="flex items-center justify-center ml-8 h-full top-0 left-0 absolute peer-focus:text-blue-400">
                  <MagnifyingGlassIcon className="h-5 w-5" />
                </label>
              </div>
            </div>
          </section>

          <section className="flex flex-col w-full bg-[#16181C] rounded-3xl mt-[-90vh]">
            <h3 className="font-bold text-xl m-2 p-2">Trending</h3>
            <div className="space-y-4 p-3">
              <TrendingTopics />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

