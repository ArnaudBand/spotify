"use client";

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { FaPlay } from 'react-icons/fa';

interface ListItemProps {
  image: string;
  name: string;
  href: string;
}


const ListeItem: React.FC<ListItemProps> = ({
  image,
  name,
  href
}) => {
  const router = useRouter();
  const handleClick = () => {
    // Add authentication before redirecting
    router.push(href);
  }
  return (
    <button
    onClick={handleClick}
      className="relative group flex items-center rounded-md overflow-hidden gap-x-4 bg-neutral-100/10 hover:bg-neutral-100/20 transition pr-4">
      <div className="relative min-h-[64px] min-w-[64px]">
        <Image src={image} alt='Image' className='object-cover' layout='fill' />
      </div>
      <div>
        <h2 className="text-white text-lg font-semibold">
          {name}
        </h2>
        <div className="absolute transition opacity-0 rounded-full flex items-center justify-center bg-green-500 p-4 drop-shadow-md top-2 right-5 group-hover:opacity-100 hover:scale-100">
          <FaPlay className="text-black" />
        </div>
      </div>
    </button>
  )
}

export default ListeItem;