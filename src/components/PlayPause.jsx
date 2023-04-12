import { BsPause, BsFillPlayCircleFill } from 'react-icons/bs';
import SongBar from './SongBar';

const PlayPause = ({ isPlaying, activeSong, handlePlay, handlePause, song }) => (
  isPlaying && activeSong?.title === SongBar.title ?
    (
      <BsPause
        size={35}
        className='text-gray-300'
        onClick={handlePause}
      />
    ) : (
      <BsFillPlayCircleFill
        size={35}
        className='text-gray-300'
        onClick={handlePlay}
      />
    )
);

export default PlayPause;
