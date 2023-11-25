import React from 'react';
import Link from 'next/link';
import { IconType } from 'react-icons';
import { twMerge } from 'tailwind-merge';

interface SidebarItemProps {
  icon: IconType;
  name: string;
  href: string;
  active?: boolean;
};

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon: Icon,
  name,
  href,
  active,
}) => {
  return (
    <Link href={href} className={
      twMerge(`
      flex flex-row h-auto items-center w-full gap-x-4 text-md font-medium cursor-pointer hover:text-white transition text-neutral-400 py-1`,
      active && 'text-white')}
    >
      <Icon size={20} />
      <span className='truncate w-full'>{name}</span>
    </Link>
  )
};

export default SidebarItem;