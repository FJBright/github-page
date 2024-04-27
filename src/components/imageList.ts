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
      title: 'Seng302',
      description: '4',
    },
    {
      imageUrl: JapanHimijiCastle,
      title: 'RaspberryPi - In Progress',
      description: '1',
    },
    {
      imageUrl: JapanTokyoTower,
      title: 'Github Page',
      description: '2',
    },
    {
      imageUrl: JapanAquarium,
      title: 'JapaneseReps',
      description: '3',
    },
    {
      imageUrl: JapanOsaka,
      title: 'Seng302',
      description: '4',
    },
  ];
