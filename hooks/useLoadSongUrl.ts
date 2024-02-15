import {Song} from "@/types";
import {useSessionContext, useSupabaseClient} from "@supabase/auth-helpers-react";

export const useLoadSongUrl = (song: Song) => {
  const supabaseClient = useSupabaseClient();

  if(!song) return '';

  const { data: songData } = supabaseClient
    .storage
    .from('song')
    .getPublicUrl(song.song_path);

  return songData.publicUrl;
}