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
        height: '100%',
        backgroundColor: 'rgba(20, 26, 31, 0.8)',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <div style={{
          paddingTop: '15px'
        }}>
          <h1>About Me</h1>
          <ReactMultiCarousel carouselItems={personalPictures} width={30} height={30}/>
          <p style={{paddingBottom: '50px'}}>Hi, I'm Finn, a graduate from the University of Canterbury, NZ.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;