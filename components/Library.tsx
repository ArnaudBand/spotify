import React from 'react'
import { TbPlaylist } from 'react-icons/tb'
import { AiOutlinePlus } from 'react-icons/ai'

const Library = () => {
  const onclick = () => {
    // TODO: Add playlist
  }
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="inline-flex items-center gap-x-2">
          <TbPlaylist className="w-6 h-6 text-neutral-400" />
          <span className='text-neutral-400 font-medium text-md'>Your Library</span>
        </div>
        <AiOutlinePlus className="w-6 h-6 text-neutral-400 hover:text-white cursor-pointer transition"
        onClick={onclick} 
        />
      </div>
      <div className="flex flex-col gap-y-2 mt-4 px-3">
        List of Songs!
      </div>
    </div>
  )
}

export default Library;