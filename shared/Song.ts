import MusicCategory from './Music';

export default interface Song {
  id: number;
  title: string;
  author: string;
  imageUrl: string;
  audioUrl: string;
  category: MusicCategory;
}
