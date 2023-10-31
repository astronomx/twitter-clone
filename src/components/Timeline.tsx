import Image from 'next/image'

import data from '../../data/data.json'

import { ChatBubbleOvalLeftIcon } from "@heroicons/react/24/outline";
import { ArrowsRightLeftIcon } from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/outline";
import { ChartBarIcon } from "@heroicons/react/24/solid";
import { ArrowUpTrayIcon } from "@heroicons/react/24/outline";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";


export default function Timeline() {
  return(
    <>
      {data.tweets.map((tweet: any) => (
            <div key={tweet.id}>
                <div className="flex flex-row p-4 border-b-[0.5px] border-gray-600 space-x-3">
                  <div className="w-[40px] h-[40px]">
                    <Image src={ tweet.profilepic } alt="pf" className="rounded-full" width={40} height={40} />
                  </div>
    
                  <div className="w-full">
                    <div className="flex justify-between items-center w-full">
                      <div className="flex flex-row space-x-1 text-sm items-center ">
                        <div className="font-bold">{tweet.name}</div>
                        <div className="text-gray-500">{tweet.display_name}</div>
                        <div className="h-1 w-1 bg-gray-500 rounded-full" />
                        <div className="text-gray-500">{tweet.time}</div>
                      </div>
                      <div className="hover:bg-blue-400/10 rounded-full">
                        <EllipsisHorizontalIcon className="h-6 w-6 text-gray-500 hover:text-blue-400" />
                      </div>
                    </div>

                    <div className="flex flex-col space-y-1">
                      <p className="text-[14px]">{tweet.tweet}</p>
                      {tweet.picture && (
                        <img src={tweet.picture} alt="Cannot load image" className="aspect-square w-full h-80 rounded-xl" />
                      )}
                    </div>

                    <div className="flex flex-row justify-between mt-2">
                      <div className="flex flex-row text-[13px] text-gray-500 items-center hover:text-blue-400 cursor-pointer">
                        <ChatBubbleOvalLeftIcon className="h-5 w-5 mr-3" />
                        {tweet.comments}
                      </div>

                      <div className="flex flex-row text-[13px] text-gray-500 items-center hover:text-green-400 cursor-pointer">
                        <div>
                          <ArrowsRightLeftIcon className="h-5 w-5 mr-3" />
                        </div>
                        {tweet.retweets}
                      </div>

                      <div className="flex flex-row text-[13px] text-gray-500 items-center hover:text-pink-600 cursor-pointer">
                        <HeartIcon className="h-5 w-5 mr-3" />
                        {tweet.likes}
                      </div>

                      <div className="flex flex-row text-[13px] text-gray-500 items-center hover:text-blue-400 cursor-pointer">
                        <ChartBarIcon className="h-5 w-5 mr-3" />
                        {tweet.views}
                      </div>

                      <div className="text-gray-500 hover:text-blue-400 cursor-pointer">
                        <ArrowUpTrayIcon className="h-5 w-5" />
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          ))}
    </>
  )
}