"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { HiHome } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import Box from "./Box";
import SidebarItem from "./SidebarItem";
import React from "react";
import Library from "./Library";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar = ({ children }: SidebarProps) => {
  const pathname = usePathname()

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
    <div className="flex h-full">
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
         <Library />
        </Box>
      </div>
      <main className="flex-1 overflow-y-auto p-2 h-full">
        {children}
      </main>
    </div>
  )
};

export default Sidebar;