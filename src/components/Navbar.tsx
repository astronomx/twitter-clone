'use client'
import React, { useState } from "react";
import Image from "next/image";

import {
  HomeIcon as HomeIconOutline,
  MagnifyingGlassIcon as MagnifyingGlassIconOutline,
  BellIcon as BellIconOutline,
  EnvelopeIcon as EnvelopeIconOutline,
  QueueListIcon as QueueListIconOutline,
  BookmarkIcon as BookmarkIconOutline,
  UsersIcon as UsersIconOutline,
  UserIcon as UserIconOutline,
  EllipsisHorizontalCircleIcon as EllipsisHorizontalCircleIconOutline,
} from "@heroicons/react/24/outline";

import {
  HomeIcon as HomeIconSolid,
  MagnifyingGlassIcon as MagnifyingGlassIconSolid,
  BellIcon as BellIconSolid,
  EnvelopeIcon as EnvelopeIconSolid,
  QueueListIcon as QueueListIconSolid,
  BookmarkIcon as BookmarkIconSolid,
  UsersIcon as UsersIconSolid,
  UserIcon as UserIconSolid,
  EllipsisHorizontalCircleIcon as EllipsisHorizontalCircleIconSolid,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/solid";

import XLogoBigger from "public/images/x-logo-bigger.png";

const navigationItems = [
  { icon: HomeIconOutline, activeIcon: HomeIconSolid, label: "Home" },
  { icon: MagnifyingGlassIconOutline, activeIcon: MagnifyingGlassIconSolid, label: "Explore" },
  { icon: BellIconOutline, activeIcon: BellIconSolid, label: "Notifications" },
  { icon: EnvelopeIconOutline, activeIcon: EnvelopeIconSolid, label: "Messages" },
  { icon: QueueListIconOutline, activeIcon: QueueListIconSolid, label: "Lists" },
  { icon: BookmarkIconOutline, activeIcon: BookmarkIconSolid, label: "Bookmarks" },
  { icon: UsersIconOutline, activeIcon: UsersIconSolid, label: "Communities" },
  { icon: UserIconOutline, activeIcon: UserIconSolid, label: "Profile" },
  { icon: EllipsisHorizontalCircleIconOutline, activeIcon: EllipsisHorizontalCircleIconSolid, label: "More" },
];

export default function Navbar() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNavItemClick = (index: any) => {
    setActiveIndex(index);
  };

  return (
    <>
      <div className="flex flex-col justify-center space-y-2 text-xl ml-[-90px] top-3 sticky">
        <Image src={XLogoBigger} className="ml-4" alt="X-logo" />

        {navigationItems.map((item, index) => (
          <div
            key={index}
            className={`flex flex-row items-center justify-center space-x-4 w-fit h-fit px-5 cursor-pointer py-3 hover:bg-[#1f1c1f] rounded-full active:rounded-full transition duration-300 ease-in-out ${
              activeIndex === index ? "font-bold" : ""
            } `}
            onClick={() => handleNavItemClick(index)}
          >
            {activeIndex === index ? (
              <item.activeIcon className="h-7 w-7 text-white" />
            ) : (
              <item.icon className="h-7 w-7 text-white" />
            )}
            <p>{item.label}</p>
          </div>
        ))}
        
        <div className="space-y-56">
          <button className="bg-[#1D9BF0] rounded-full px-5 py-3 ml-4 text-white font-bold text-[17px] w-56">
            Post
          </button>

          <div className="flex flex-row items-center space-x-2 p-2 w-[260px] hover:bg-[#1f1c1f] rounded-full transition duration-300 ease-in-out">
            <div className="h-10 w-10">
              <Image src="/images/profile/main-profle.png" alt="pfp" width={40} height={40} className="rounded-full" />
            </div>

            <div className="flex flex-col">
              <p className="font-bold text-sm">unkownuser</p>
              <p className="text-gray-500 text-sm">@4unk0wn4</p>
            </div>

            <div className="">
              <EllipsisHorizontalIcon className="h-6 w-6 ml-20" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
