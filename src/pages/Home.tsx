import Header from './Header';
// TODO replace these assets with images hosted elsewhere
import { personalPictures } from '../components/imageList';
import ReactMultiCarousel from '../components/reactMultiCarousel';
import Typewriter from '../components/typewriter';

export interface blogThumbnailDetails {
  title: string;
  imageUrl: string;
}

const Home = () => {
  return (
    <div>
      <Header></Header>
      <div className="app" style={{
        backgroundColor: 'rgba(200, 200, 200, 1)',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh',
      }}>
        <div style={{
          paddingTop: '10vh',
          paddingLeft: '20vh',
          paddingRight: '20vh',
          height: '80vh',
          marginLeft: '10vw',
          marginRight: '10vw',
          backgroundColor: 'rgb(255 255 255 / 80%)',
          boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 3px 4px',
        }}>
          <div>
            <Typewriter
              text="Hey, welcome to my Github page "
              delay={100}
              startDelay={0}
            />
            <Typewriter
              text="Hey, welcome to my Github page"
              delay={100}
              startDelay={10}
            />
            <ReactMultiCarousel carouselItems={personalPictures}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;