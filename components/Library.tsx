"use client";

import React from "react";
import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";
import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import useUploadModal from "@/hooks/useUploadModal";
import {Song} from "@/types";
import MediaItem from './MediaItem';
import {useOnPlay} from "@/hooks/useOnPlay";

interface LibraryProps {
  songs: Song[]
}
const Library: React.FC<LibraryProps> = ({ songs }) => {
  const authModal = useAuthModal();
  const uploadModal = useUploadModal();
  const { user } = useUser();
  const onPlay = useOnPlay(songs);

  const onClick = () => {
    if (!user) {
      return authModal.onOpen();
    }
    // TODO:Check for subscription
    return uploadModal.onOpen();
  };

  return (
    <div className="flex flex-col rounded drop-shadow bg-zinc-800">
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="inline-flex items-center gap-x-2">
          <TbPlaylist className="w-6 h-6 text-neutral-400" />
          <span className="text-neutral-400 font-medium text-md">
            Your Library
          </span>
        </div>
        <AiOutlinePlus
          className="w-6 h-6 text-neutral-400 hover:text-white cursor-pointer transition"
          onClick={onClick}
        />
      </div>
      <div className="flex flex-col gap-y-2 mt-4 px-3">
        {songs.map((item) => (
          <MediaItem
            onClick={(id: string) => onPlay(id)}
            key={item.id}
            data={item}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
