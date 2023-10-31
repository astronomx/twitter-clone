import Timeline from "@/components/Timeline";
import Image from "next/image";

export default function MainComponent() {
    return(
      <main className="flex flex-col w-[30vw] h-full min-h-screen mx-3 border-l-[0.5px] border-r-[0.5px] border-slate-600">
        <h1 className="font-bold text-xl p-6 border-b-[0.5px] border-slate-600 backdrop-blur bg-black/10 sticky top-0 z-1">Home</h1>
        <div className="flex items-stretch p-4 space-x-2 border-b-[0.5px] border-slate-600 relative">
          <div className="h-[40px] w-[40px] rounded-full flex-none">
            <Image src="/images/profile/main-profle.png" alt="pfp" width={40} height={40} className="rounded-full" />
          </div>

          <div className="flex flex-col w-full z-0">
            <input type="text" className="w-full h-full p-4 bg-transparent border-b-[0.5px] border-gray-600 outline-none border-none placeholder:text-xl placeholder:text-gray-500" placeholder="What's happening?!" />
            <div className="flex flex-row w-full justify-between items-center">
              <div></div>
              <div>
                <button className="bg-[#1D9BF0] rounded-full px-5 py-2 w-fit ml-4 text-white font-bold text-md">Post</button>
              </div>
            </div>
          </div>

        </div>
        <div className="">
          <Timeline />
        </div>
      </main>
    )
}