import Header from './Header';
import BlogThumbnailList from '../components/projectThumbnailList';
// TODO replace these assets with images hosted elsewhere
import image1 from '../assets/images/image1.jpg';
import image2 from '../assets/images/image2.jpg';
import image3 from '../assets/images/image3.jpg';
import image4 from '../assets/images/image4.jpg';
import JapanAquarium from '../assets/images/JapanAquarium.jpg';
import JapanHimijiCastle from '../assets/images/JapanHimijiCastle.jpg';
import ImageCarousel, { CarouselItem } from '../components/carousel';


const carouselItems: CarouselItem[] = [
  {
    imageUrl: JapanHimijiCastle,
    title: 'RaspberryPi - In Progress',
    description: '1',
  },
  {
    imageUrl: image3,
    title: 'Github Page',
    description: '2',
  },
  {
    imageUrl: image2,
    title: 'JapaneseReps',
    description: '3',
  },
  {
    imageUrl: image1,
    title: 'Seng302',
    description: '4',
  },
];

export interface blogThumbnailDetails {
  title: string;
  imageUrl: string;
  // date: Date; // TODO organise projects by date
}

const Home = () => {
  return (
    <div>
      <Header></Header>
      <div className="app" style={{
        backgroundColor: 'rgba(20, 26, 31, 0.8)',
        borderRadius: '2px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <div></div>
        <div style={{
          padding: 30,
        }}>
          <h1>My Projects</h1>
          <ImageCarousel carouselItems={carouselItems}/>
        </div>
      </div>
    </div>
  );
};

export default Home;