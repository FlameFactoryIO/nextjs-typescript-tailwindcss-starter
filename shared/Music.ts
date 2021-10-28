import Song from './Song';

export default interface MusicCategory {
  id: number;
  category: string;
  songs: Song[];
}
