import Media from './Media';
import Nonprofit from './Nonprofit';
import SocialImage from './SocialImage';

export default interface Impact {
  id: number;
  media1?: Media;
  media2?: Media;
  media3?: Media;
  media4?: Media;
  media5?: Media;
  media6?: Media;
  media7?: Media;
  media8?: Media;
  media: Media[];
  socialImages: SocialImage[];
  nonprofitId?: number;
  nonprofit?: Nonprofit;
}
