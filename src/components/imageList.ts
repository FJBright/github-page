import JapanTokyoTower from '../assets/images/JapanTokyoTower.jpg';
import JapanOsaka from '../assets/images/JapanOsaka.jpg';
import JapanAquarium from '../assets/images/JapanAquarium.jpg';
import JapanHimijiCastle from '../assets/images/JapanHimijiCastle.jpg';
import NZWork from '../assets/images/NZWork.png';

export interface CarouselItem {
    imageUrl: string,
    title: string,
    description: string,
};

export const personalPictures: CarouselItem[] = [
    {
      imageUrl: NZWork,
      title: '',
      description: '',
    },
    {
      imageUrl: JapanHimijiCastle,
      title: '',
      description: '',
    },
    {
      imageUrl: JapanTokyoTower,
      title: '',
      description: '',
    },
    {
      imageUrl: JapanAquarium,
      title: '',
      description: '',
    },
    {
      imageUrl: JapanOsaka,
      title: '',
      description: '',
    },
  ];
