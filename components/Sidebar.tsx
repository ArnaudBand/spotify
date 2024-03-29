"use client";

import React from "react";
import { usePathname } from "next/navigation";
import {twMerge} from "tailwind-merge";
import { useMemo } from "react";
import { HiHome } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";

import Box from "./Box";
import SidebarItem from "./SidebarItem";
import Library from "./Library";

import {Song} from "@/types";
import usePlayer from "@/hooks/usePLayer";

interface SidebarProps {
  children: React.ReactNode;
  songs: Song[];
}

const Sidebar = ({ children, songs }: SidebarProps) => {
  const pathname = usePathname();
  const player = usePlayer();

  const routes = useMemo(() => [
    {
      icon: HiHome,
      name: 'Home',
      href: '/',
      active: pathname !== '/search',
    },
    {
      icon: IoSearch,
      name: 'Search',
      href: '/search',
      active: pathname === '/search',
    }
  ], [pathname])

  return (
    <div className={twMerge(`flex h-full`, player.activeId && "h-[calc-(100% - 80px)]")}>
      <div className="hidden md:flex flex-col gap-y-2 bg-black h-full p-2 w-[300px]">
        <Box>
          <div className="flex flex-col gap-y-4 px-5 py-4 rounded drop-shadow bg-zinc-800">
            {routes.map((route) => (
              <SidebarItem
                key={route.name}
                {...route}
              />
            ))}
          </div>
        </Box>
        <Box className="overflow-y-auto h-full">
         <Library songs={songs} />
        </Box>
      </div>
      <main className="flex-1 overflow-y-auto p-2 h-full">
        {children}
      </main>
    </div>
  )
};

export default Sidebar;