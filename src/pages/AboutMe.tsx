import Header from './Header';
// TODO replace these assets with images hosted elsewhere
import ReactResponsiveCarousel from '../components/reactResponsiveCarousel';
import { personalPictures } from '../components/imageList';
import ReactMultiCarousel from '../components/reactMultiCarousel';

export interface blogThumbnailDetails {
  title: string;
  imageUrl: string;
  // date: Date; // TODO organise projects by date
}

const AboutMe = () => {
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
        <div style={{
          paddingTop: '15px'
        }}>
          <ReactMultiCarousel carouselItems={personalPictures}/>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;