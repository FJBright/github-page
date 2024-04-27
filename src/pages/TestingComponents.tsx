import Header from './Header';
// TODO replace these assets with images hosted elsewhere
import ReactMultiCarousel from '../components/reactMultiCarousel';
import { personalPictures } from '../components/imageList';
import ReactResponsiveCarousel from '../components/reactResponsiveCarousel';

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
        <div style={{
        }}>
          <ReactResponsiveCarousel carouselItems={personalPictures}/>
        </div>
      </div>
    </div>
  );
};

export default Home;