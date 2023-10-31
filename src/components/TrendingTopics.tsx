import data from "../../data/data.json";

import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";

export default function TrendingTopics() {
  return (
    <>
      {data.trending.map((topic: any) => (
        <div key={topic.id} className="px-4">
            <div className="flex flex-row text-gray-500">
                <div className="flex flex-row items-center text-xs space-x-1">
                    <p>{topic.rank}</p>
                    <div className="rounded-full w-1 h-1 bg-gray-500" />
                    <p>{topic.category}</p>
                    <div className="rounded-full w-1 h-1 bg-gray-500" />
                    <p>Trending</p>
                </div>

                <div className="ml-auto">
                    <EllipsisHorizontalIcon className="h-5 w-5 rounded-full hover:text-blue-400 hover:bg-blue-500/10 " />
                </div>
            </div>

            <div className="text-white">
              <p className="text-sm font-bold">{topic.topic}</p>
              <p className="text-gray-500 text-xs">{topic.posts}</p>
            </div>
        </div>
      ))}
    </>
  );
}
